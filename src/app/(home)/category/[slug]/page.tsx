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
        include:{
            products: true
        }
    })
    return (
        <div className="p-5 flex flex-col gap-8">
            <Badge className="gap-1 text-base uppercase border-primary py-[0.365rem] border-2 w-fit" variant={"outline"}>
                {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
                {category?.name}
            </Badge>
            <div className="grid grid-cols-2 gap-8">
                {
                    category?.products.map(category => <ProductItem key={category.id} product={computeProductTotalPrice(category)} />)
                }
            </div>
        </div>
    );
}

export default CategoryProducts;