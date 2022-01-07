import { React, useState } from 'react';
import Cartdata from './CartData';
import Cartlist from './CartList';
import './CartHome.css';

const CartHome = () => {
  const [cartifo] = useState(Cartdata);
  return (
    <div className='cartbg'>
      {cartifo.map((val) => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Cartlist key={val.id} {...val} />;
      })}
    </div>
  );
};

export default CartHome;
