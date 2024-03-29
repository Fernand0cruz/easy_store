import { prismaClient } from "@/lib/prisma"
import ProductImage from "./components/product-images"
import ProductInfo from "./components/product-inf"
import { computeProductTotalPrice } from "@/helpers/product"
import ProductList from "@/components/ui/product-list"
import SectionTittle from "@/components/ui/section-tittle"
interface ProductDetailsPageProps {
    params: {
        slug: string
    }
}
const ProductDetailsPage = async ({ params: { slug } }: ProductDetailsPageProps) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug
        },
        include: {
            category: {
                include: {
                    products: {
                        where: {
                            slug: {
                                not: slug
                            }
                        }
                    }
                }
            }
        }

    })
    if (!product) return null
    return (
        <div className="flex flex-col gap-8 pb-8">
            <ProductImage imageUrls={product.imgUrls} name={product.name} />
            <ProductInfo product={{
                ...product,
                totalPrice: computeProductTotalPrice(product),
            }} />
            <div>
                <SectionTittle>Produtos semelhantes</SectionTittle>
                <ProductList products={product.category.products} />
            </div>
        </div>
    );
}

export default ProductDetailsPage;