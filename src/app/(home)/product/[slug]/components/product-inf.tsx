"use client"

import { ProductWithTotalPrice } from "@/helpers/product";
import { Badge } from "@/components/ui/badge";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/providers/cart";

interface ProductInfoProps {
    product: ProductWithTotalPrice
}
const ProductInfo = ({ product }: ProductInfoProps) => {
    const [quantity, setQuantity] = useState(1)

    const {addProductToCart} = useContext(CartContext)

    const handleQuantityincrease = () => {
        setQuantity((prev) => prev + 1)
    }
    const handleQuantityDecrease = () => {
        setQuantity((prev) => (prev === 1 ? prev : prev - 1))
    }

    const handleClickAddToCart = () => {
        addProductToCart({
            ...product,
            quantity
        })
    }

    return (
        <div className="flex flex-col px-5">
            <h2 className="text-lg">{product.name}</h2>
            <div className="flex items-center gap-1">
                <h1>R$ {product.totalPrice.toFixed(2)}</h1>
                {
                    product.discountPercentage > 0 && (
                        <Badge className="px-2 py-[2px]">
                            <ArrowDownIcon size={14} /> {product.discountPercentage}%
                        </Badge>
                    )
                }
            </div>
            {
                product.discountPercentage > 0 && (
                    <p className="text-xs opacity-75 line-through">R$ {product.basePrice.toFixed(2)}</p>
                )
            }
            <div className="flex items-center gap-2 mt-2">
                <Button size={"icon"} variant={"outline"} onClick={handleQuantityDecrease}>
                    <ArrowLeftIcon size={16} />
                </Button>
                <span>{quantity}</span>
                <Button size={"icon"} variant={"outline"} onClick={handleQuantityincrease}>
                    <ArrowRightIcon size={16} />
                </Button>
            </div>
            <div className="flex flex-col gap-3 mt-8">
                <h3 className="font-bold">Descrição</h3>
                <p className="text-sm opacity-75 text-justify">{product.description}</p>
            </div>
            <Button className="mt-8 uppercase font-bold" onClick={handleClickAddToCart}>Adicionar ao carrinho</Button>
        </div>
    )
}

export default ProductInfo;