import { React, useState } from 'react';
import SearchRestaurantView from '../SearchRestaurant/SearchRestaurantView';
import Cartdata from './CartData';
import Cartlist from './CartList';
import './CartHome.css';
import Footer from '../Footer';

const CartHome = () => {
  const [cartifo] = useState(Cartdata);
  return (
    <>
      <SearchRestaurantView />
      <div className='cartbg'>
        {cartifo.map((val) => {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <Cartlist key={val.id} {...val} />;
        })}
      </div>
      <div className='footerDivCartHome'>
        <Footer />
      </div>
    </>
  );
};

export default CartHome;
