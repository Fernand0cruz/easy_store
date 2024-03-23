import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { prismaClient } from "@/lib/prisma"
import ProductTable, { ProductWithTotalPriceAndCategory } from "./components/product-table";
import { computeProductTotalPrice } from "@/helpers/product";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function PageDashboard() {
    const isAdmin = await prismaClient.user.findFirst({
        where: {
            isAdmin: true
        }
    })

    const products = await prismaClient.product.findMany({
        include: {
            category: {
                select: {
                    name: true,
                },
            },
        },
    });

    const productsWithTotalPrice: ProductWithTotalPriceAndCategory[] =
        products.map((product) => ({
            ...product,
            totalPrice: computeProductTotalPrice(product),
        }));

    const session = await getServerSession(authOptions)

    if (isAdmin && session?.user?.email === isAdmin.email) {
        return (
            <Tabs defaultValue="products" className="w-full">
                <TabsList className="w-full">
                    <TabsTrigger value="products">Produtos</TabsTrigger>
                    <TabsTrigger value="users">Order</TabsTrigger>
                </TabsList>
                <TabsContent value="products" className="w-full">
                    <ProductTable products={productsWithTotalPrice} />
                </TabsContent>
            </Tabs>
        )
    } else {
        return (
            <div className="flex w-full h-full flex-col items-center justify-center py-8">
                <h1 className=" text-4xl">Sem autorização</h1>
                <p>Página de ADMINISTRADOR faça login com seu email de admin para ter acesso</p>
            </div>
        );
    }
}
