import { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { 
    signIn, 
    useSession 
} from "next-auth/react";
import { createOrder } from "@/actions/order";

const Cart = () => {

    const { data, status } = useSession()
    const { products, subTotal, total, totalDiscount } = useContext(CartContext)

    const handleFinishPurchase = async () => {

        if (!data?.user) {
            // Se o usuário não estiver autenticado, não faz nada
            return;
        }

        // Criação do pedido
        const order = await createOrder(products, (data.user as any).id);
        // Criação da sessão de checkout no Stripe
        const checkout = await createCheckout(products, order.id);
        // Carrega a instância do Stripe com a chave pública
        const stripe = await loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`);
        // Redireciona o usuário para o checkout do Stripe
        stripe?.redirectToCheckout({
            sessionId: checkout.id
        });
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex gap-2">
                <ShoppingCartIcon />
                <h1 className="text-left text-lg font-semibold">Carrinho</h1>
            </div>
            <div className="flex flex-col gap-5 my-8 h-full max-h-full overflow-hidden">
                <ScrollArea className="h-full">
                    <div className="flex flex-col gap-5 h-full">

                        {products.length > 0 ?
                            products.map((product, index) => (
                                <CartItem key={index} product={product} />
                            )) : <p className="text-center font-semibold">Carrinho vazio, vamos as compras?</p>
                        }

                    </div>
                </ScrollArea>
            </div>

            {
                products.length > 0 && (

                    <div className="flex flex-col gap-3">
                        <Separator />
                        <div className="flex items-center justify-between text-xs">
                            <p>Subtotal</p>
                            <p>R$ {subTotal.toFixed(2)}</p>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between text-xs">
                            <p>Entrega</p>
                            <p>GRÁTIS</p>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between text-xs">
                            <p>Descontos</p>
                            <p>- R$ {totalDiscount.toFixed(2)}</p>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between text-sm font-bold">
                            <p>Preço Total</p>
                            <p>R$ {total.toFixed(2)}</p>
                        </div>
                        <Separator />

                        {
                            status === "unauthenticated" ? (
                                <Button className="uppercase font-semibold" onClick={() => signIn()}>Logar para finalizar compra</Button>
                            ) : (
                                <Button className="uppercase font-semibold" onClick={handleFinishPurchase}>Finalizar Compra</Button>
                            )
                        }

                    </div>
                )
            }

        </div>
    );
}
export default Cart;