import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/dataPLP';
import { useCart } from '../context/CartContext';
import { Link} from 'react-router-dom'

const PLP: React.FC = () => {
  const { subcategory } = useParams<{ subcategory: string }>();
  const { addToCart } = useCart(); 

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [addedProducts, setAddedProducts] = useState<number[]>([]);

  const filteredProducts = products.filter((product) => product.subcategory === subcategory);

  const handleAddToCart = (product: any) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      discountPrice: product.discountPrice,
      img: product.img,
      quantity: 1,
    };
    addToCart(cartItem);

    setToastMessage(`${product.name} agregado al carrito`);
    setShowToast(true);

    setAddedProducts((prev) => [...prev, product.id]);

    setTimeout(() => {
      setAddedProducts((prev) => prev.filter(id => id !== product.id));
    }, 3000);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="bg-[#e5e5f7] p-4">
      <section className="box-border bg-gradient-to-r from-[#e4e4f5] to-[#d4d4e5] flex flex-col space-y-2 w-full h-auto py-2 px-4 lg:px-6 shadow-lg rounded-lg transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full text-[#000] space-y-2 sm:space-y-0">
          <div className="text-xs md:text-sm lg:text-base font-semibold">
            {filteredProducts.length} resultados de 80
          </div>
          <form className="flex items-center space-x-2">
            <label htmlFor="ordenar" className="text-xs md:text-sm lg:text-base text-[#000]">
              Ordenar por:
            </label>
            <select 
              className="text-xs md:text-sm lg:text-base text-[#131921] bg-white border border-gray-300 rounded-md shadow-sm h-8 px-2 transition-all duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
              id="ordenar" 
              aria-label="Ordenar por">
              <option value="relevancia">Relevancia</option>
              <option value="fecha_carga">Fecha de carga</option>
              <option value="precio_menor_mayor">Precio menor a mayor</option>
              <option value="precio_mayor_menor">Precio mayor a menor</option>
            </select>
          </form>
        </div>
      </section>

      <ul className="space-y-5 mt-6">
        {filteredProducts.map((product) => (
          <li key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div
              className="w-full md:w-1/3 h-48 md:h-auto bg-[#f7f7f7] bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${product.img})` }}
            ></div>
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                {/* Aquí usamos Link para redirigir al PDP del producto */}
                <Link to={`/product/${product.id}`} className="text-[#131921] text-lg font-bold mb-2 hover:text-blue-700">
                  {product.name}
                </Link>
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-[#007185] font-bold text-sm">{product.rating}</span>
                </div>
                <div className="flex items-baseline mb-2">
                  <span className="text-xs mr-1">COP</span>
                  <span className="text-xl font-bold">{Math.floor(product.price).toLocaleString()}</span>
                  <span className="text-xs">{(product.price % 1).toFixed(2).substring(1)}</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-sm mr-2">Solo por hoy:</span>
                  <span className="bg-[#83d972] text-xs px-1 py-0.5 rounded mr-2">Ahorra 25%</span>
                  <span className="font-bold">COP {product.discountPrice.toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              </div>
              <div className="flex justify-start mt-auto">
                <button
                  className="bg-[#00ddff] text-[#0f1111] font-bold py-2 px-4 rounded-lg text-sm hover:bg-[#00c8e6] transition-colors duration-300"
                  onClick={() => handleAddToCart(product)}
                >
                  {addedProducts.includes(product.id) ? (
                    <span className="text-blue-800">✔️ Agregado</span>
                  ) : (
                    'Agregar al carrito'
                  )}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg transition-all transform duration-500 ease-in-out z-50">
          {toastMessage} 🎉
        </div>
      )}
    </div>
  );
};

export default PLP;
