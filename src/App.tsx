// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subheader from './components/subheader';


const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-300 p-4 text-center">Header</header>
        
        <Subheader />
        <main className="flex-grow bg-white p-4 text-center">
          <Routes>
            <Route path="/" element={ <h2>Home Page Content</h2>} />
           </Routes> 
        
        </main>
        <footer className="bg-gray-400 p-4 text-center">Footer</footer>
      </div>
    </Router>
  );
};

export default App;
