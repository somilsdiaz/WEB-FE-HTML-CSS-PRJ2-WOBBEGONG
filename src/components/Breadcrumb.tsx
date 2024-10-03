import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbProps {
    separator?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ separator = ' / ' }) => {
    const location = useLocation();

    const basename = '/WEB-FE-HTML-CSS-PRJ2-WOBBEGONG';
    const pathnames = location.pathname.replace(basename, '').split('/').filter((item) => item);

    return (
        <nav 
            aria-label="breadcrumb" 
            className="bg-gradient-to-r from-[#e0eafc] to-[#cfdef3] p-2 rounded-md shadow-lg border border-gray-300 mx-auto transition-shadow duration-500 ease-in-out hover:shadow-2xl min-w-[300px]"
        >
            <ul className="flex justify-start items-center space-x-2 ml-1 text-sm md:text-base text-gray-700 font-semibold animate-fade-in-down">
                <li>
                    <Link 
                        to="/" 
                        className="text-[#3A1C71] hover:text-[#FFAF7B] transition-colors duration-500 ease-in-out hover:shadow-md p-2 rounded-lg"
                    >
                        Inicio
                    </Link>
                </li>
                {pathnames.map((name, index) => {
                    const displayName = name === 'PLP' ? 'Lista de productos' : 
                    name === 'cart' ? 'Carrito' : decodeURIComponent(name.charAt(0).toUpperCase() + name.slice(1));
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={name} className="flex items-center">
                            <span className="mx-2 text-gray-500">
                                {separator}
                            </span>
                            {isLast ? (
                                <span className="text-[#3A1C71] font-bold">
                                    {displayName}
                                </span>
                            ) : (
                                name === 'PLP' ? (
                                    <span className="text-[#3A1C71] hover:text-[#FFAF7B] transition-colors duration-500 ease-in-out hover:shadow-md p-0 rounded-lg">
                                        {displayName}
                                    </span>
                                ) : (
                                    <Link 
                                        to={routeTo} 
                                        className="text-[#3A1C71] hover:text-[#FFAF7B] transition-colors duration-500 ease-in-out hover:shadow-md p-2 rounded-lg"
                                    >
                                        {displayName}
                                    </Link>
                                )
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
