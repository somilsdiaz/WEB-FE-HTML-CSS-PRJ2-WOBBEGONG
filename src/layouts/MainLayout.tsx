// src/layout/MainLayout.tsx
import React from 'react';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Footer from '../components/Footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div >
      <Header cartLink="/cart" accountLink="/account" />
      <Subheader />
        {children} 
      <Footer />
    </div>
  );
};

export default MainLayout;
