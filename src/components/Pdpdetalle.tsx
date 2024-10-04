import React, { useState } from "react";
import { useCart } from '../context/CartContext';

type ProductData = {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  rating: number;
  img: string;
  description: string;
};

interface PdpdetalleProps {
  productData: ProductData;
}

const PDPdetalle: React.FC<PdpdetalleProps> = ({ productData }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
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
  };

  const discountPercentage = productData.discountPrice
    ? Math.round(((productData.price - productData.discountPrice) / productData.price) * 100)
    : 0;

  return (
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
  );
};

export default PDPdetalle;