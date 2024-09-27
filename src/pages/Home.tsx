import MainLayout from "../layouts/MainLayout";
import ProductsMP from "../components/ProductsMP";
import PromoImage from "../components/PromoImage";
import Banner from "../components/Banner"

const Home =()=> {
  return (
    <MainLayout>
        <PromoImage imageId={1}/>
        <PromoImage imageId={2}/>
        <ProductsMP />
        <Banner
          title="¡Gran Oferta!"
          description="Aprovecha nuestra oferta especial solo por tiempo limitado."
          buttonText="Ver Más"
          buttonLink="/"
          imageId={3}
        />

    </MainLayout>
  );
};

export default Home;



