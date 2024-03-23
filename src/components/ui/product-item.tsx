import { ProductWithTotalPrice } from "@/helpers/product";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
interface ProductItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <Link href={`/product/${product.slug}`} className="flex">
            <div className="flex flex-col w-full gap-4 min-w-[160px]">
                <div className="bg-[#292929] rounded-lg h-[170px] w-full flex items-center justify-center relative lg:h-[200px] lg:w-[200px]">
                    <Image
                        src={product.imgUrls[0]}
                        alt={product.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto h-auto max-w-[80%] max-h-[70%] object-contain"
                        loading="lazy"
                    />
                    {
                        product.discountPercentage > 0 && (
                            <Badge className="absolute left-3 top-3 px-2 py-[2px]">
                                <ArrowDownIcon size={14} /> {product.discountPercentage}%
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
        </Link>
    );
}

export default ProductItem;