import React from 'react';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

type MainLayoutProps = {
  children: React.ReactNode;
  productData?: { 
    name: string;
    subcategory: string;
    description: string;
  };
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, productData }) => {
  return (
    <div >
      <Header cartLink="/cart" accountLink="/account" />
      <Subheader />
        <Breadcrumb productData={productData} />
        {children} 
      <Footer />
    </div>
  );
};

export default MainLayout;
