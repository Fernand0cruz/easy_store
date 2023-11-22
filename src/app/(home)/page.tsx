import { prismaClient } from "@/lib/prisma"
import Categories from "./components/categories"
import ProductHorizontalList from "./components/product-list"

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }
    }
  })
  return (
    <div >
      <div className="m-5">
        <img
          className="h-auto w-full rounded-lg"
          src="https://placehold.co/600x200/292929/white?text=Banner+Promo%C3%A7%C3%A3o"
          alt=""
        />
      </div>

      <div className="mx-5">
        <Categories />
      </div>

      <div className="my-5">
        <ProductHorizontalList products={deals} />
      </div>
    </div>
  )
}
