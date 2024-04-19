import { prismaClient } from "@/lib/prisma";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icons";

const CategoryProducts = async ({ params }: any) => {
    const category = await prismaClient.category.findFirst({
        where: {
            slug: params.slug
        },
        include: {
            products: true
        }
    })
    return (
        <div className="p-5 flex flex-col gap-5 max-w-[1920px] m-auto">
            <Badge className="gap-1 text-base uppercase border-primary py-[0.365rem] border-2 w-fit" variant={"outline"}>
                {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
                {category?.name}
            </Badge>
            <div className="flex flex-wrap gap-5 justify-center">
                {
                    category?.products.map((product) => (
                        <div key={product.id} className="w-[170px] lg:w-[200px] lg:min-w-[200px]">
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
        </div>
    );
}

export default CategoryProducts;