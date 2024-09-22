import React from 'react';
import PromoImage from './ImagenInicio';

interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageId: number;
}

const Banner: React.FC<BannerProps> = ({ title, description, buttonText, buttonLink, imageId }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 p-4 shadow-lg">
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-lg mb-4">{description}</p>
        <a
          href={buttonLink}
          className="bg-[#34209a] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          {buttonText}
        </a>
      </div>
      <div className="md:w-1/2 p-4 flex justify-center">
        <PromoImage imageId={imageId} />
      </div>
    </div>
  );
};

export default Banner;
