import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/dataPLP';

interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  img: string;
  description: string;
  rating: number;
}

const Pdpdetalle: React.FC = () => {
const { id } = useParams<{ id: string }>(); // Obtén el id desde los parámetros de la URL
const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {

    const foundProduct = products.find((p) => p.id === parseInt(id!));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div className="bg-white p-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Imagen del producto */}
        <div
          className="w-full md:w-1/2 h-64 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${product.img})` }}
        ></div>

        {/* Detalles del producto */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            {/* Mostrar estrellas de calificación */}
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm font-bold">{product.rating}</span>
          </div>

          {/* Precio del producto */}
          <div className="flex items-baseline mb-4">
            <span className="text-2xl font-bold mr-2">
              COP {product.discountPrice.toLocaleString()}
            </span>
            <span className="text-gray-500 line-through">
              COP {product.price.toLocaleString()}
            </span>
          </div>

          {/* Descripción del producto */}
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Botón para agregar al carrito */}
          <button className="bg-[#00ddff] text-[#0f1111] font-bold py-2 px-6 rounded-lg text-lg hover:bg-[#00c8e6] transition-colors duration-300">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pdpdetalle;
