import React, { createContext, useState, useContext, useEffect } from 'react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    discountPrice: number;
    img: string;
    quantity: number;
    origin: string; // solucion para los tipos de productos /home y /PLP
}

interface CartSummary {
    subtotal: number;
    shipping: number;
    discounts: number;
    taxes: number;
    total: number;
}

interface Cart {
    summary: CartSummary;
    products: CartItem[];
}

interface CartContextType {
    cart: Cart;
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    isCartRoute: boolean;  // Añadir isCartRoute
    setIsCartRoute: (value: boolean) => void; // Función para actualizar isCartRoute
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = 'cartData';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    //se hace una lectura desde localStorage al cargar la página 
    const [cart, setCart] = useState<Cart>(() => {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);
        return storedCart
            ? JSON.parse(storedCart)
            : {
                    summary: {
                        subtotal: 0,
                        shipping: 300000,
                        discounts: 0,
                        taxes: 0,
                        total: 0,
                    },
                    products: [],
                };
    });
    const [isCartRoute, setIsCartRoute] = useState<boolean>(false);

    // se guarda el carrito en localStorage cada vez que haya un cambio
    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }, [cart]);

    const updateCartSummary = (products: CartItem[]) => {
        const subtotal = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const discounts = products.reduce((sum, item) => sum + (item.price - item.discountPrice) * item.quantity, 0);
        const subtotalWithDiscount = subtotal - discounts;
        const shipping = 300000;
        const taxableAmount = subtotalWithDiscount + shipping;
        const taxes = taxableAmount * 0.19;
        const total = subtotalWithDiscount + shipping + taxes;
        return {
            subtotal,
            shipping,
            discounts,
            taxes,
            total,
        };
    };

    const addToCart = (item: CartItem) => {
        console.log("in  cartContext.tsx",item.origin)
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
                summary: updateCartSummary(updatedProducts),
            };
        });
    };
    
    

    const removeFromCart = (id: number) => {
        setCart((prevCart) => {
            const updatedProducts = prevCart.products.filter((cartItem) => cartItem.id !== id);
            return {
                ...prevCart,
                products: updatedProducts,
                summary: updateCartSummary(updatedProducts),
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
                summary: updateCartSummary(updatedProducts),
            };
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, isCartRoute, setIsCartRoute }}>
            {children}
        </CartContext.Provider>
    );
};
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser utilizado dentro de un CartProvider');
    }
    return context;
};

export type { CartItem };
