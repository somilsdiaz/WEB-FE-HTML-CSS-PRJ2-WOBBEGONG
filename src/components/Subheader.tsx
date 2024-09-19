// src/components/Subheader.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../data/DataCategory'; // Asegúrate de que este archivo existe y tiene el formato adecuado.

const Subheader: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null); // Cierra el submenú si se hace clic nuevamente
    } else {
      setActiveCategory(category); // Abre el submenú para la categoría seleccionada
    }
  };

  return (
    <section className="bg-purple-800 text-white pb-2">
      <nav className="flex flex-col md:flex-row justify-center items-start md:justify-left md:items-center gap-0 md:gap-5 pl-0 md:pl-5">
        {menuItems.map((item) => (
          <div
            key={item.category}
            className="menu-item relative w-full md:w-auto text-left border-b md:border-none p-2 md:p-0"
            onMouseEnter={() => setActiveCategory(item.category)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <button
              onClick={() => toggleCategory(item.category)}
              className="block w-full text-left hover:bg-purple-600 px-5 py-2 md:px-4 md:py-2 rounded md:rounded-none"
            >
              {item.category}
            </button>
            <ul
              className={`submenu ${
                activeCategory === item.category ? 'block' : 'hidden'
              } md:absolute md:left-0 md:top-full mt-1 md:mt-0 md:bg-purple-700 md:rounded-lg w-full md:w-max md:z-10`}
            >
              {item.links.map((link) => (
                <li
                  key={link.name}
                  className="px-5 py-2 md:px-4 md:py-2 hover:bg-purple-500 w-full md:w-auto"
                >
                  <Link
                    to={link.url}
                    className="text-white block hover:text-blue-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </section>
  );
};

export default Subheader;