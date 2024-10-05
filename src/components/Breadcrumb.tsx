import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface BreadcrumbProps {
    separator?: string;
    productData?: {
        name: string;
        subcategory: string;
    };
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ separator = ' / ', productData }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathnames = location.pathname.split('/').filter((item) => item);
    const isPdpRoute = pathnames.includes('pdp');
    const isInSubcategory = pathnames.length === 2 && pathnames[0] === 'plp';

    const handleProductListClick = (subcategory: string) => {
        if (!isInSubcategory) {
            navigate(`/plp/${subcategory}`);
        }
    };

    return (
        <nav 
            aria-label="breadcrumb" 
            className="bg-gradient-to-r from-[#e0eafc] to-[#cfdef3] p-2 rounded-md shadow-lg border border-gray-300 mx-auto transition-shadow duration-500 ease-in-out hover:shadow-2xl min-w-[300px] max-w-full"
        >
            <ul className="flex justify-start items-center space-x-2 ml-1 text-sm md:text-base text-gray-700 font-semibold animate-fade-in-down overflow-x-auto whitespace-nowrap scrollbar-hide">
                <li>
                    <Link 
                        to="/" 
                        className="text-[#3A1C71] hover:text-[#FFAF7B] transition-colors duration-500 ease-in-out hover:shadow-md p-2 rounded-lg"
                    >
                        Inicio
                    </Link>
                </li>

                {isPdpRoute && productData && (
                    <>
                        <li className="flex items-center">
                            <span className="mx-2 text-gray-500">{separator}</span>
                            <button
                                onClick={() => handleProductListClick(productData.subcategory)}
                                className={`${
                                    isInSubcategory
                                        ? 'cursor-not-allowed text-gray-500'
                                        : 'text-[#3A1C71] hover:text-[#FFAF7B] transition-colors duration-500 ease-in-out hover:shadow-md p-2 rounded-lg'
                                }`}
                                disabled={isInSubcategory}
                            >
                                Lista de productos
                            </button>
                        </li>
                        <li className="flex items-center">
                            <span className="mx-2 text-gray-500">{separator}</span>
                            <span className="text-[#3A1C71] font-bold truncate">
                                {productData.subcategory}
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="mx-2 text-gray-500">{separator}</span>
                            <span className="text-[#3A1C71] font-bold">
                                Descripción del producto
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="mx-2 text-gray-500">{separator}</span>
                            <span className="text-[#3A1C71] font-bold truncate">
                                {productData.name}
                            </span>
                        </li>
                    </>
                )}

                {!isPdpRoute && pathnames.map((name, index) => {
                    const isLast = index === pathnames.length - 1;
                    const displayName = name.toLowerCase() === 'plp' ? 'Lista de productos' :
                        name.toLowerCase() === 'cart' ? 'Carrito' :
                        decodeURIComponent(name.charAt(0).toUpperCase() + name.slice(1));
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return (
                        <li key={name} className="flex items-center">
                            <span className="mx-2 text-gray-500">{separator}</span>
                            {isLast && isInSubcategory ? (
                                <span className="text-[#3A1C71] font-bold truncate">
                                    {displayName}
                                </span>
                            ) : isLast ? (
                                <span className="text-[#3A1C71] font-bold truncate">
                                    {displayName}
                                </span>
                            ) : (
                                <Link 
                                    to={routeTo} 
                                    className="text-[#3A1C71] hover:text-[#FFAF7B] transition-colors duration-500 ease-in-out hover:shadow-md p-2 rounded-lg truncate"
                                >
                                    {displayName}
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
