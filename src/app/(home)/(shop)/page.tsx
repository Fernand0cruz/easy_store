import { prismaClient } from "@/lib/prisma"
import Categories from "./components/categories"
import SectionTittle from "../../../components/ui/section-tittle"
import PromotionalBanner from "./components/promotional-banner"
import Link from "next/link"
import dynamic from "next/dynamic"

const LazyProductList = dynamic(() => import('../../../components/ui/product-list'), { 
  ssr: false, 
  loading: () => <p>Carregando produtos...</p> 
});

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
  const [ deals, keyboards, mouses, headphones ] = await Promise.all([
    prismaClient.product.findMany({
      where: {
        discountPercentage: {
          gt: 0
        }
      }
    }),
    fetchProducts("keyboards"),
    fetchProducts("mouses"),
    fetchProducts("headphones"),
  ]);

  return (
    <div className="mx-auto max-w-7xl ">
      <div className="my-5">
        <Link href={"offers"}>
          <PromotionalBanner src={"/banner_1.png"} alt="banner_1.png" />
        </Link>
      </div>
      <div className="mx-5">
        <div>
          <Categories />
        </div>
        
        <div className="my-5">
          <SectionTittle>Ofertas</SectionTittle>
          <LazyProductList products={deals} />
        </div>

        <div>
          <Link href={"/category/keyboards"}>
            <PromotionalBanner src={"/banner_2.png"} alt="banner_2.png" />
          </Link>
        </div>

        <div className="my-5">
          <SectionTittle>Teclado</SectionTittle>
          <LazyProductList products={keyboards} />
        </div>

        <div>
          <Link href={"/category/mouses"}>
            <PromotionalBanner src={"/banner_3.png"} alt="banner_3.png" />
          </Link>
        </div>

        <div className="my-5">
          <SectionTittle>Mouse</SectionTittle>
          <LazyProductList products={mouses} />
        </div>

        <div>
          <Link href={"/category/headphones"}>
            <PromotionalBanner src={"/banner_4.png"} alt="banner_4.png" />
          </Link>
        </div>

        <div className="my-5">
          <SectionTittle>Fones</SectionTittle>
          <LazyProductList products={headphones} />
        </div>
      </div>
    </div>
  )
}
