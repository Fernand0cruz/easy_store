import { Product } from "@prisma/client"
import ProductItem from "@/components/ui/product-item"
import { computeProductTotalPrice } from "@/helpers/product"

interface ProductListProps {
  products: Product[]
}

const productHorizontalList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {
        products.map(product =>
          <div key={product.id} className="w-[170px] lg:w-[200px] lg:min-w-[200px]">
            <ProductItem product={{
              ...product,
              totalPrice: computeProductTotalPrice(product),
            }} />
          </div>
        )
      }
    </div>
  )
}

export default productHorizontalList

