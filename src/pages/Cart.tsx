import React from 'react';
import { useCart } from '../context/CartContext';
import MainLayout from "../layouts/MainLayout";


const ShoppingCart: React.FC = () => {
    const { cart, removeFromCart, updateQuantity } = useCart(); 

    if (cart.products.length === 0) {
        return (
        <MainLayout>
            <main className="flex items-start justify-center h-[80vh] mb-20"> 
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <p className="text-4xl md:text-6xl mb-4 animate-pulse">🛒</p> 
                    <span className="text-2xl md:text-4xl font-bold text-red-500 animate-pulse transition-transform duration-500 hover:scale-105">
                    No hay productos en el carrito de compras
                    </span>
                    <span className="mt-4 text-lg md:text-xl text-gray-700">
                    Agrega productos a tu carrito para continuar comprando.
                    </span>
                </div>
            </main>
        </MainLayout>
        );
    }

    return (
        <MainLayout>
        <main className="flex flex-col lg:flex-row justify-between items-center py-4 px-4 lg:px-28 space-y-8 lg:space-y-0">
            {/* Sección de productos */}
            <section className="flex-2 flex flex-col justify-center space-y-8 lg:mr-8">
                {cart.products.map((item) => (
                <div
                    key={item.id}
                    className="bg-[#dad5ec] p-6 flex flex-col lg:flex-row items-center lg:items-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    {/*product imagen*/}
                    <div className="flex-shrink-0">
                    <img
                        src={item.img}
                        alt={item.name}
                        className="max-w-[150px] mr-8 mb-4 lg:mb-0 rounded-lg transform transition-transform duration-300 hover:scale-105"
                    />
                    </div>

                    {/* envio, titulo, cantidad */}
                    <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
                        <h3 className="font-bold text-lg lg:text-xl text-black break-words hover:underline transition duration-300 ease-in-out">
                            {item.name}
                        </h3>

                        {/* envio */}
                        <div className="mt-4 flex items-center space-x-4 justify-center lg:justify-start">
                            <p className="font-semibold">Envío:</p>
                            <label className="flex items-center space-x-2">
                            <input type="radio" name={`shipping-${item.id}`} className="form-radio text-[#4A3F75] focus:ring-[#4A3F75]" />
                            <span>Estándar</span>
                            </label>
                            <label className="flex items-center space-x-2">
                            <input type="radio" name={`shipping-${item.id}`} className="form-radio text-[#4A3F75] focus:ring-[#4A3F75]" />
                            <span>Rápido</span>
                            </label>
                            <label className="flex items-center space-x-2">
                            <input type="radio" name={`shipping-${item.id}`} className="form-radio text-[#4A3F75] focus:ring-[#4A3F75]" />
                            <span>Express</span>
                            </label>
                        </div>

                        {/*cantidad */}
                        <div className="mt-4 flex items-center">
                            <label htmlFor={`quantity-${item.id}`} className="font-bold">
                            Cantidad:
                            </label>
                            <select
                            id={`quantity-${item.id}`}
                            name={`quantity-${item.id}`}
                            className="ml-4 border-2 border-gray-300 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3F75] transition duration-300 ease-in-out"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                            >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>
                        </div>
                    </div>

                    {/* precio*/}
                    <div className="flex flex-col text-center lg:text-right text-xl w-full lg:w-auto mt-4 lg:mt-0 lg:items-center lg:ml-4">
                        <p className="line-through text-red-500">
                            ${item.price.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                        <p className="font-bold text-black">
                            ${item.discountPrice.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 mt-2 hover:underline transition duration-300 ease-in-out"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
                ))}
                </section>

                {/* resumen de compra bloque */}
                <section className="flex-1 bg-[#eceaf6] p-6 shadow-lg border-2 border-[#442da2] flex flex-col items-center text-xl mt-8 lg:mt-0 rounded-lg">

                </section>
            </main>
        </MainLayout>
    );
};

export default ShoppingCart;
