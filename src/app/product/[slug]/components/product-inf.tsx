"use client"

import { ProductWithTotalPrice } from "@/helpers/product";
import { Badge } from "@/components/ui/badge";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProductInfoProps {
    product: Pick<
        ProductWithTotalPrice,
        "basePrice"
        | "description"
        | "discountPercentage"
        | "totalPrice"
        | "name"
    >
}
const ProductInfo = ({ product: { basePrice, description, discountPercentage, totalPrice, name } }: ProductInfoProps) => {
    const [quantity, setQuantity] = useState(1)

    const handleQuantityincrease = () => {
        setQuantity((prev) => prev + 1)
    }
    const handleQuantityDecrease = () => {
        setQuantity((prev) => (prev === 1 ? prev : prev - 1))
    }

    return (
        <div className="flex flex-col px-5">
            <h2 className="text-lg">{name}</h2>
            <div className="flex items-center gap-1">
                <h1>R$ {totalPrice.toFixed(2)}</h1>
                {
                    discountPercentage > 0 && (
                        <Badge className="px-2 py-[2px]">
                            <ArrowDownIcon size={14} /> {discountPercentage}%
                        </Badge>
                    )
                }
            </div>
            {
                discountPercentage > 0 && (
                    <p className="text-xs opacity-75 line-through">R$ {basePrice.toFixed(2)}</p>
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
                <p className="text-sm opacity-75 text-justify">{description}</p>
            </div>
            <Button className="mt-8 uppercase font-bold">Adicionar ao carrinho</Button>
        </div>
    )
}

export default ProductInfo;