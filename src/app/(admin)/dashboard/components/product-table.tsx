import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductWithTotalPrice } from "@/helpers/product";
import { PenBoxIcon, Trash } from "lucide-react";

export type ProductWithTotalPriceAndCategory = ProductWithTotalPrice & {
  category: {
    name: string;
  };
};

interface ProductsTableProps {
  products: ProductWithTotalPriceAndCategory[];
}

const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Preço base</TableHead>
          <TableHead>% Disconto</TableHead>
          <TableHead>Preço total</TableHead>
          <TableHead>Vendidos/Estoque</TableHead>
          <TableHead>Editar</TableHead>
          <TableHead>Excluir</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => 
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{(product as any).category.name}</TableCell>
            <TableCell>R$ {product.basePrice.toFixed(2)}</TableCell>
            <TableCell>{product.discountPercentage}%</TableCell>
            <TableCell>R$ {product.totalPrice.toFixed(2)}</TableCell>
            <TableCell>0/50</TableCell>
            <TableCell>
              <Button variant={"outline"} size={"icon"}>
                <PenBoxIcon />
              </Button>
            </TableCell>
            <TableCell>
              <Button variant={"outline"} size={"icon"}>
                <Trash />
              </Button>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;