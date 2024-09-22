// src/layout/MainLayout.tsx
import React from 'react';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';


type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div >
      <Header cartLink="/cart" accountLink="/account" />
      <Subheader />
        <Breadcrumb />
        {children} 
      <Footer />
    </div>
  );
};

export default MainLayout;
