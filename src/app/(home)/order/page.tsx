import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import OrderItem from "./components/order-item";

const PageOrder = async () => {
    // Obtém a sessão atual
    const session = await getServerSession(authOptions)
    // Verifica se o usuário está autenticado
    if (!session || !session.user) {
        return (
            <div className="flex w-full h-full flex-col items-center justify-center py-8">
                <h1 className="text-4xl">Sem autorização</h1>
                <p>Faça Login para ver essa página</p>
            </div>
        )
    }
    // Busca as ordens do usuário autenticado
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
        <div className="max-w-screen-xl m-auto mt-5">
            <div className="flex gap-2">
                <PackageSearchIcon />
                <span>Meus Pedidos</span>
            </div>
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