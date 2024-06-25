"use server";
import { CartProduct } from "@/providers/cart";
import Stripe from "stripe";

// Função assíncrona para criar uma sessão de checkout no Stripe
export const createCheckout = async (
    products: CartProduct[],
    orderId: string, 
) => {
    // Inicializa o cliente Stripe com a chave secreta e a versão da API
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2023-10-16",
    });

    // Cria uma sessão de checkout no Stripe
    const checkout = await stripe.checkout.sessions.create({
        payment_method_types: ["card"], 
        mode: "payment", 
        success_url: "https://easystor.vercel.app/order", 
        cancel_url: "https://easystor.vercel.app",
        metadata: {
            orderId, // Adiciona o ID do pedido aos metadados da sessão
        },
        line_items: products.map((product) => { // Mapeia os produtos do carrinho para os itens da linha de checkout
            return {
                price_data: { 
                    currency: "brl", // Define a moeda como Real Brasileiro
                    product_data: { 
                        name: product.name, 
                        description: product.description, 
                        images: product.imgUrls,
                    },
                    unit_amount: product.totalPrice * 100, // Preço do produto em centavos (Stripe trabalha com menores unidades da moeda)
                },
                quantity: product.quantity,
            };
        }),
    });
    return checkout;
};