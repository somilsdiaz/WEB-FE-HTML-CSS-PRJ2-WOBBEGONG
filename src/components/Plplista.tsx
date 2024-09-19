// import React, { useState } from "react";
// import { products } from "../data/dataPLP";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   discountPrice: number;
//   rating: number;
//   img: string;
//   category: string;
//   subcategory: string;
// }

// const PLP: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

//   const filteredProducts = products.filter(product => {
//     return (
//       (!selectedCategory || product.category === selectedCategory) &&
//       (!selectedSubcategory || product.subcategory === selectedSubcategory)
//     );
//   });

//   return (
//     <div className="bg-[#382586] w-full min-h-screen font-montserrat">
//       {/* Breadcrumb */}
//       <nav className="text-white p-4">
//         <ul className="flex">
//           <li className="bg-[#2d1c70] px-5 py-3 rounded-l-lg font-bold">Home</li>
//           <li className="bg-[#2d1c70] px-5 py-3 font-bold">Tecnología</li>
//           <li className="bg-[#2d1c70] px-5 py-3 rounded-r-lg font-bold text-[#a793f7] border-l-2 border-white">Laptops</li>
//         </ul>
//       </nav>

//       {/* Filter, Sort, Info Section */}
//       <div className="bg-[#5142b0] p-4">
//         <div className="flex flex-col text-[#dcdcf5]">
//           <div>
//             <button 
//               className="bg-[#2d1c70] text-white px-4 py-2 rounded mr-2"
//               onClick={() => setSelectedCategory("Tecnología")}
//             >
//               Tecnología
//             </button>
//             <button 
//               className="bg-[#2d1c70] text-white px-4 py-2 rounded mr-2"
//               onClick={() => setSelectedCategory("Electrodomésticos")}
//             >
//               Electrodomésticos
//             </button>
//             <button 
//               className="bg-[#2d1c70] text-white px-4 py-2 rounded"
//               onClick={() => {
//                 setSelectedCategory(null);
//                 setSelectedSubcategory(null);
//               }}
//             >
//               Ver todas
//             </button>
//           </div>
//           <div className="text-right mt-4">
//             <select
//               className="bg-[#2d1c70] text-white px-4 py-2 rounded"
//               onChange={(e) => setSelectedSubcategory(e.target.value)}
//               value={selectedSubcategory || ""}
//             >
//               <option value="">Subcategorías</option>
//               <option value="Computadores">Computadores</option>
//               <option value="Televisores">Televisores</option>
//               <option value="Audio">Audio</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Product List */}
//       <div className="bg-[#e5e5f7] p-4">
//         <ul className="space-y-5">
//           {filteredProducts.map((product: Product) => (
//             <li key={product.id} className="bg-white rounded-xl shadow-lg flex overflow-hidden h-[295px]">
//               <div 
//                 className="w-1/4 bg-[#f7f7f7] bg-center bg-no-repeat bg-contain"
//                 style={{backgroundImage: `url(${product.img})`}}
//               ></div>
//               <div className="flex-1 p-4">
//                 <h2 className="text-[#131921] text-lg font-bold mb-2">{product.name}</h2>
//                 <div className="flex items-center mb-2">
//                   <div className="flex">
//                     {[...Array(5)].map((_, i) => (
//                       <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>
//                   <span className="ml-2 text-[#007185] font-bold text-sm">{product.rating}</span>
//                 </div>
//                 <div className="flex items-baseline mb-2">
//                   <span className="text-xs mr-1">COP</span>
//                   <span className="text-xl font-bold">{Math.floor(product.price).toLocaleString()}</span>
//                   <span className="text-xs">{(product.price % 1).toFixed(2).substring(1)}</span>
//                 </div>
//                 <div className="flex items-center mb-4">
//                   <span className="text-sm mr-2">Solo por hoy:</span>
//                   <span className="bg-[#83d972] text-xs px-1 py-0.5 rounded mr-2">Ahorra 25%</span>
//                   <span className="font-bold">COP {product.discountPrice.toLocaleString()}</span>
//                 </div>
//                 <button className="bg-[#00ddff] text-[#0f1111] font-bold py-2 px-4 rounded-lg text-sm">
//                   Agregar al carrito
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Advertisement Section */}
//       <div className="bg-[#442da2] h-[180px] flex justify-center items-center">
//         <div className="w-full flex justify-center items-center overflow-hidden">
//           <video className="w-[55%] h-[70%] object-cover object-[center_-30px]" autoPlay loop muted>
//             <source src="/path-to-your-video.mp4" type="video/mp4" />
//           </video>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default PLP;





//Solo lista de productos HU 2013


import React, { useState } from "react";
import { products } from "../data/dataPLP";

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
    <div className="bg-[#e5e5f7] p-4">
      {/* Lista de productos */}
      <ul className="space-y-5">
        {filteredProducts.map((product: Product) => (
          <li key={product.id} className="bg-white rounded-xl shadow-lg flex overflow-hidden h-[295px]">
            <div 
              className="w-1/4 bg-[#f7f7f7] bg-center bg-no-repeat bg-contain"
              style={{backgroundImage: `url(${product.img})`}}
            ></div>
            <div className="flex-1 p-4">
              <h2 className="text-[#131921] text-lg font-bold mb-2">{product.name}</h2>
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
              <div className="flex items-center mb-4">
                <span className="text-sm mr-2">Solo por hoy:</span>
                <span className="bg-[#83d972] text-xs px-1 py-0.5 rounded mr-2">Ahorra 25%</span>
                <span className="font-bold">COP {product.discountPrice.toLocaleString()}</span>
              </div>
              <button className="bg-[#00ddff] text-[#0f1111] font-bold py-2 px-4 rounded-lg text-sm">
                Agregar al carrito
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default PLP;
