// src/pages/PLP.tsx
import { useParams } from 'react-router-dom';
import MainLayout from "../layouts/MainLayout";
import PLPLista from "../components/Plplista";
import Filter from "../components/Filter";

const PLP = () => {
  const { subcategory } = useParams<{ subcategory: string }>();  

  return (
    <MainLayout>
      <Filter subcategory={subcategory} /> 
      <PLPLista />
    </MainLayout>
  );
};

export default PLP;
