/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './Description.css';
import vegicon from '../../Assets/Icons/vegicon.png';
import nonveg from '../../Assets/Icons/nonveg.png';
import { removeItem, increaseItemQuantity, decreaseItemQuantity } from '../../Actions/CartActions';
import { findIndex } from '../../Utils';
// eslint-disable-next-line object-curly-newline
const Items = ({ item, price, quantity, isVeg, from, restaurant }) => {
  const index = findIndex();
  const dispatch = useDispatch();
  return (
    <div className='orderitems'>
      <div className='item'>
        <p className='itemname'>{item}</p>
        {isVeg ? (
          <div>
            <img src={vegicon} className='symbol' alt='' />
          </div>
        ) : (
          <div>
            <img src={nonveg} className='symbol' alt='' />
          </div>
        )}
      </div>
      <div className='cost'>
        <p className='icost'>
          AED
          {price}
        </p>
      </div>
      <div className='addon'>
        <p className='addons'>Add On : Avacado, Seasoned Grilled Chicken, Grilled Salmon</p>
      </div>
      <div className='incdeccount'>
        <div
          className='decbutton'
          onClick={() => {
            return dispatch(decreaseItemQuantity(item, restaurant, index));
          }}
          role='button'
          onKeyDown={null}
        >
          _
        </div>
        <div className='number'>{quantity}</div>
        <div
          className='incbutton'
          onClick={() => {
            return dispatch(increaseItemQuantity(item, restaurant, index));
          }}
          role='button'
          onKeyDown={null}
        >
          +
        </div>
      </div>
      <div className={from === 'cart' ? 'itemtotalcost' : 'orderDetailsTotalCost'}>
        AED
        {price * quantity}
      </div>
      <div
        className='remove'
        onClick={() => {
          return dispatch(removeItem(item, restaurant, index));
        }}
        role='button'
        onKeyDown={null}
      >
        Remove
      </div>
      <div className='greyline' />
    </div>
  );
};

export default Items;
Items.propTypes = {
  item: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  isVeg: PropTypes.number.isRequired,
  from: PropTypes.string.isRequired,
  restaurant: PropTypes.string.isRequired,
};
