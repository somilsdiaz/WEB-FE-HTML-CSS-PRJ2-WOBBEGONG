import React from 'react';

import logo from '../assets/img/Logo_Of.svg';
import loupe from '../assets/img/loupe.svg';
import cart from '../assets/img/cart.svg';
import user from '../assets/img/user.svg';

type HeaderProps = {
    cartLink: string;
    accountLink: string;
};

const Header: React.FC<HeaderProps> = ({ cartLink, accountLink }) => {
    return (
        <header className="bg-[#4C37C0] flex justify-between items-center p-4">
            <div className="logo rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <a href="/">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="w-16 md:w-20 h-auto rounded-full border-2 border-[#5c74e0]" 
                    />
                </a>
            </div>


            <div className="center flex items-center justify-center flex-grow mx-2">
                <input
                    type="text"
                    placeholder="Buscar productos"
                    className="h-[35px] w-full max-w-[200px] md:max-w-[400px] border-none px-4 rounded-l-lg shadow-sm outline-none"
                />
                <button 
                    type="submit" 
                    className="h-[35px] border-none px-4 bg-white rounded-r-lg flex items-center justify-center shadow-sm cursor-pointer"
                >
                    <img src={loupe} alt="Buscar" className="w-4 h-4" />
                </button>
            </div>


            <div className="links flex justify-center items-center gap-3 md:gap-5">
                <a href={cartLink} className="flex flex-col items-center text-white text-xs md:text-sm whitespace-nowrap">
                    <img src={cart} alt="Carrito" className="w-[25px] md:w-[35px]" />
                    <span>Carrito</span>
                </a>
                <a href={accountLink} className="flex flex-col items-center text-white text-xs md:text-sm whitespace-nowrap">
                    <img src={user} alt="Mi Cuenta" className="w-[25px] md:w-[35px]" />
                    <span>Mi Cuenta</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
