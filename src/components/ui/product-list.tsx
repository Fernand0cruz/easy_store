import { Product } from "@prisma/client";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";

interface ProductListProps {
  products: Product[];
}

const ProductHorizontalList = ({ products }: ProductListProps) => {

  // Função auxiliar para renderizar uma lista de produtos com um comprimento especificado
  const renderProductList = (products: Product[], length: number) => {
    // Verifica se há produtos disponíveis
    if (!products || products.length === 0) {
      return <div>Não há produtos disponíveis</div>; // Retorna uma mensagem se não houver produtos disponíveis
    }

    // Faz um map sobre o array de produtos e renderiza cada produto até o comprimento especificado
    return products.slice(0, length).map((product) => (
      <div key={product.id} className="w-[33.3%] md:w-[25%] lg:w-[16.6%]">
        <ProductItem
          product={{
            ...product,
            totalPrice: computeProductTotalPrice(product), // Calcula e inclui o preço total para cada produto
          }}
        />
      </div>
    ));
  };

  return (
    <div >
      <div className="flex w-full gap-2 overflow-x-auto sm:hidden">

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
      {/* Visualização para tablets pequenos: layout flexível */}
      <div className="hidden sm:flex gap-2 md:hidden">

        {renderProductList(products, 3)} {/* Renderiza até 3 produtos */}

      </div>

      {/* Visualização para tablets maiores: layout flexível */}
      <div className="hidden md:flex gap-2 lg:hidden">

        {renderProductList(products, 4)} {/* Renderiza até 4 produtos */}

      </div>

      {/* Visualização para desktops: layout flexível */}
      <div className="hidden lg:flex gap-2">

        {renderProductList(products, 6)} {/* Renderiza até 6 produtos */}

      </div>
    </div>
  );
};
export default ProductHorizontalList;
