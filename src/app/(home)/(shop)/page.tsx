import { prismaClient } from "@/lib/prisma"
import Categories from "./components/categories"
import ProductList from "../../../components/ui/product-list"
import SectionTittle from "../../../components/ui/section-tittle"
import PromotionalBanner from "./components/promotional-banner"
import Link from "next/link"

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }
    }
  })
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      }
    }
  })
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      }
    }
  })
  const headphones = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "headphones",
      }
    }
  })
  return (
    <div className="mx-auto max-w-[1920px] ">
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
          <ProductList products={deals} />
        </div>

        <div>
          <Link href={"/category/keyboards"}>
            <PromotionalBanner src={"/banner_2.png"} alt="banner_2.png" />
          </Link>
        </div>

        <div className="my-5">
          <SectionTittle>Teclado</SectionTittle>
          <ProductList products={keyboards} />
        </div>

        <div>
          <Link href={"/category/mouses"}>
            <PromotionalBanner src={"/banner_3.png"} alt="banner_3.png" />
          </Link>
        </div>

        <div className="my-5">
          <SectionTittle>Mouse</SectionTittle>
          <ProductList products={mouses} />
        </div>

        <div>
          <Link href={"/category/headphones"}>
            <PromotionalBanner src={"/banner_4.png"} alt="banner_4.png" />
          </Link>
        </div>

        <div className="my-5">
          <SectionTittle>Fones</SectionTittle>
          <ProductList products={headphones} />
        </div>
      </div>
    </div>
  )
}
