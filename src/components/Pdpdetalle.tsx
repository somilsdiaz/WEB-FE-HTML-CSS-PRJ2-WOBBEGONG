import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "./Skeleton";
import ErrorComponent from "./ErrorComponent";
import { useCart } from '../context/CartContext';

type ProductData = {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  rating: number;
  img: string;
  category: string;
  subcategory: string;
  description: string;
  specTitle: string[];
  specValue: string[];
};

const PDPdetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://web-fe-prj2-api-wobbegong.onrender.com/dataPDPprod/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (productData) {
      const cartItem = {
        id: productData.id,
        name: productData.name,
        price: productData.price,
        discountPrice: productData.discountPrice,
        img: productData.img,
        quantity: 1,
      };
      addToCart(cartItem);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 3000);
    }
  };

  if (loading) return <Skeleton />;
  if (error || !productData) return <ErrorComponent />;

  const discountPercentage = productData.discountPrice
    ? Math.round(((productData.price - productData.discountPrice) / productData.price) * 100)
    : 0;

  return (
    <main className="min-h-screen bg-[#e5e5f7] bg-[radial-gradient(#444cf7_0.5px,#e5e5f7_0.5px)] bg-[length:10px_10px] opacity-80 p-4">
      <section className="relative mb-4">
        <div className="absolute top-0 left-0 bg-white border border-[#ac21e3] p-2.5 rounded text-sm">
          <Link to="/" className="text-blue-600 hover:text-blue-800">Inicio</Link> &gt;{" "}
          <Link to={`/plp/${productData.subcategory}`} className="text-blue-600 hover:text-blue-800">
            {productData.category}
          </Link>{" "}
          &gt; <span className="text-gray-600">{productData.name}</span>
        </div>
      </section>
      
      <section className="mt-16 flex flex-col md:flex-row justify-center gap-8">
        <div className="w-full md:w-1/2 lg:w-2/5 bg-white rounded-xl shadow-lg overflow-hidden">
          <img 
            src={productData.img} 
            alt={productData.name} 
            className="w-full h-auto object-contain"
          />
        </div>
        
        <div className="w-full md:w-1/2 lg:w-2/5 bg-white rounded-xl shadow-lg p-6 flex flex-col">
          <h1 className="text-2xl font-bold text-[#131921] mb-4">
            {productData.name}
          </h1>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.floor(productData.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-[#007185] font-bold">{productData.rating}</span>
          </div>
          
          <div className="flex items-baseline mb-4">
            <span className="text-sm mr-1">COP</span>
            <span className="text-3xl font-bold">
              {Math.floor(productData.price).toLocaleString()}
            </span>
            <span className="text-sm">
              {(productData.price % 1).toFixed(2).substring(1)}
            </span>
          </div>
          
          {productData.discountPrice && (
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-sm">Solo por hoy:</span>
              <span className="bg-[#83d972] text-xs px-2 py-1 rounded">
                Ahorra {discountPercentage}%
              </span>
              <span className="font-bold">
                COP {productData.discountPrice.toLocaleString()}
              </span>
            </div>
          )}
          
          <p className="text-gray-600 mb-6">
            {productData.description}
          </p>
          
          <button 
            onClick={handleAddToCart}
            className={`mt-auto w-full py-3 px-4 rounded-lg text-sm font-bold transition-colors duration-300
              ${isAdded 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-[#00ddff] text-[#0f1111] hover:bg-[#00c8e6]'
              }`}
          >
            {isAdded ? '✔️ Agregado' : 'Agregar al carrito'}
          </button>
        </div>
      </section>

      <section className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
        <details className="w-full">
          <summary className="bg-[#4c37c0] text-white p-4 cursor-pointer hover:bg-[#6c52cb] transition-colors">
            <span className="font-bold">Especificaciones / Ficha Técnica</span>
          </summary>
          <div className="p-4">
            <table className="w-full border-collapse">
              <tbody>
                {productData.specTitle.map((title, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="p-3 bg-[#8f7dd2] text-white w-1/3">{title}</td>
                    <td className="p-3 bg-[#9a8ad3] text-white w-2/3">
                      {productData.specValue[index]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </section>
    </main>
  );
};

export default PDPdetalle;