import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Pdpdetalle from "../components/Pdpdetalle";
import Pdpspecs from "../components/Pdpspecs";
import Skeleton from "../components/Skeleton";
import ErrorComponent from "../components/ErrorComponent";
import TPIsection from "../components/TPIsection";  // Importar el nuevo componente

type ProductData = {
  id: number;
  name?: string;
  nombre?: string;
  price?: number;
  precioNormal?: number;
  discountPrice?: number;
  precioDescuento?: number;
  rating?: number;
  img?: string;
  imagen?: string;
  category?: string;
  subcategory?: string;
  description?: string;
  descripcion?: string;
  specTitle?: string[];
  specValue?: string[];
};

const PDP = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const isPlpProduct = location.pathname.includes('/pdp/pdp/');
        const apiUrl = isPlpProduct
          ? `https://web-fe-prj2-api-wobbegong.onrender.com/dataPDPprod/${id}`
          : `https://web-fe-prj2-api-wobbegong.onrender.com/datafhp/${id}`;
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error('Product not found');
        }
        
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
  }, [id, location]);

  if (loading) return <MainLayout><Skeleton /></MainLayout>;
  if (error || !productData) return <MainLayout><ErrorComponent /></MainLayout>;

  return (
    <MainLayout>
      <main className="min-h-screen bg-[#e5e5f7] bg-[radial-gradient(#444cf7_0.5px,#e5e5f7_0.5px)] bg-[length:10px_10px] opacity-80 p-4">
        <Pdpdetalle productData={productData} />
        <Pdpspecs 
          specTitle={productData.specTitle} 
          specValue={productData.specValue} 
        />
        {productData && <TPIsection currentProductId={productData.id} />}
      </main>
    </MainLayout>
  );
};

export default PDP;