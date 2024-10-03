import React, { useState, useEffect } from "react";
import Skeleton from "./Skeleton";
import ErrorComponent from "./ErrorComponent";

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
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch(`https://web-fe-prj2-api-wobbegong.onrender.com/promoImages`)
      .then((response) => response.json())
      .then((data) => {
        const selectedImage = data.find((img: ImageData) => img.id === imageId);
        setImage(selectedImage);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
        setError(true);
        setLoading(false);
      });
  }, [imageId]);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : error ? (
        <ErrorComponent />
      ) : image ? (
        <img src={image.src} alt={image.alt} className="w-full mb-4" />
      ) : (
        <div>No image found</div>
      )}
    </>
  );
};

export default PromoImage;
