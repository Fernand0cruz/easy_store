import { CartContext, CartProduct } from "@/providers/cart";
import { Button } from "./button";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
    product: CartProduct;
}
const CartItem = ({ product }: CartItemProps) => {
    const { decreaseProductQuantity, increaseProductQuantity, removeProductFromCart } = useContext(CartContext)
    const handleDecreaseProductQuantityClick = () => {
        decreaseProductQuantity(product.id)
    }
    const handleIncleaseProductQuantityClick = () => {
        increaseProductQuantity(product.id)
    }
    const handleRemoveProductFromCartClick = () => {
        removeProductFromCart(product.id)
    }
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="bg-accent flex items-center justify-center rounded-lg w-[77px] h-[77px]">
                    <Image
                        src={product.imgUrls[0]}
                        width={0}
                        height={0}
                        alt={product.name}
                        sizes="100vw"
                        className="h-auto max-h-[70%] w-auto max-w-[80%] rounded-lg"
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-xs">{product.name}</p>
                    <div className="flex items-center gap-2">
                        <p className="font-bold text-sm">R$ {product.totalPrice.toFixed(2)}</p>
                        {
                            product.discountPercentage > 0 && (
                                <p className="opacity-75 line-through text-xs">R$ {Number(product.basePrice).toFixed(2)}</p>
                            )
                        }
                    </div>
                    <div className="flex items-center gap-1 my-1">
                        <Button size={"icon"} variant={"outline"} className="w-8 h-8" onClick={handleDecreaseProductQuantityClick}>
                            <ArrowLeftIcon size={16} />
                        </Button>
                        <span className="text-xs">{product.quantity}</span>
                        <Button size={"icon"} variant={"outline"} className="w-8 h-8" onClick={handleIncleaseProductQuantityClick}>
                            <ArrowRightIcon size={16} />
                        </Button>
                    </div>
                </div>
            </div>
            <Button variant={"outline"} size="icon" onClick={handleRemoveProductFromCartClick}>
                <TrashIcon size={16}/>
            </Button>
        </div>
    );
}

export default CartItem;