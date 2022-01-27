/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import pvisaicon from '../../Assets/Icons/Visa_icon.png';
import './FinalPayment.css';

const PaymentCardCart = ({ item, index }) => {
  return (
    <div key={index.toString()} className='pay-card'>
      <img src={pvisaicon} alt='' className='vicon' />
      <span className='vcardnums'>{`${item.cardDigit}`}</span>
      <span className='vcardname'>{`${item.Name}`}</span>
      <span className='vexpdate'>{`Expiary:${item.expiaryDate}/${item.expiaryYear}`}</span>
      <input type='text' className='ventercode' placeholder='Enter CVV' />
      <div className='vcardline' />
    </div>
  );
};

export default PaymentCardCart;
PaymentCardCart.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};
