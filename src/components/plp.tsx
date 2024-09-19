import React, { useState } from "react";
import { products } from "../data/dataPLP"; // Ruta que debes verificar que esté correcta

interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  rating: number;
  img: string;
  category: string;
  subcategory: string;
}

const PLP: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const filteredProducts = products.filter(product => {
    return (
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedSubcategory || product.subcategory === selectedSubcategory)
    );
  });

  return (
    <div className="container mx-auto p-4">
      {/* Menú superior */}
      <nav className="bg-purple-700 text-white p-4 mb-6">
        <ul className="flex justify-around">
          <li className="hover:underline">Tecnología</li>
          <li className="hover:underline">Electrodomésticos</li>
          <li className="hover:underline">Celulares</li>
          <li className="hover:underline">Hogar</li>
        </ul>
      </nav>

      {/* Filtros de categorías */}
      <div className="flex justify-between items-center mb-4 bg-purple-800 p-4 rounded-md text-white">
        <div>
          <button
            className={`mr-2 px-4 py-2 ${selectedCategory === "Tecnología" ? "bg-purple-600" : "bg-blue-500"} text-white rounded-md`}
            onClick={() => setSelectedCategory("Tecnología")}
          >
            Tecnología
          </button>
          <button
            className={`mr-2 px-4 py-2 ${selectedCategory === "Electrodomésticos" ? "bg-purple-600" : "bg-blue-500"} text-white rounded-md`}
            onClick={() => setSelectedCategory("Electrodomésticos")}
          >
            Electrodomésticos
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => {
              setSelectedCategory(null);
              setSelectedSubcategory(null);
            }}
          >
            Ver todas
          </button>
        </div>

        <select
          className="px-4 py-2 border rounded-md bg-white text-black"
          onChange={(e) => setSelectedSubcategory(e.target.value)}
          value={selectedSubcategory || ""}
        >
          <option value="">Subcategorías</option>
          <option value="Computadores">Computadores</option>
          <option value="Televisores">Televisores</option>
          <option value="Audio">Audio</option>
        </select>
      </div>

      {/* Texto de resultados */}
      <div className="mb-4 text-gray-600 text-sm">
        <p>10 resultados de 1.832</p>
      </div>

      {/* Lista de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: Product) => (
            <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg relative">
              <img
                src={product.img}
                alt={product.name}
                className="h-48 w-full object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 mr-2">★</span>
                  <p className="text-gray-600">{product.rating}</p>
                </div>
                <p className="text-gray-600 line-through">COP {product.price.toLocaleString()}</p>
                <p className="text-red-600 font-bold">Solo por hoy: COP {product.discountPrice.toLocaleString()}</p>
                <p className="text-green-600 font-bold">Ahorras 25%</p>
              </div>
              <button className="mt-4 w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                Agregar al carrito
              </button>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles para esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default PLP;
