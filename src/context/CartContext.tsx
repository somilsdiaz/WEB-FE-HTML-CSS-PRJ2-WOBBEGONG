// CartContext.tsx
import React, { createContext, useState, useContext } from 'react';

//interfaz para un producto en el carrito
interface CartItem {
    id: number;
    name: string;
    price: number;
    discountPrice: number;
    img: string;
    quantity: number;
}

//interfaz para el resumen del carrito
interface CartSummary {
    subtotal: number; 
    shipping: number; 
    discounts: number; 
    taxes: number; 
    total: number; 
}

//interfaz con los productos como el resumen
interface Cart {
    summary: CartSummary;
    products: CartItem[];
}

interface CartContextType {
    cart: Cart;
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Cart>({
        summary: {
            subtotal: 0,
            shipping: 300000, 
            discounts: 0,
            taxes: 0,
            total: 0,
        },
        products: [],
    });

    return (
        <CartContext.Provider value={{ cart, addToCart: () => {}, removeFromCart: () => {}, updateQuantity: () => {} }}>
            {children}
        </CartContext.Provider>
    );

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.products.find((cartItem) => cartItem.id === item.id);
            let updatedProducts;
            if (existingItem) {
                updatedProducts = prevCart.products.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                updatedProducts = [...prevCart.products, { ...item, quantity: 1 }];
            }
    
            return {
                ...prevCart,
                products: updatedProducts,
                summary: prevCart.summary,
            };
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => {
            const updatedProducts = prevCart.products.filter((cartItem) => cartItem.id !== id);
            return {
                ...prevCart,
                products: updatedProducts,
                summary: prevCart.summary,
            };
        });
    };
    
    const updateQuantity = (id: number, quantity: number) => {
        setCart((prevCart) => {
            const updatedProducts = prevCart.products.map((cartItem) =>
                cartItem.id === id ? { ...cartItem, quantity } : cartItem
            );
            return {
                ...prevCart,
                products: updatedProducts,
                summary: prevCart.summary,
            };
        });
    };
};



