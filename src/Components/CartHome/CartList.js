/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import Proptypes from 'prop-types';
import './CartHome.css';

import { useHistory } from 'react-router-dom';

// eslint-disable-next-line object-curly-newline
const Cartlist = ({ Hotelname, hoteladdress, totalproduct, productcost }) => {
  const history = useHistory();
  return (
    <>
      <p className='mycarttext'>
        My Cart
        <span> (3)</span>
      </p>
      <div className='cartdiv'>
        <p className='cartresname'>{Hotelname}</p>
        <p className='cartremovebtn'>Remove</p>
        <p className='cartresaddress'>{hoteladdress}</p>
        <div className='itemandcostdiv'>
          <p className='totalresitems'>
            <span>{totalproduct}</span>
            Items
          </p>
          <div className='cartvertical'>|</div>
          <p className='Carthometotal'>
            AED
            <span>{productcost}</span>
          </p>
        </div>
        <div
          className='cartproceedbtn'
          onClick={() => {
            return history.push('/cart');
          }}
          role='button'
          onKeyDown={null}
        >
          <p className='cartproceedtext'>PROCEED</p>
        </div>
      </div>
    </>
  );
};

export default Cartlist;
Cartlist.propTypes = {
  Hotelname: Proptypes.string.isRequired,
  hoteladdress: Proptypes.string.isRequired,
  totalproduct: Proptypes.number.isRequired,
  productcost: Proptypes.number.isRequired,
};
