import { useContext } from "react";
import { Badge } from "./badge";
import { ShoppingCartIcon } from "lucide-react";
import { CartContext } from "@/providers/cart";

const Cart = () => {
    const {products} = useContext(CartContext)
    return (
        <>
            <Badge className="gap-2 text-base uppercase border-primary py-[0.365rem] border-2 w-fit " variant={"outline"}>
                <ShoppingCartIcon/>
                Carrinho
            </Badge>

            {
                products.map((product, index) => (
                    <div key={index}>
                        {product.name}
                    </div>
                ))
            }
        </>
    );
}
 
export default Cart;