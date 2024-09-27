import React, { useState, useEffect } from "react";

interface PromoImageProps {
  imageId: number;
}

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const PromoImage: React.FC<PromoImageProps> = ({ imageId }) => {
  const [image, setImage] = useState<ImageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Aquí se realiza la llamada al API
    fetch(`https://web-fe-prj2-api-wobbegong.onrender.com/dataPromoImages`)
      .then((response) => response.json())
      .then((data) => {
        const selectedImage = data.find((img: ImageData) => img.id === imageId);
        setImage(selectedImage);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error loading promotional image");
        setLoading(false);
      });
  }, [imageId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return image ? (
    <img src={image.src} alt={image.alt} className="w-full mb-4" />
  ) : (
    <div>No image found</div>
  );
};

export default PromoImage;
