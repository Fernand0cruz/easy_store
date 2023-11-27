import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
interface ProductItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <div className="flex flex-col max-w-[156px] gap-4">
            <div className="bg-[#292929] rounded-lg w-[156px] h-[170px] flex items-center justify-center relative">
                <img
                    src={product.imgUrls[0] + "?text=" + product.name + " img"}
                    alt={product.name}
                    className="w-auto h-auto max-w-[80%] max-h-[70%]:"
                    style={{
                        objectFit: "contain"
                    }}
                />
                {
                    product.discountPercentage > 0 && (
                        <Badge className="absolute left-3 top-3 px-2 py-[2px]">
                            <ArrowDownIcon size={14}/> {product.discountPercentage}%
                        </Badge>
                    )
                }
            </div>


            <div>
                <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>
                <div className="flex items-center gap-2">
                    {
                        product.discountPercentage > 0 ? (
                            <>
                                <p className="font-semibold texr-sm">R${product.totalPrice.toFixed(2)}</p>
                                <p className="opacity-75 line-through text-[.8rem]">R${product.basePrice.toFixed(2)}</p>
                            </>
                        ) : (
                            <p className="font-semibold texr-sm">R$ {product.basePrice.toFixed(2)}</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductItem;