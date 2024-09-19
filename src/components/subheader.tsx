// src/components/Subheader.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { menuItems, MenuItem, LinkType } from '../data/DataCategory'; // Importa desde DataCategory

const Subheader: React.FC = () => {
  return (
    <section className="bg-purple-600 text-white py-4">
      <nav className="flex justify-start items-center gap-5 pl-2">
        {menuItems.map((item) => (
          <div key={item.category} className="relative group">
            <a href="#" className="hover:bg-purple-600 px-4 py-2 rounded">
              {item.category}
            </a>
            <ul className="absolute left-0 mt-1 bg-purple-700 hidden group-hover:block p-2 rounded-lg">
              {item.links.map((link) => (
                <li key={link.name} className="px-4 py-2 hover:bg-purple-500 rounded">
                  <Link to={`${link.url}?category=${link.category}`} className="text-white hover:text-blue-900">
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
