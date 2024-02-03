import { prismaClient } from "@/lib/prisma"
import Categories from "./components/categories"
import ProductList from "../../components/ui/product-list"
import SectionTittle from "./components/section-tittle"
import PromotionalBanner from "./components/promotional-banner"

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
    <div >
      <div className="m-5">
        <PromotionalBanner src={"banner_1.png"} alt=""/>
      </div>

      <div className="mx-5">
        <Categories />
      </div>

      <div className="my-5">
        <SectionTittle>Ofertas</SectionTittle>
        <ProductList products={deals} />
      </div>

      <div className="mx-5">
        <PromotionalBanner src={"banner_4.png"} alt=""/>
      </div>

      <div className="my-5">
        <SectionTittle>Teclado</SectionTittle>
        <ProductList products={keyboards} />
      </div>
      
      <div className="mx-5">
        <PromotionalBanner src={"banner_2.png"} alt=""/>
      </div>

      <div className="my-5">
        <SectionTittle>Mouse</SectionTittle>
        <ProductList products={mouses} />
      </div>

      <div className="mx-5">
        <PromotionalBanner src={"banner_3.png"} alt=""/>
      </div>

      <div className="my-5">
        <SectionTittle>Fones</SectionTittle>
        <ProductList products={headphones} />
      </div>
    </div>
  )
}
