import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import useFetch from '../hooks/useFetch';
import './ProductList.css';

const ProductList = () => {
  const { data, error } = useFetch('https://dummyjson.com/products');
  
  if (error) {
    return <div>Error loading products!</div>;
  }

  return (
    <div className="product-list">
      {data && data.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
