// src/App.tsx

import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subheader from './components/Subheader';


const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header
                cartLink="/cart"
                accountLink="/account"
            />
        <Subheader />
        <main className="flex-grow bg-white p-4 text-center">
          <Routes>
            <Route path="/" element={<h2>Home Page Content</h2>} />
            {/* <Route path="/plp/category/:categoryName" element={<PLP />} /> */}
          </Routes>
        </main>
        
      </div>
    </Router>
  );
};

export default App;
