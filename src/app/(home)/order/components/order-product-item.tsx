import { computeProductTotalPrice } from "@/helpers/product";
import { Prisma } from "@prisma/client";
import Image from "next/image";

interface OrderProductItemProps {
    orderProduct: Prisma.OrderProductGetPayload<{
        include: {
            product: true
        }
    }>
}

const OrderProductItem = ({ orderProduct }: OrderProductItemProps) => {

    const productWithTotalPrice = computeProductTotalPrice(orderProduct.product);
    
    return ( 
        <div className="flex items-center gap-4">
            <div className="bg-accent w-[77px] h-[77px] flex items-center justify-center rounded-md">
                <Image
                    src={orderProduct.product.imgUrls[0]}
                    alt={orderProduct.product.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-xs">{orderProduct.product.name}</p>
                <div className="flex items-center gap-2">
                    <p className="text-sm font-bold">R${productWithTotalPrice.toFixed(2)}</p>
                    {
                        orderProduct.product.discountPercentage > 0 && (
                            <p className="opacity-75 line-through text-xs">R${orderProduct.product.basePrice.toFixed(2)}</p>
                        )
                    }
                  
                </div>
                <p>Qtd: {orderProduct.quantity}</p>
            </div>
        </div>   
    );
}
export default OrderProductItem;