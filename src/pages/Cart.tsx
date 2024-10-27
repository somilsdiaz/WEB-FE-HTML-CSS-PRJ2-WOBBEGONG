//src/pages/Cart.tsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom"; // Para redireccionar

const ShoppingCart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [removingItemId, setRemovingItemId] = useState<number | null>(null);
  const navigate = useNavigate(); // Para usar la función de redirección

  const {setIsCartRoute} = useCart();

  // cambiar valor de isCartRoute a true
  const handleCartPageNavigation = () => {
    setIsCartRoute(true); // valor global
  };

  const handleRemove = (id: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que se dispare el clic del contenedor
    setRemovingItemId(id);
    setTimeout(() => {
      removeFromCart(id);
      setRemovingItemId(null);
    }, 500);
  };

  const handleNavigateToPDP = (id: number, origin: string) => {
    console.log("in cart.tsx",origin)
    if (origin === "PLP") {
        // Redirige al PDP para productos de "PLP/{subcategoria}"
        navigate(`/pdp/pdp/${id}`);
    } else if (origin == "/") {
        // Redirige al PDP para productos de la ruta "/"
        navigate(`/pdp/fhp/${id}`);
    }
};

  if (cart.products.length === 0) {
    return (
      <MainLayout>
        <main className="flex items-start justify-center h-[80vh] mb-20">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-4xl md:text-6xl mb-4 animate-pulse">🛒</p>
            <span className="text-2xl md:text-4xl font-bold text-red-500 animate-pulse transition-transform duration-500 hover:scale-101">
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
        {/* productos */}
        <section
          className="flex-2 flex flex-col justify-center space-y-8 lg:mr-8"
          style={{ transition: "all 3s ease-in-out" }}
        >
          {cart.products.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-r from-[#c4b5e2] via-[#dad5ec] to-[#e9e5f2] p-6 flex flex-col lg:flex-row items-center lg:items-center rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform ${
                removingItemId === item.id
                  ? "transition-transform transform -translate-x-full opacity-0"
                  : "opacity-100 scale-100"
              } hover:scale cursor-pointer`}
              style={{
                transition:
                  "transform 0.5s ease, opacity 0.5s ease, scale 0.5s ease",
              }}
              onClick={() => {
                handleCartPageNavigation(); // Cambiar isCartRoute a true
                handleNavigateToPDP(item.id, item.origin); // Navegar al PDP
            }}
            >
              {/* img producto */}
              <div className="flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.name}
                  className="max-w-[150px] mr-8 mb-4 lg:mb-0 rounded-lg transform transition-transform duration-300 hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigateToPDP(item.id, item.origin);
                    handleCartPageNavigation();
                  }}
                />
              </div>

              {/* opciones de envio y cantidad */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="flex-1 w-full lg:w-auto text-center lg:text-left"
              >
                <h3
                  onClick={() => {
                    handleCartPageNavigation();
                    handleNavigateToPDP(item.id, item.origin);
                  }}
                  className="font-bold text-xl lg:text-lg text-black break-words transition duration-500 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#4A3F75] to-[#9F7AEA]"
                >
                  {item.name}
                </h3>

                {/* opciones de envio */}
                <div className="mt-4 flex items-center space-x-4 justify-center lg:justify-start">
                  <p className="font-semibold">Envío:</p>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`shipping-${item.id}`}
                      className="form-radio text-[#4A3F75] focus:ring-[#4A3F75]"
                    />
                    <span>Estándar</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`shipping-${item.id}`}
                      className="form-radio text-[#4A3F75] focus:ring-[#4A3F75]"
                    />
                    <span>Rápido</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`shipping-${item.id}`}
                      className="form-radio text-[#4A3F75] focus:ring-[#4A3F75]"
                    />
                    <span>Express</span>
                  </label>
                </div>

                {/* cantidad a seleccionar */}
                <div className="mt-4 flex items-center">
                  <label htmlFor={`quantity-${item.id}`} className="font-bold">
                    Cantidad:
                  </label>
                  <select
                    id={`quantity-${item.id}`}
                    name={`quantity-${item.id}`}
                    className="ml-4 border-2 border-gray-300 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3F75] transition duration-300 ease-in-out"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>

              {/* detalles de precio */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="flex flex-col text-center lg:text-right text-xl w-full lg:w-auto mt-4 lg:mt-0 lg:items-center lg:ml-4"
              >
                <p className="line-through text-red-500 text-lg">
                  $
                  {item.price.toLocaleString("es-ES", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p className="font-bold text-black text-xl">
                  $
                  {item.discountPrice.toLocaleString("es-ES", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <button
                  onClick={(e) => handleRemove(item.id, e)}
                  className="text-red-500 mt-2 hover:text-red-600 transition duration-300 ease-in-out"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* seccion para colocar el resumen de compra*/} 
		    <section className="flex-1 bg-[#f7f5ff] ml-4 p-6 shadow-xl border-2 border-[#5c4dbb] flex flex-col items-center text-lg rounded-lg transition-all">
          <h2 className="mb-4 text-2xl font-semibold text-[#442da2]">Resumen de compra</h2>
          
          <p className="mb-4 flex justify-between w-full max-w-[90%]">
              Subtotal sin descuentos:
              <span className="font-semibold text-[#333]">
                  {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 2 }).format(cart.summary.subtotal).replace("COP", "")}
              </span>
          </p>

          <p className="mb-4 flex justify-between w-full max-w-[90%]">
              Envío: 
              <span className="font-semibold text-[#333]">
                  {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 2 }).format(cart.summary.shipping).replace("COP", "")}
              </span>
          </p>

          <p className="mb-4 flex justify-between w-full max-w-[90%]">
              <span className="text-red-600">Descuentos: </span>
              <span className="font-semibold text-red-600">
                  -{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 2 }).format(cart.summary.discounts).replace("COP", "")}
              </span>
          </p>

          <p className="mb-4 flex justify-between w-full max-w-[90%]">
              <span className="text-yellow-600">IVA (19%): </span>
              <span className="font-semibold text-yellow-600">
                  {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 2 }).format(cart.summary.taxes).replace("COP", "")}
              </span>
          </p>

          <p className="mb-4 font-bold flex justify-between w-full max-w-[90%] text-xl">
              <span className="text-[#442da2]">Total: </span>
              <span className="text-[#442da2]">
                  {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 2 }).format(cart.summary.total).replace("COP", "")}
              </span>
          </p>

          <div className="border-b border-gray-300 w-[90%] mb-12"></div>
          
          <button className="bg-[#442da2] hover:bg-[#5c4dbb] transition-all text-white py-3 w-[90%] rounded-md mt-auto cursor-pointer shadow-lg transform hover:scale-105">
              Proceder al pago
          </button>
          </section>
      </main>
    </MainLayout>
  );
};

export default ShoppingCart;
