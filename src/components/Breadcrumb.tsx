//src/components/breadcrumb.tsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';


interface BreadcrumbProps {
    separator?: string;
    productData?: {
        name: string;
        subcategory?: string; 
    };
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ separator = ' / ', productData }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathnames = location.pathname.split('/').filter((item) => item);
    const isPdpRoute = pathnames.includes('pdp');
    const { isCartRoute} = useCart();

    console.log(isCartRoute);

    const handleProductListClick = () => {
        if (!productData?.subcategory) return;
        navigate(`/plp/${productData.subcategory}`);
    };

    const handleCartClick = () => {
        if (!productData?.subcategory) return;
        navigate(`/cart`);
    };


    return (
        <nav
            aria-label="breadcrumb"
            className="bg-gradient-to-r from-[#e0eafc] to-[#cfdef3] p-2 rounded-md shadow-lg border border-gray-300 mx-auto transition-shadow duration-500 ease-in-out hover:shadow-2xl min-w-[300px] overflow-x-auto whitespace-nowrap"
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

                {isPdpRoute && productData && (
    <>
                        {/* vienes del carrito? */}
                        {isCartRoute && (
                            <li className="flex items-center">
                                <span className="mx-2 text-gray-500">{separator}</span>
                                <button
                                    onClick={handleCartClick}
                                    className="text-[#3A1C71] hover:text-[#FFAF7B] transition-colors duration-500 ease-in-out hover:shadow-md p-0 rounded-lg"
                                >
                                    Carrito
                                </button>
                            </li>
                        )}

                        {/* product list */}
                        <li className="flex items-center">
                            <span className="mx-2 text-gray-500">{separator}</span>
                            <button
                                onClick={handleProductListClick}
                                className="text-[#3A1C71] hover:text-[#FFAF7B] transition-colors duration-500 ease-in-out hover:shadow-md p-0 rounded-lg"
                            >
                                Lista de productos
                            </button>
                        </li>

                        {/* subcategory */}
                        <li className="flex items-center">
                            <span className="mx-2 text-gray-500">{separator}</span>
                            <span className="text-[#3A1C71] font-bold">
                                {productData.subcategory}
                            </span>
                        </li>

                        {/* description product */}
                        <li className="flex items-center">
                            <span className="mx-2 text-gray-500">{separator}</span>
                            <span className="text-[#3A1C71] font-bold">
                                Descripción del producto
                            </span>
                        </li>

                        {/* name product */}
                        <li className="flex items-center">
                            <span className="mx-2 text-gray-500">{separator}</span>
                            <span className="text-[#3A1C71] font-bold">
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
                            {name.toLowerCase() === 'plp' ? (
                                <span className="text-[#3A1C71] font-bold">{displayName}</span>
                            ) : isLast ? (
                                <span className="text-[#3A1C71] font-bold">{displayName}</span>
                            ) : (
                                <Link
                                    to={routeTo}
                                    className="text-[#3A1C71] hover:text-[#FFAF7B] transition-colors duration-500 ease-in-out hover:shadow-md p-2 rounded-lg"
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
