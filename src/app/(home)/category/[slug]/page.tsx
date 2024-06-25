import { prismaClient } from "@/lib/prisma";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { CATEGORY_ICON } from "@/constants/category-icons";
import SectionTittle from "@/components/ui/section-tittle";
import { Card } from "@/components/ui/card";

const CategoryProducts = async ({ params }: any) => {
    // Busca a categoria e seus produtos associados do banco de dados usando o slug fornecido
    const category = await prismaClient.category.findFirst({
        where: {
            slug: params.slug
        },
        include: {
            products: true // Inclui os produtos associados à categoria
        }
    })

    return (
        <Card className="flex flex-col mt-5 max-w-screen-xl mx-auto py-5 px-2">
            <div className="flex gap-2">
                {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
                <SectionTittle>
                    {category?.name}
                </SectionTittle>
            </div>
            <div className="grid gap-2 gap-y-5 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                
                {
                    category?.products.map((product) => (
                        <div key={product.id}>
                            <ProductItem
                                key={product.id}
                                product={{
                                    ...product,
                                    totalPrice: computeProductTotalPrice(product),
                                }}
                            />
                        </div>
                    ))
                }
                
            </div>
        </Card>
    );
}
export default CategoryProducts;