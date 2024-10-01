import React, { createContext, useState, useContext } from 'react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    discountPrice: number;
    img: string;
    quantity: number;
}

interface CartSummary {
    subtotal: number; // subtotal sin aplicar descuentos
    shipping: number; // Precio de envio (fijo)
    discounts: number; // total suma de los descuentos de cada producto
    taxes: number; // iva luego de suma precio de envio y restar descuentos
    total: number; // total a pagar con iva
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

// Función para actualizar el resumen del carrito
    const updateCartSummary = (products: CartItem[]) => {
        //subtotal (precios total sin descuentos)
        const subtotal = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
        //descuentos (suma de descuentos de cada producto)
        const discounts = products.reduce((sum, item) => sum + (item.price - item.discountPrice) * item.quantity, 0);
        //subtotal(precio total con descuentos)
        const subtotalWithDiscount = subtotal - discounts; // Se resta el total de descuentos
        //costo fijo de envio
        const shipping = 300000;
        //calculo del iva del 19% del precio total con descuentos + costo de envio
        const taxableAmount = subtotalWithDiscount + shipping;
        const taxes = taxableAmount * 0.19;
        //total a pagar (Total con descuentos + envio + IVA)
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
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {
    const contexto = useContext(CartContext);
    if (!contexto) {
        throw new Error('useCart debe ser utilizado dentro de un CartProvider');
    }
    return contexto;
};
