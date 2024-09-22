import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Breadcrumb from './components/Breadcrumb'; // Importa el componente de breadcrumb
import Home from './components/Home'; // Importa el componente Home
import About from './components/About'; // Importa el componente About
import Team from './components/Team'; // Importa el componente Team



const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header
                cartLink="/cart"
                accountLink="/account"
            />
            <div className="bg-gray-200 p-4">
                Sub-header
            </div>



            <Router>
                <div className="container mx-auto p-4">
                    {/* Breadcrumb se muestra en todas las páginas */}
                    <Breadcrumb />
                    
                    {/* Definición de las rutas */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/about/team" element={<Team />} />
                    </Routes>
                </div>
            </Router>




            <main className="flex-grow bg-white p-4">
                Content
            </main>
            <footer className="bg-gray-400 p-4">
                Footer
            </footer>
        </div>
    );
};

export default App;
