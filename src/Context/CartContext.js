import React, { createContext, useState, useMemo } from 'react';

const CartContext = createContext();

export const CartProvider = (children) => {
  const [items, setItems] = useState([]);

  const addItem = (name, price) => {
    return setItems((pstate) => {
      return [...pstate, { name, price }];
    });
  };

  const Wrapper = useMemo(() => {
    return { items, addItem }[(items, addItem)];
  });

  return <CartContext.Provider value={Wrapper}>{children.items}</CartContext.Provider>;
};
export default CartContext;
