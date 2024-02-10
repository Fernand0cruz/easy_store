"use client"
import { ReactNode, createContext } from "react"
import { useState } from "react"
import { ProductWithTotalPrice } from "@/helpers/product"

export interface CartProduct extends ProductWithTotalPrice {
    quantity: number
}

interface ICartContext {
    products: CartProduct[]
    cartTotalPrice: number
    cartBasePrice: number
    cartTotalDiscount: number
    addProductToCart: (product: CartProduct) => void
    decreaseProductQuantity: (productId: string) => void
    increaseProductQuantity: (productId: string) => void
    removeProductFromCart: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    addProductToCart: () => {},
    decreaseProductQuantity: () => {}, 
    increaseProductQuantity: () => {},
    removeProductFromCart: () => {}
})

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<CartProduct[]>([])

    const addProductToCart = (product: CartProduct) => {
        const productIsAlreadyInCart = products.some(
            (p) => p.id === product.id
        )
        if (productIsAlreadyInCart) {
            const newProducts = products.map((p) => {
                if (p.id === product.id) {
                    return {
                        ...p,
                        quantity: p.quantity + product.quantity
                    }
                }
                return p
            })
            setProducts(newProducts)
            return
        }
        setProducts((prevProducts) => [...prevProducts, product])    
    }
    const decreaseProductQuantity = (productId: string) => {
        setProducts((prev) => 
            prev.map((p) => {
                if (p.id === productId) {
                    return {
                        ...p,
                        quantity: p.quantity - 1
                    }
                }
                return p
            })
            .filter((p) => p.quantity > 0)
        )

    }
    const increaseProductQuantity = (productId: string) => {
        setProducts((prev) => 
            prev.map((p) => {
                if (p.id === productId) {
                    return {
                        ...p,
                        quantity: p.quantity + 1
                    }
                }
                return p
            })
        )
    }
    const removeProductFromCart = (productId: string) => {
        setProducts((prev) => 
            prev.filter((p) => p.id !== productId)
        )
    }
    return (
        <CartContext.Provider
            value={{
                products,
                addProductToCart,
                decreaseProductQuantity,
                increaseProductQuantity,
                removeProductFromCart,
                cartTotalPrice: 0,
                cartBasePrice: 0,
                cartTotalDiscount: 0
            }}
        >
            {children}
        </CartContext.Provider>
    );
}


