import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import OrderItem from "./components/order-otem";


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
            <div className="flex flex-col gap-5 mt-5">
                {
                    orders.map((order) => (
                        <OrderItem key={order.id} order={order} />
                    ))
                }
            </div>
        </div>
    );
}
export default PageOrder;