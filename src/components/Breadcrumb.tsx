import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbProps {
    separator?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ separator = ' / ' }) => {
const location = useLocation();

// Eliminar el basename para que no aparezca en los breadcrumbs
const basename = '/WEB-FE-HTML-CSS-PRJ2-WOBBEGONG';
const pathnames = location.pathname.replace(basename, '').split('/').filter((item) => item);

return (
<nav aria-label="breadcrumb" className="bg-[#4C37C0] p-3 rounded-md shadow-lg">
    <ul className="flex items-center space-x-1 text-xs md:text-sm text-white font-medium">
    <li>
        <Link to="/" className="text-[#a8c1ff] hover:text-white hover:underline transition-all duration-300 ease-in-out">
        Inicio
        </Link>
    </li>
    {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
        <li key={name} className="flex items-center">
            <span className="mx-1 text-[#a8c1ff]">{separator}</span>
            {isLast ? (
            <span className="text-gray-100">
                {/* Decodificar la URL para mostrar correctamente los caracteres especiales */}
                {decodeURIComponent(name.charAt(0).toUpperCase() + name.slice(1))}
            </span>
            ) : (
            <Link 
                to={routeTo} 
                className="text-[#a8c1ff] hover:text-white hover:underline transition-all duration-300 ease-in-out"
            >
                {decodeURIComponent(name.charAt(0).toUpperCase() + name.slice(1))}
            </Link>
            )}
        </li>
        );
    })}
    </ul>
</nav>
);
};

export default Breadcrumb;
