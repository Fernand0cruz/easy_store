"use client"
import { ProductWithTotalPrice } from "@/helpers/product";
import { Badge } from "@/components/ui/badge";
import { 
    ArrowDownIcon, 
    ArrowLeftIcon, 
    ArrowRightIcon, 
    CarIcon 
} from "lucide-react";
import { 
    useState, 
    useContext 
} from "react";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/providers/cart";

interface ProductInfoProps {
    product: ProductWithTotalPrice
}
const ProductInfo = ({ product }: ProductInfoProps) => {
    const [quantity, setQuantity] = useState<number>(1); // Define o estado inicial da quantidade do produto
    const { addProductToCart } = useContext(CartContext); // Usa o contexto do carrinho para adicionar produtos

    // Função para aumentar a quantidade do produto
    const handleQuantityIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    // Função para diminuir a quantidade do produto
    const handleQuantityDecrease = () => {
        setQuantity((prev) => (prev === 1 ? prev : prev - 1));
    };

    // Função para adicionar o produto ao carrinho
    const handleClickAddToCart = () => {
        addProductToCart({
            ...product,
            quantity,
        });
    };

    return (
        <div className="flex flex-col gap-5 lg:w-2/5">
            <h2 className="text-lg lg:text-2xl uppercase">{product.name}</h2>
            <div>

                {
                    product.discountPercentage > 0 && (
                        <p className="text-xs opacity-75 line-through lg:text-base">De R$ {product.basePrice.toFixed(2)}</p>
                    )
                }

                <div className="flex items-center gap-2">
                    <h1>POR R$ {product.totalPrice.toFixed(2)}</h1>

                    {
                        product.discountPercentage > 0 && (
                            <Badge>
                                <ArrowDownIcon size={14} /> {product.discountPercentage}% OFF
                            </Badge>
                        )
                    }

                </div>
            </div>
            <div className="flex items-center gap-2">
                Quantidade:
                <Button size={"icon"} variant={"outline"} onClick={handleQuantityDecrease}>
                    <ArrowLeftIcon size={16} />
                </Button>
                <span>{quantity}</span>
                <Button size={"icon"} variant={"outline"} onClick={handleQuantityIncrease}>
                    <ArrowRightIcon size={16} />
                </Button>
            </div>
            <div className="flex flex-1 flex-col gap-2">
                <h3 className="uppercase">Descrição</h3>
                <p className="text-sm opacity-75 text-justify">{product.description}</p>
            </div>
            <div className="flex gap-2">
                <CarIcon />
                <span>FRETE GRÁTIS</span>
            </div>
            <Button className="uppercase font-bold rounded-none" onClick={handleClickAddToCart}>Adicionar ao carrinho</Button>
        </div>
    )
}
export default ProductInfo;