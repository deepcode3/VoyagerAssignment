import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
import Checkout from './components/Checkout';
import Products from './components/Products';
import { CartProvider } from './CartContext';

const MainContext = () => {
  return (
    <Div>
      <CartProvider>
        <Router>
          <Nav />
          <Route exact path='/' element={<Products />} />
          <Route path='/checkout' element={<Checkout />} />
        </Router>
      </CartProvider>
    </Div>
  );
};
export default MainContext;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
