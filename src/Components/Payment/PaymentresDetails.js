import React from 'react';
import Proptypes from 'prop-types';
import './Payment.css';

const PaymentresDetails = ({ restaurantName }) => {
  return (
    <div className='payoitemsorderdfrom'>
      <p className='payitemsyouorderdfrom'>Items in your order from</p>
      <div className='subdiv'>
        <p className='subdivresname'>{restaurantName}</p>
        <p className='subdivaddress'>Shiekh Zayed Road, , Dubai, UAE</p>
      </div>
    </div>
  );
};
export default PaymentresDetails;
PaymentresDetails.propTypes = {
  restaurantName: Proptypes.string.isRequired,
};
