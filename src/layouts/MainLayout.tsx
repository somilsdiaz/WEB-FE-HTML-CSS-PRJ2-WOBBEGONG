// src/layout/MainLayout.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div >
      <Header cartLink="/cart" accountLink="/account" />
        {children} 
      <Footer />
    </div>
  );
};

export default MainLayout;
