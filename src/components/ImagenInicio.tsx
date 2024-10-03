// PromoImage.tsx
import React from 'react';
import { promoImages } from '../data/dataImgHome'; // El array se importa solo aquí

type PromoImageProps = {
  imageId: number;
};

const PromoImage: React.FC<PromoImageProps> = ({ imageId }) => {
  const selectedImage = promoImages.find((img) => img.id === imageId);

  if (!selectedImage) {
    return <p>Image not found</p>;
  }

  return (
    <div className="promocionales">
      <img src={selectedImage.src} alt={selectedImage.alt} className="w-full mb-4" />
    </div>
  );
};

export default PromoImage;

{/* <PromoImage imageId={2}/>  imageId es el prop con el cual se selecciona la img promocional deseada, para usar
    solo importar componente donde se desea y listo: import PromoImage from './components/ImagenInicio';*/}