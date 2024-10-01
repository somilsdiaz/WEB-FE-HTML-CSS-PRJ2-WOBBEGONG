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
};


