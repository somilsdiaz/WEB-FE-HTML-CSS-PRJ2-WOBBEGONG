import React, { useState, useEffect } from "react";
import Skeleton from "./Skeleton";
import ErrorComponent from "./ErrorComponent";

interface FilterProps {
  subcategory: string | undefined;
}

interface FilterData {
  nombre: string;
  opciones: string[];
}

const Filter: React.FC<FilterProps> = ({ subcategory }) => {
  const [filters, setFilters] = useState<FilterData[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    if (!loading && !error) {
      setShowFilters(!showFilters);
    }
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === "overlay") {
      setShowFilters(false);
    }
  };

  useEffect(() => {
    if (subcategory) {
      setLoading(true);
      setError(false);
      fetch("https://web-fe-prj2-api-wobbegong.onrender.com/dataFilter")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error en la respuesta de la API");
          }
          return response.json();
        })
        .then((data) => {
          if (data[subcategory]) {
            setFilters(data[subcategory]);
          } else {
            setFilters(null);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          setError(true);
          setLoading(false);
        });
    }
  }, [subcategory]);

  return (
    <div>
      <button
        className="bg-[#34209a] text-white px-4 py-2 hover:bg-blue-600 w-full"
        onClick={toggleFilters}
      >
        Filtros
      </button>

      {loading ? (
        <Skeleton />
      ) : error || !filters ? (
        <ErrorComponent />
      ) : (
        showFilters && (
          <div
            id="overlay"
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={handleClickOutside}
          >
            <div className="bg-[#2d1d6b] text-white w-[90%] sm:w-[70%] md:w-[50%] lg:w-[350px] max-w-[350px] p-5 h-full absolute left-0 transition-all duration-300 ease-in-out">
              <h2 className="text-lg font-semibold mb-3 text-[#7c92ff]">
                Filtros para {subcategory}
              </h2>

              {filters.map((filter) => (
                <div key={filter.nombre} className="mb-4">
                  <h3 className="text-base font-semibold mb-2 text-[#7c92ff]">
                    {filter.nombre}
                  </h3>
                  {filter.opciones.map((opcion) => (
                    <div
                      key={opcion}
                      className="flex items-center mb-1 text-sm"
                    >
                      <input
                        type="checkbox"
                        className="mr-2"
                        id={opcion}
                        name={opcion}
                      />
                      <label htmlFor={opcion} className="ml-2">
                        {opcion}
                      </label>
                    </div>
                  ))}
                </div>
              ))}

              <button className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-700 w-full text-sm mt-2">
                Filtrar
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Filter;
