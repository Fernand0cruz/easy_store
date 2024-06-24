import { prismaClient } from "@/lib/prisma"
import Categories from "./components/categories"
import SectionTittle from "../../../components/ui/section-tittle"
import PromotionalBanner from "./components/promotional-banner"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Card } from "@/components/ui/card"
import { ArrowRightFromLineIcon } from "lucide-react"

// Componente dinâmico para importar o componente de lista de produtos de forma assíncrona
const LazyProductList = dynamic(() => import('../../../components/ui/product-list'), {
  ssr: false,  // Desabilita a renderização do lado do servidor para este componente
  loading: () => <p>Carregando produtos...</p>  // Componente de carregamento enquanto o componente principal carrega
});

// Função assíncrona para buscar produtos com base no slug da categoria
const fetchProducts = async (slug: string) => {
  return prismaClient.product.findMany({
    where: {
      category: {
        slug: slug,
      }
    }
  });
}

export default async function Home() {

  // Realiza várias consultas assíncronas para buscar produtos específicos
  const [deals, keyboards, mouses, headphones] = await Promise.all([
    // Busca produtos com desconto
    prismaClient.product.findMany({
      where: {
        discountPercentage: {
          gt: 0
        }
      }
    }),
    // Busca produtos da categoria "keyboards" usando a função fetchProducts
    fetchProducts("keyboards"),
    // Busca produtos da categoria "mouses" usando a função fetchProducts
    fetchProducts("mouses"),
    // Busca produtos da categoria "headphones" usando a função fetchProducts
    fetchProducts("headphones"),
  ]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-5">
        <Link href={"offers"}>
          <PromotionalBanner src={"/banner_1.png"} alt="banner_1.png" />
        </Link>

        <div>
          <Categories />
        </div>

        <Card className="py-4 px-2">
          <div className="flex justify-between">
            <SectionTittle>Ofertas</SectionTittle>
            <Link href={"offers"} className="hidden sm:flex">
              <p className="uppercase font-bold flex">ver mais<ArrowRightFromLineIcon /></p>
            </Link>
          </div>
          <LazyProductList products={deals} />
        </Card>

        <Card className="py-4 px-2">
          <div className="mb-4">
            <div className="flex justify-between">
              <SectionTittle>Teclado</SectionTittle>
              <Link href={"/category/keyboards"} className="hidden sm:flex">
                <p className="uppercase font-bold flex">ver mais<ArrowRightFromLineIcon /></p>
              </Link>
            </div>
            <LazyProductList products={keyboards} />
          </div>
          <Link href={"/category/keyboards"}>
            <PromotionalBanner src={"/banner_2.png"} alt="banner_2.png" />
          </Link>
        </Card>

        <Card className="py-4 px-2">
          <div className="mb-4">
            <div className="flex justify-between">
              <SectionTittle>Mouse</SectionTittle>
              <Link href={"/category/mouses"} className="hidden sm:flex">
                <p className="uppercase font-bold flex">ver mais<ArrowRightFromLineIcon /></p>
              </Link>
            </div>
            <LazyProductList products={mouses} />
          </div>
          <Link href={"/category/mouses"}>
            <PromotionalBanner src={"/banner_3.png"} alt="banner_3.png" />
          </Link>
        </Card>

        <Card className="py-4 px-2">
          <div className="mb-4">
            <div className="flex justify-between">
              <SectionTittle>Fones</SectionTittle>
              <Link href={"/category/headphones"} className="hidden sm:flex">
                <p className="uppercase font-bold flex">ver mais<ArrowRightFromLineIcon /></p>
              </Link>
            </div>
            <LazyProductList products={headphones} />
          </div>
          <Link href={"/category/headphones"}>
            <PromotionalBanner src={"/banner_4.png"} alt="banner_4.png" />
          </Link>
        </Card>
      </div>
    </div>
  )
}
