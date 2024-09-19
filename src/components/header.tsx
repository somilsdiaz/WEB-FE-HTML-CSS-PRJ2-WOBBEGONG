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
        <header>
            <div>
                <a href="/">
                    <img src={logo} alt="Logo" />
                </a>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Buscar productos"
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                />
                <button type="submit">
                    <img src={loupe} alt="Buscar" />
                </button>
            </div>

            <div>
                <a href={cartLink}>
                    <img src={cart} alt="Carrito" />
                    <span>Carrito</span>
                </a>
                <a href={accountLink}>
                    <img src={user} alt="Mi Cuenta" />
                    <span>Mi Cuenta</span>
                </a>
            </div>
        </header>
    );
};
export default Header;
