import { prismaClient } from "@/lib/prisma"
import Categories from "./components/categories"
import ProductList from "./components/product-list"

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
          src="https://placehold.co/600x300/292929/white?text=Banner+Promo%C3%A7%C3%A3o+1"
          alt=""
        />
      </div>

      <div className="mx-5">
        <Categories />
      </div>

      <div className="my-5">
        <p className="pl-5 font-bold uppercase mb-3">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <div className="m-5">
        <img
          className="h-auto w-full rounded-lg"
          src="https://placehold.co/600x300/292929/white?text=Banner+Promo%C3%A7%C3%A3o+2"
          alt=""
        />
      </div>
      
    </div>
  )
}
