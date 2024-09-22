import React, { useState } from 'react';
import { filters } from '../data/dataFilter';

interface FilterProps {
  subcategory: string | undefined; 
}

const Filter: React.FC<FilterProps> = ({ subcategory }) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === 'overlay') {
      setShowFilters(false);
    }
  };

  if (!subcategory || !filters[subcategory]) {
    return (
      <div className="p-4">
        <h2>Filtros para</h2>
        <p>No hay filtros disponibles para esta subcategoría.</p>
      </div>
    );
  }

  return (
    <div>
      <button
        className="bg-[#34209a] text-white px-4 py-2 hover:bg-blue-600 w-full"
        onClick={toggleFilters}
      >
        Filtros
      </button>

      {showFilters && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={handleClickOutside}
        >
          <div className="bg-[#2d1d6b] text-white w-[90%] sm:w-[70%] md:w-[50%] lg:w-[350px] max-w-[350px] p-5 h-full absolute left-0 transition-all duration-300 ease-in-out">
            <h2 className="text-lg font-semibold mb-3 text-[#7c92ff]">Filtros para {subcategory}</h2>

            {filters[subcategory].map((filter) => (
              <div key={filter.nombre} className="mb-4">
                <h3 className="text-base font-semibold mb-2 text-[#7c92ff]">{filter.nombre}</h3>
                {filter.opciones.map((opcion) => (
                  <div key={opcion} className="flex items-center mb-1 text-sm">
                    <input
                      type="checkbox"
                      className="mr-2"
                      id={opcion}
                      name={opcion}
                    />
                    <label htmlFor={opcion} className="ml-2">{opcion}</label>
                  </div>
                ))}
              </div>
            ))}

            <button className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-700 w-full text-sm mt-2">
              Filtrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
