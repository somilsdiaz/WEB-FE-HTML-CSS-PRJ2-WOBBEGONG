import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Pdpdetalle from "../components/Pdpdetalle";
import Pdpspecs from "../components/Pdpspecs";
import Skeleton from "../components/Skeleton";
import ErrorComponent from "../components/ErrorComponent";

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

const PDP = () => {
  const { id } = useParams<{ id: string }>();
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

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
      </main>
    </MainLayout>
  );
};

export default PDP;
