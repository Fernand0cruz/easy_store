import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Order, Prisma } from "@prisma/client"
import { format } from "date-fns";
import OrderProductItem from "./order-product-item";
import { Separator } from "@/components/ui/separator";
import { useMemo } from "react";
import { computeProductTotalPrice } from "@/helpers/product";
interface OrderItemProps {
    order: Prisma.OrderGetPayload<{
        include: {
            orderProducts: {
                include: {
                    product: true
                }
            }
        }
    }>
}

const OrderItem = ({ order }: OrderItemProps) => {

    const subtotal = useMemo(() => {
        return order.orderProducts.reduce((acc, orderProduct) => {
            return acc + orderProduct.product.basePrice * orderProduct.quantity;
        }, 0);
    }, [order.orderProducts]);

    const total = useMemo(() => {
        return order.orderProducts.reduce((acc, product) => {
            const productWithTotalPrice = computeProductTotalPrice(product.product);
            return acc + productWithTotalPrice.totalPrice * product.quantity;
        }, 0);
    }, [order.orderProducts]);

    const totalDiscount = useMemo(() => {
        return subtotal - total;
    }, [subtotal, total]);

    return (
        <Card className="px-5">
            <Accordion type="single" className="w-full" collapsible>
                <AccordionItem value={order.id}>
                    <AccordionTrigger>
                        <div className="flex flex-col gap-1 text-left">
                            <p>Pedido com {order.orderProducts.length} produtos</p>
                            <p className="  opacity-75 text-sm">Feito em {format(order.createdAt, "dd/MM/yyyy 'as' HH:mm")}</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <div className="font-bold">
                                    <p>Status:</p>
                                    <p className="text-primary">{order.status}</p>
                                </div>
                                <div className="font-bold">
                                    <p>Data:</p>
                                    <p className="opacity-75">{format(order.createdAt, "dd/MM/yyyy")}</p>
                                </div>
                                <div className="font-bold">
                                    <p>Pagamento:</p>
                                    <p className="opacity-75">Cartão</p>
                                </div>
                            </div>
                            {
                                order.orderProducts.map(orderProduct => (
                                    <OrderProductItem key={orderProduct.id} orderProduct={orderProduct}/>
                                ))
                            }
                            <div className="flex flex-col gap-1 text-xs">
                                <Separator/>
                                <div className="flex w-full justify-between py-3">
                                    <p>Subtotal</p>
                                    <p>R$ {subtotal.toFixed(2)}</p>
                                </div>
                                <Separator/>
                                <div className="flex w-full justify-between py-3">
                                    <p>Entrega</p>
                                    <p>GRÁTIS</p>
                                </div>
                                <Separator/>
                                <div className="flex w-full justify-between py-3">
                                    <p>Descontos</p>
                                    <p>-R$ {totalDiscount.toFixed(2)}</p>
                                </div>
                                <Separator/>
                                <div className="flex w-full justify-between py-3 font-bold">
                                    <p>Total</p>
                                    <p>R$ {total.toFixed(2)}</p>
                                </div>
                               
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Card>
    );
}

export default OrderItem;