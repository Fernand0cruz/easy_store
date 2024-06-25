import { 
    CartContext, 
    CartProduct 
} from "@/providers/cart";
import { Button } from "./button";
import Image from "next/image";
import { 
    ArrowLeftIcon, 
    ArrowRightIcon, 
    TrashIcon 
} from "lucide-react";
import { useContext } from "react";
import { Card } from "./card";

interface CartItemProps {
    product: CartProduct;
}
const CartItem = ({ product }: CartItemProps) => {

    // Obtém as funções de contexto para manipulação do carrinho
    const { decreaseProductQuantity, increaseProductQuantity, removeProductFromCart } = useContext(CartContext);

    // Função para lidar com o clique para diminuir a quantidade do produto no carrinho
    const handleDecreaseProductQuantityClick = () => {
        decreaseProductQuantity(product.id); // Chama a função para diminuir a quantidade do produto específico
    };

    // Função para lidar com o clique para aumentar a quantidade do produto no carrinho
    const handleIncleaseProductQuantityClick = () => {
        increaseProductQuantity(product.id); // Chama a função para aumentar a quantidade do produto específico
    };

    // Função para lidar com o clique para remover o produto do carrinho
    const handleRemoveProductFromCartClick = () => {
        removeProductFromCart(product.id); // Chama a função para remover o produto específico do carrinho
    };

    return (
        <Card className="flex items-center justify-between p-2">
            <div className="flex items-center gap-2">
                <div className="bg-accent flex items-center justify-center w-[77px] h-[77px]">
                    <Image
                        src={product.imgUrls[0]}
                        width={70}
                        height={70}
                        alt={product.name}
                        sizes="100vw"
                        className="h-auto max-h-[70%] w-auto max-w-[80%] rounded-lg"
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
                    <div className="flex items-center gap-2 mt-2">
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
            <Button variant={"outline"} size="icon" onClick={handleRemoveProductFromCartClick} className=" hover:bg-primary">
                <TrashIcon size={16} />
            </Button>
        </Card>
    );
}
export default CartItem;