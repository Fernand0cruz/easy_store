import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";


const PageOrder = async () => {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
        return (
            <div className="flex w-full flex-col items-center justify-center py-8">
                <h1 className=" text-4xl">Sem autorização</h1>
                <p>Faça Login para ver essa página</p>
            </div>
        )
    }
    const orders = await prismaClient.order.findMany({
        where: {
            userId: session.user.id
        },
        include: {
            orderProducts: {
                include: {
                    product: true
                }
            }
        }
    })
    return (
        <div className="p-5">
            <Badge variant="heading">
                <PackageSearchIcon size={16} />
                Meus Pedidos
            </Badge>

            <div>
                {
                    orders.map((order) => {
                        return (
                            <div key={order.id}>
                                <h2>Pedido: {order.id}</h2>
                                <div>
                                    {
                                        order.orderProducts.map((orderProduct) => {
                                            return (
                                                <div key={orderProduct.id}>
                                                    <h3>{orderProduct.product.name}</h3>
                                                    <p>Quantidade: {orderProduct.quantity}</p>
                                                    <p>R$ {orderProduct.product.basePrice}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default PageOrder;