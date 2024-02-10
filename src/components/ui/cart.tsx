import { useContext } from "react";
import { Badge } from "./badge";
import { ShoppingCartIcon } from "lucide-react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { Separator } from "./separator";

const Cart = () => {
    const { products, subTotal, total, totalDiscount } = useContext(CartContext)
    return (
        <>
            <Badge className="gap-2 text-base uppercase border-primary py-[0.365rem] border-2 w-fit " variant={"outline"}>
                <ShoppingCartIcon />
                Carrinho
            </Badge>
            <div className="flex flex-col gap-5 my-8">
                {products.length > 0 ?
                    products.map((product, index) => (
                        <CartItem key={index} product={product} />
                    )) : <p className="text-center font-semibold">Carrinho vazio, vamos as compras?</p>
                }
            </div>
            <div className="flex flex-col gap-3">
                <Separator/>
                <div className="flex items-center justify-between text-xs">
                    <p>Subtotal</p>
                    <p>R$ {subTotal.toFixed(2)}</p>
                </div>
                <Separator/>
                <div className="flex items-center justify-between text-xs">
                    <p>Entrega</p>
                    <p>GRÁTIS</p>
                </div>
                <Separator/>
                <div className="flex items-center justify-between text-xs">
                    <p>Descontos</p>
                    <p>- R$ {totalDiscount.toFixed(2)}</p>
                </div>
                <Separator/>
                <div className="flex items-center justify-between text-sm font-bold">
                    <p>Preço Total</p>
                    <p>R$ {total.toFixed(2)}</p>
                </div>
                <Separator/>
            </div>
        </>
    );
}

export default Cart;