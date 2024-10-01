import React from 'react';
import { useCart } from '../context/CartContext';

const ShoppingCart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); 

  // Cuando el array del productos del carrito ese vacio entcs mostramos un texto relacionado
    if (cart.products.length === 0) {
        return (
            <main className="flex items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-6xl mb-4 animate-pulse">🛒</p> 

                <span className="text-4xl font-bold text-red-500 animate-pulse transition-transform duration-500 hover:scale-105">
                    No hay productos en el carrito de compras
                </span>

                <span className="mt-4 text-xl text-gray-700">
                    Agrega productos a tu carrito para continuar comprando.
                </span>
                </div>
            </main>
        );
    }

    return (
        <main className="flex justify-between items-stretch py-4 px-28">
            <section className="flex-2 flex flex-col justify-between space-y-8">
                {/* se mapea los productos dentro de cart.products */}
                {cart.products.map((item) => (
                <div key={item.id} className="bg-[#dad5ec] p-6 flex items-center rounded-lg shadow-lg">
                    <img src={item.img} alt={item.name} className="max-w-[150px] mr-8" />
                    <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="mt-2">
                        Envío:
                        <label className="ml-4">
                        <input type="radio" name={`shipping-${item.id}`} /> Estándar
                        </label>
                        <label className="ml-4">
                        <input type="radio" name={`shipping-${item.id}`} /> Rápido
                        </label>
                        <label className="ml-4">
                        <input type="radio" name={`shipping-${item.id}`} /> Express
                        </label>
                    </p>
                    <label htmlFor={`quantity-${item.id}`} className="block mt-2 font-bold">
                        Cantidad:
                    </label>
                    <select
                        id={`quantity-${item.id}`}
                        name={`quantity-${item.id}`}
                        className="ml-4 mt-1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))} 
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    </div>
                    <div className="flex flex-col text-xl">
                    <p className="line-through text-gray-500">${item.price.toFixed(2)}</p>
                    <p className="font-bold">${item.discountPrice.toFixed(2)}</p>
                    <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 mt-2"
                    >
                        Eliminar
                    </button>
                    </div>
                </div>
                ))}
            </section>

            {/* aqui hay que coolocar el resumen de compra */}
            <section className="flex-1 bg-[#eceaf6] ml-4 p-6 shadow-lg border-2 border-[#442da2] flex flex-col items-center text-xl">
            </section>
        </main>
    );
};

export default ShoppingCart;
