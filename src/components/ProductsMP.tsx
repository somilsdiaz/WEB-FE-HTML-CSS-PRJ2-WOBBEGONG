import productos, { Producto } from "../data/data";
import { useCart } from '../context/CartContext'; 
import { useState, useEffect } from 'react';

const ProductosDestacados: React.FC = () => {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [addedProducts, setAddedProducts] = useState<number[]>([]);

  const handleAddToCart = (producto: Producto) => {
    const cartItem = {
      id: producto.id,
      name: producto.nombre,              
      price: producto.precioNormal,        
      discountPrice: producto.precioDescuento, 
      img: producto.imagen,                 
      quantity: 1,                         
    };
    addToCart(cartItem); 
    
    //configuracion del mensaje de agregado
    setToastMessage(`${producto.nombre} agregado al carrito`);
    setShowToast(true);

    //se cambia el estado del boton a gregado
    setAddedProducts((prev) => [...prev, producto.id]);

    //reseteo del boton a su estado original  (configuracio en segundos)
    setTimeout(() => {
      setAddedProducts((prev) => prev.filter(id => id !== producto.id));
    }, 3000);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000); 
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <section className="grid grid-cols-1 gap-4 mx-11 my-8 font-montserrat sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productos.map((producto: Producto) => (
        <div
          key={producto.id}
          className="relative bg-custom-gradient p-4 rounded-lg text-center shadow-lg flex flex-col justify-between h-full overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-transparent z-10"></div>
          <div className="relative z-20 flex justify-center items-center mb-auto h-[300px]">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative z-30 flex flex-col justify-end text-center p-4">
            <h2 className="text-lg font-semibold text-black my-2">
              {producto.nombre}
            </h2>
            <p className="text-sm line-through text-purple-300">
              ${producto.precioNormal.toFixed(2)}
            </p>
            <p className="text-white font-bold mb-2">
              ${producto.precioDescuento.toFixed(2)}{" "}
              <span className="text-pink-500 text-sm">-{producto.descuento}%</span>
            </p>

            {/* Cambiar el texto del botón según el estado del producto */}
            <button
              onClick={() => handleAddToCart(producto)}
              className="bg-gray-800 text-indigo-200 py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition-colors mt-2 w-full relative"
            >
              {addedProducts.includes(producto.id) ? (
                <span className="text-green-500">✔️ Agregado</span>
              ) : (
                'Agregar al Carrito'
              )}
            </button>
          </div>
        </div>
      ))}

      {/* la noti de agregado en la esquina derecha superior */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg transition-all transform duration-500 ease-in-out z-50">
          {toastMessage} 🎉
        </div>
      )}
    </section>
  );
};

export default ProductosDestacados;
