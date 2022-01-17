/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import Proptypes from 'prop-types';
import './CartHome.css';
import { useHistory } from 'react-router-dom';
import { removeAllRestaurantItems } from '../../Actions/CartActions';
// eslint-disable-next-line object-curly-newline
const Cartlist = ({ Hotelname, hoteladdress, totalproduct, productcost }) => {
  const history = useHistory();
  return (
    <div className='cartdiv'>
      <p className='cartresname'>{Hotelname}</p>
      <button
        className='cartremovebtn'
        onKeyDown={null}
        type='button'
        onClick={() => {
          removeAllRestaurantItems(Hotelname);
        }}
      >
        Remove
      </button>
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
          history.push({ pathname: '/cart', state: { restaurant: Hotelname } });
        }}
        role='button'
        onKeyDown={null}
      >
        <p className='cartproceedtext'>PROCEED</p>
      </div>
    </div>
  );
};

export default Cartlist;
Cartlist.propTypes = {
  Hotelname: Proptypes.string.isRequired,
  hoteladdress: Proptypes.string.isRequired,
  totalproduct: Proptypes.string.isRequired,
  productcost: Proptypes.string.isRequired,
};
