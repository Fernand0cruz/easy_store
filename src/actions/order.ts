"use server";
import { prismaClient } from "@/lib/prisma";
import { CartProduct } from "@/providers/cart";

// Função assíncrona para criar uma ordem no banco de dados
export const createOrder = async (
  cartProducts: CartProduct[],
  userId: string, 
) => {
  // Cria uma nova ordem no banco de dados
  const order = await prismaClient.order.create({
    data: {
      userId, // Associa a ordem ao usuário
      status: "WAITING_FOR_PAYMENT", // Define o status inicial da ordem
      orderProducts: {
        createMany: {
          data: cartProducts.map((product) => ({
            basePrice: product.basePrice, 
            discountPercentage: product.discountPercentage, 
            productId: product.id, 
            quantity: product.quantity, 
          })),
        },
      },
    },
  });
  return order;
};