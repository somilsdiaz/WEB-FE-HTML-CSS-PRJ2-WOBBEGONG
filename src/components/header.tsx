import React from 'react';

type HeaderProps = {
    logoSrc: string;
    cartLink: string;
    accountLink: string;
};

const Header: React.FC<HeaderProps> = ({ logoSrc, cartLink, accountLink }) => {
    return (
        <header>

            <div>
                <a href="/">
                <img src={logoSrc} alt="Logo"/>
                </a>
            </div>

            <div>
                <input
                type="text"
                placeholder="Buscar productos"
                className="px-4 py-2 border border-gray-300 rounded-lg"
                />
                <button type="submit">
                <img src="/assets/loupe.svg" alt="Buscar"/>
                </button>
            </div>

            <div>
                <a href={cartLink}>
                <img src="/assets/cart.svg" alt="Carrito"/>
                <span>Carrito</span>
                </a>
                <a href={accountLink}>
                <img src="/assets/user.svg" alt="Mi Cuenta"/>
                <span>Mi Cuenta</span>
                </a>
            </div>
            
        </header>
    );
};

export default Header;
