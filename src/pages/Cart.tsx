import React from 'react';
import { useCart } from '../context/CartContext';

const ShoppingCart: React.FC = () => {
    const { cart, removeFromCart, updateQuantity } = useCart(); 

    return (
        <main className="flex justify-between items-stretch py-4 px-28">
            <section className="flex-2 flex flex-col justify-between space-y-8">
                {/* Aquí mapeamos los productos dentro de cart.products */}
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
                            <p className="line-through text-gray-500">
                                ${item.price ? item.price.toFixed(2) : '0.00'}
                            </p>
                            <p className="font-bold">
                                ${item.discountPrice ? item.discountPrice.toFixed(2) : '0.00'} 
                            </p>
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

            <section className="flex-1 bg-[#eceaf6] ml-4 p-6 shadow-lg border-2 border-[#442da2] flex flex-col items-center text-xl">
                {/* Aquí puedes agregar un resumen del carrito */}
            </section>
        </main>
    );
};

export default ShoppingCart;
