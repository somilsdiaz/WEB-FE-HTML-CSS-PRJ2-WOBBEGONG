import MainLayout from "../layouts/MainLayout";
import ProductsMP from "../components/ProductsMP";
import Subheader from "../components/Subheader";

const Home =()=> {
  return (
    <MainLayout>
        <Subheader />
        <ProductsMP />
    </MainLayout>
  );
};

export default Home;



