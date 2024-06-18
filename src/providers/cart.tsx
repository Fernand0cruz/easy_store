"use client";

import { 
    ReactNode, 
    createContext, 
    useMemo, 
    useState, 
    useEffect 
} from "react";
import { ProductWithTotalPrice } from "@/helpers/product";

// Interface representando um produto no carrinho
export interface CartProduct extends ProductWithTotalPrice {
    quantity: number; // Quantidade deste produto no carrinho
}

// Interface representando o contexto do carrinho de compras
interface ICartContext {
    products: CartProduct[]; // Lista de produtos no carrinho
    cartTotalPrice: number; // Preço total do carrinho (não utilizado neste código)
    cartBasePrice: number; // Preço base do carrinho (não utilizado neste código)
    cartTotalDiscount: number; // Desconto total aplicado ao carrinho (não utilizado neste código)
    total: number; // Total a pagar pelo cliente
    subTotal: number; // Subtotal dos produtos no carrinho
    totalDiscount: number; // Total de desconto calculado
    addProductToCart: (product: CartProduct) => void; // Função para adicionar produto ao carrinho
    decreaseProductQuantity: (productId: string) => void; // Função para diminuir quantidade de um produto no carrinho
    increaseProductQuantity: (productId: string) => void; // Função para aumentar quantidade de um produto no carrinho
    removeProductFromCart: (productId: string) => void; // Função para remover um produto do carrinho
}

// Contexto do carrinho inicializado com valores padrão
export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    total: 0,
    subTotal: 0,
    totalDiscount: 0,
    addProductToCart: () => {},
    decreaseProductQuantity: () => {},
    increaseProductQuantity: () => {},
    removeProductFromCart: () => {}
});

// Provedor de contexto do carrinho
export const CartProvider = ({ children }: { children: ReactNode }) => {
    // Estado local para armazenar produtos no carrinho
    const [products, setProducts] = useState<CartProduct[]>(
        () => {
            // Recupera o carrinho do localStorage se existir
            if (typeof window !== 'undefined') {
                const cart = window.localStorage.getItem("cart");
                if (cart) {
                    return JSON.parse(cart);
                }
            }
            return []; // Retorna um array vazio se não houver carrinho salvo
        }
    );

    // Efeito para salvar o estado dos produtos no localStorage sempre que houver mudanças
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem("cart", JSON.stringify(products));
        }
    }, [products]);

    // Memoização do subtotal dos produtos no carrinho
    const subTotal = useMemo(() => {
        return products.reduce((acc, product) => {
            return acc + Number(product.basePrice * product.quantity);
        }, 0);
    }, [products]);

    // Memoização do total a pagar pelo cliente
    const total = useMemo(() => {
        return products.reduce((acc, product) => {
            return acc + Number(product.totalPrice * product.quantity);
        }, 0);
    }, [products]);

    // Memoização do total de desconto aplicado
    const totalDiscount = useMemo(() => {
        return subTotal - total;
    }, [subTotal, total]);

    // Função para adicionar um produto ao carrinho
    const addProductToCart = (product: CartProduct) => {
        const productIsAlreadyInCart = products.some(
            (p) => p.id === product.id
        );
        
        if (productIsAlreadyInCart) {
            // Se o produto já estiver no carrinho, atualiza a quantidade
            const newProducts = products.map((p) => {
                if (p.id === product.id) {
                    return {
                        ...p,
                        quantity: p.quantity + product.quantity
                    };
                }
                return p;
            });
            setProducts(newProducts);
            return;
        }
        // Caso contrário, adiciona o novo produto ao carrinho
        setProducts((prevProducts) => [...prevProducts, product]);
    };

    // Função para diminuir a quantidade de um produto no carrinho
    const decreaseProductQuantity = (productId: string) => {
        setProducts((prev) =>
            prev.map((p) => {
                if (p.id === productId) {
                    // Reduz a quantidade do produto se não for zero
                    return {
                        ...p,
                        quantity: p.quantity - 1
                    };
                }
                return p;
            }).filter((p) => p.quantity > 0) // Remove produtos com quantidade zero
        );
    };

    // Função para aumentar a quantidade de um produto no carrinho
    const increaseProductQuantity = (productId: string) => {
        setProducts((prev) =>
            prev.map((p) => {
                if (p.id === productId) {
                    // Aumenta a quantidade do produto
                    return {
                        ...p,
                        quantity: p.quantity + 1
                    };
                }
                return p;
            })
        );
    };

    // Função para remover um produto do carrinho
    const removeProductFromCart = (productId: string) => {
        setProducts((prev) =>
            prev.filter((p) => p.id !== productId) // Remove o produto com o ID especificado
        );
    };

    // Retorna o provedor de contexto com os valores e funções necessárias para o carrinho
    return (
        <CartContext.Provider
            value={{
                products,
                addProductToCart,
                decreaseProductQuantity,
                increaseProductQuantity,
                removeProductFromCart,
                total,
                subTotal,
                totalDiscount,
                cartTotalPrice: 0,
                cartBasePrice: 0,
                cartTotalDiscount: 0
            }}
        >
            {children}
        </CartContext.Provider>
    );
};


