import { prismaClient } from "@/lib/prisma"
import ProductImage from "./components/product-images"
import ProductInfo from "./components/product-inf"
import { computeProductTotalPrice } from "@/helpers/product"
import ProductList from "@/components/ui/product-list"
import SectionTittle from "@/components/ui/section-tittle"
import { Card } from "@/components/ui/card"

interface ProductDetailsPageProps {
    params: {
        slug: string
    }
}

const ProductDetailsPage = async ({ params: { slug } }: ProductDetailsPageProps) => {
    // Busca o produto no banco de dados usando o slug fornecido
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
                                not: slug, // Exclui o produto atual da lista de produtos semelhantes
                            }
                        }
                    }
                }
            }
        }
    })
    // Se o produto não for encontrado, retorna uma mensagem de erro
    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1>Produto não encontrado</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5 mt-5 max-w-screen-xl mx-auto">
            <Card className="flex flex-col gap-2 px-2 py-5 lg:flex-row">
                <ProductImage imageUrls={product.imgUrls} name={product.name} />
                <ProductInfo product={{
                    ...product,
                    totalPrice: computeProductTotalPrice(product),
                }} />
            </Card>
            <Card className="flex flex-col px-2 py-5">
                <SectionTittle>Produtos semelhantes</SectionTittle>
                <ProductList products={product.category.products} />
            </Card>
        </div>
    );
}
export default ProductDetailsPage;