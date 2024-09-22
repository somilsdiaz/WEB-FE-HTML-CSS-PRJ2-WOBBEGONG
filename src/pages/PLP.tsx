// src/pages/PLP.tsx
import MainLayout from "../layouts/MainLayout";
import PLPLista from "../components/Plplista";
import Filter from "../components/Filter";

const PLP = () => {
  return (
    <MainLayout>
      <Filter />
      <PLPLista />
    </MainLayout>
  );
};

export default PLP;
