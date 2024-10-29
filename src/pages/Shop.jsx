/* eslint-disable no-unused-vars */
// Shop.js
import React from 'react';
import ShopPage from '../components/ShopPage';
import Product from '../components/Product';
import Footer from '../components/Footer';

const Shop = () => {
  return (
    <>
  
      <ShopPage />
      <Product />
      <Footer />
    </>
  );
};

export default Shop;
console.log('Shop component rendered');