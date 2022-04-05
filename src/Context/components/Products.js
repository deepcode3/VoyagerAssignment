import React from 'react';
import Card from './Card';

const Products = () => {
  const P = [
    { name: 'vest', price: 50 },
    { name: 'jacket', price: 70 },
    { name: 'Sweater', price: 80 },
    { name: 'tshirt', price: 5 },
    { name: 'jumper', price: 30 },
  ];

  return (
    <div>
      {P.map((p) => {
        return <Card name={p.name} price={p.price} />;
      })}
    </div>
  );
};
export default Products;
