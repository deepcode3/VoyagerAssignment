/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Description.css';
import { cartContext } from '../../context/cartContext';
import vegicon from '../../assets/icons/vegicon.png';
import nonveg from '../../assets/icons/nonveg.png';

// eslint-disable-next-line object-curly-newline
const Items = ({ item, price, quantity, isVeg }) => {
  const { deleteItem, increaseItemQuantity, decreaseItemQuantity } = useContext(cartContext);

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
            return decreaseItemQuantity(item);
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
            return increaseItemQuantity(item);
          }}
          role='button'
          onKeyDown={null}
        >
          +
        </div>
      </div>
      <div className='itemtotalcost'>
        AED
        {price * quantity}
      </div>
      <div
        className='remove'
        onClick={() => {
          return deleteItem(item);
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
};
