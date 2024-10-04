import React from "react";
import { CartItem } from "../context/CartContext";

interface CartSummaryProps {
  cartItems: CartItem[];
}

// Helper function to format prices
const formatPrice = (price: number): string => {
  return price.toLocaleString("es-ES", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
};

// Helper function to calculate subtotal
const calculateSubtotal = (cartItems: CartItem[]): number => {
  return cartItems.reduce(
    (acc, item) => acc + item.discountPrice * item.quantity,
    0
  );
};

// Helper function to calculate discounts
const calculateDiscounts = (cartItems: CartItem[]): number => {
  return cartItems.reduce(
    (acc, item) => acc + (item.price - item.discountPrice) * item.quantity,
    0
  );
};

// Helper function to calculate tax (19%)
const calculateTax = (subtotal: number, taxRate: number = 0.19): number => {
  return subtotal * taxRate;
};

// Helper function to calculate total
const calculateTotal = (
  subtotal: number,
  shipping: number,
): number => {
  return subtotal + shipping;
};

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems }) => {
  const shippingCost = 10000; 
  const subtotal = calculateSubtotal(cartItems);
  const discounts = calculateDiscounts(cartItems);
  const tax = calculateTax(subtotal - discounts);
  const total = calculateTotal(subtotal, shippingCost,);

  return (
    <section className="bg-gray-50 p-20 shadow-lg border border-purple-600  flex flex-col items-center text-lg">
    <div className="w-full border-b border-gray-300 pb-4 mb-4">
      <h2 className="text-2xl font-bold text-center">Mi Carrito</h2>
    </div>
    <div className="space-y-2 w-full text-left">
      <p>Subtotal: {formatPrice(subtotal)}</p>
      <p>Envío: {formatPrice(shippingCost)}</p>
      <p className="line-through text-gray-500 text-sm">Descuentos: {formatPrice(discounts)}</p>
      <p>Iva: {formatPrice(tax)}</p>
      <h3 className="text-xl font-bold">Total: {formatPrice(total)}</h3>
    </div>
    <button className="mt-6 bg-[#4C37C0] text-white px-4 py-2  rounded-lg hover:bg-purple-700 transition">
      Iniciar Pago
    </button>
  </section>
);
};

export default CartSummary;
