import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

// Inicializa a instância do Stripe com a chave secreta e define a versão da API
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-10-16",
});

// Função que lida com as requisições POST para a rota da webhook
export const POST = async (request: Request) => {
    // Obtém a assinatura do cabeçalho da requisição
    const signature = request.headers.get("stripe-signature");

    // Se a assinatura estiver ausente, retorna um erro
    if (!signature) {
        return NextResponse.error();
    }

    // Lê o corpo da requisição como texto
    const text = await request.text();

    let event: Stripe.Event;

    try {
        // Constrói o evento a partir do corpo da requisição e da assinatura, verificando a autenticidade
        event = stripe.webhooks.constructEvent(
            text,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET_KEY as string,
        );
    } catch (err) {
        // Loga um erro caso a verificação da assinatura falhe
        console.error("Stripe webhook signature verification failed:", err);
        return NextResponse.error();
    }

    // Processa o evento específico de sessão de checkout completada
    if (event.type === "checkout.session.completed") {
        // Obtém os dados da sessão de checkout do evento
        const session = event.data.object as Stripe.Checkout.Session;

        try {
            // Recupera a sessão de checkout com itens de linha expandidos
            const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
                session.id,
                {
                    expand: ["line_items"],
                },
            );

            // Obtém os itens de linha da sessão recuperada
            const lineItems = sessionWithLineItems.line_items;

            // Atualiza o status do pedido no banco de dados para "PAYMENT_CONFIRMED"
            await prismaClient.order.update({
                where: {
                    id: session.metadata?.orderId as string, // Garante que o orderId seja uma string
                },
                data: {
                    status: "PAYMENT_CONFIRMED",
                },
            });
        } catch (err) {
            // Loga um erro caso ocorra um problema ao processar o evento do Stripe
            console.error("Error processing Stripe event:", err);
            return NextResponse.error();
        }
    }
    return NextResponse.json({ received: true });
};
