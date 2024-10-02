import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";
import ErrorComponent from "./ErrorComponent";

type LinkData = {
  name: string;
  subcategory: string;
};

type DataCategory = {
  name: string;
  url: string;
  category: string;
  links?: LinkData[];
};

const Subheader: React.FC = () => {
  const [menuItems, setMenuItems] = useState<DataCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://web-fe-prj2-api-wobbegong.onrender.com/dataCategory")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  
  if (loading) return <Skeleton />;
  if (error) return <ErrorComponent message={error} />;

  return (
    <section className="bg-[#5249cc] text-white pb-2">
      <nav className="flex flex-col md:flex-row justify-start items-start md:justify-start md:items-center gap-0 md:gap-5 pl-0 md:pl-0">
        {menuItems.map((item) => (
          <div
            key={item.category}
            className="menu-item relative w-full md:w-auto text-left border-b md:border-none p-2 md:p-0"
            onMouseEnter={() => setActiveCategory(item.category)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <button className="block w-full text-left hover:bg-purple-600 px-5 py-2 md:px-4 md:py-2 rounded md:rounded-none">
              {item.category}
            </button>
            <ul
              className={`submenu ${
                activeCategory === item.category ? "block" : "hidden"
              } md:absolute md:left-0 md:top-full mt-1 md:mt-0 md:bg-[#5249cc] md:rounded-lg w-full md:w-max md:z-[21]`}
            >
              {item.links && item.links.length > 0 ? (
                item.links.map((link) => (
                  <li
                    key={link.name}
                    className="px-5 py-2 md:px-4 md:py-2 hover:bg-[#949de0] w-full md:w-auto"
                  >
                    <Link
                      to={`/PLP/${link.subcategory}`}
                      className="text-white block hover:text-blue-900"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="px-5 py-2 md:px-4 md:py-2">
                  No subcategories available
                </li>
              )}
            </ul>
          </div>
        ))}
      </nav>
    </section>
  );
};

export default Subheader;
