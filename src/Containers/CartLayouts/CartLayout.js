import React from 'react';
import './CartLayout.css';
import SearchRestaurantView from '../../Components/SearchRestaurant/SearchRestaurantView';
import Footer from '../../Components/Footer/index';

// eslint-disable-next-line  react/prop-types
const CartLayout = ({ Component }) => {
  return (
    <div className='cartcomp'>
      <div className='layoutBg' />
      <div className='layoutRestaurentView'>
        <SearchRestaurantView />
      </div>
      <Component />
      <div className='layoutFooter'>
        <Footer />
      </div>
    </div>
  );
};

export default CartLayout;
