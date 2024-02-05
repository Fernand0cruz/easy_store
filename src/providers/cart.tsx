"use client"
import { ReactNode, createContext } from "react"
import { Product } from "@prisma/client"
import { useState } from "react"

interface CartProduct extends Product {
    quantity: number
}

interface ICartContext {
    products: CartProduct[]
    cartTotalPrice: number
    cartBasePrice: number
    cartTotalDiscount: number
    addProductToCart: (product: CartProduct) => void
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    addProductToCart: () => {}
})

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<CartProduct[]>([])

    const addProductToCart = (product: CartProduct) => {
        setProducts((prevProducts) => [...prevProducts, product])    
    }
    return (
        <CartContext.Provider
            value={{
                products,
                addProductToCart,
                cartTotalPrice: 0,
                cartBasePrice: 0,
                cartTotalDiscount: 0
            }}
        >
            {children}
        </CartContext.Provider>
    );
}


