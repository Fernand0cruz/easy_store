import { Product } from "@prisma/client";

// Interface que estende a interface Product adicionando totalPrice
export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

// Função para calcular o preço total do produto com base no preço base e desconto percentual
export const computeProductTotalPrice = (
  product: Pick<Product, "discountPercentage" | "basePrice">,
): number => {
  // Verifica se o desconto percentual é zero
  if (product.discountPercentage === 0) {
    // Se não houver desconto, retorna o preço base como preço total
    return Number(product.basePrice);
  }

  // Calcula o desconto total
  const totalDiscount = Number(product.basePrice) * (product.discountPercentage / 100);

  // Calcula e retorna o preço total subtraindo o desconto do preço base
  return Number(product.basePrice) - totalDiscount;
};
