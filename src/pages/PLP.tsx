// src/pages/PLP.tsx
import { useParams } from 'react-router-dom';
import MainLayout from "../layouts/MainLayout";
import PLPLista from "../components/Plplista";
import Filter from "../components/Filter";
import Banner from "../components/Banner";

const PLP = () => {
  const { subcategory } = useParams<{ subcategory: string }>();  

  return (
    <MainLayout>
      <Filter subcategory={subcategory} /> 
      <PLPLista />
      <Banner
        title="¡Aprovecha Nuestros Descuentos!"
        description="Desde este mes, tenemos descuentos en todos nuestros productos. Desde un 25%"
        buttonText="Lo Quiero"
        buttonLink="/"
        imageId={4}
      />
    </MainLayout>
  );
};

export default PLP;
