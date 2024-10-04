import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link

type Product = {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  rating: number;
  img: string;
  subcategory: string;
};

type TPIsectionProps = {
  currentProductId: number;
};

const TPIsection = ({ currentProductId }: TPIsectionProps) => {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(`https://web-fe-prj2-api-wobbegong.onrender.com/dataPDPprod/${currentProductId}`);
        if (!response.ok) throw new Error('Error al obtener el producto actual');
        const currentProduct: Product = await response.json();

        const allProductsResponse = await fetch('https://web-fe-prj2-api-wobbegong.onrender.com/dataPDPprod');
        if (!allProductsResponse.ok) throw new Error('Error al obtener los productos');
        const allProducts: Product[] = await allProductsResponse.json();

        const filteredProducts = allProducts.filter(
          product => product.subcategory === currentProduct.subcategory && product.id !== currentProductId
        ).slice(0, 4);

        setRelatedProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching related products:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [currentProductId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching related products.</p>;

  return (
    <div className="bg-[#f8f8f8] p-4 mt-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Te podría interesar</h2>
      {relatedProducts.length === 0 ? (
        <p>No hay productos relacionados</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedProducts.map(product => (
            <Link key={product.id} to={`/pdp/pdp/${product.id}`} className="block p-4 bg-white shadow-md rounded-lg border border-purple-600 hover:shadow-lg transition">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-48 object-contain mb-4 rounded-t-lg" 
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>Precio: ${product.price}</p>
              <p>Precio con descuento: ${product.discountPrice}</p>
              <p>Rating: {product.rating} estrellas</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TPIsection;
