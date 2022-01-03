import { React, useState } from 'react';
import CommonHeader from '../HeaderCommon/CommonHeader';
import Cartdata from './Cartdata';
import Cartlist from './Cartlist';
import './CartHome.css';
import Footer from '../Footer';

const CartHome = () => {
  const [cartifo] = useState(Cartdata);
  return (
    <>
      <CommonHeader />
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
