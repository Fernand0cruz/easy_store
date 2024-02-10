import { useContext } from "react";
import { Badge } from "./badge";
import { ShoppingCartIcon } from "lucide-react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";

const Cart = () => {
    const { products } = useContext(CartContext)
    return (
        <>
            <Badge className="gap-2 text-base uppercase border-primary py-[0.365rem] border-2 w-fit " variant={"outline"}>
                <ShoppingCartIcon />
                Carrinho
            </Badge>
            <div className="flex flex-col gap-5 my-8">
                {
                    products.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))
                }
            </div>
        </>
    );
}

export default Cart;