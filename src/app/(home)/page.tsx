import { prismaClient } from "@/lib/prisma"
import Categories from "./components/categories"
import ProductList from "./components/product-list"
import SectionTittle from "./components/section-tittle"

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
  return (
    <div >

      <div className="m-5">
        <img
          className="h-auto w-full rounded-lg"
          src="https://placehold.co/600x300/292929/white?text=Banner+Promo%C3%A7%C3%A3o+1"
          alt=""
        />
      </div>

      <div className="mx-5">
        <Categories />
      </div>

      <div className="my-5">
        <SectionTittle>Ofertas</SectionTittle>
        <ProductList products={deals} />
      </div>

      <div className="m-5">
        <img
          className="h-auto w-full rounded-lg"
          src="https://placehold.co/600x300/292929/white?text=Banner+Promo%C3%A7%C3%A3o+2"
          alt=""
        />
      </div>

      <div className="my-5">
        <SectionTittle>Keyboards</SectionTittle>
        <ProductList products={keyboards} />
      </div>
      
    </div>
  )
}
