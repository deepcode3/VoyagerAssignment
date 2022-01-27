import React from 'react';
import PropTypes from 'prop-types';
import './Payment.css';

const PaymentDeliveryDetails = ({ location, deliveryType }) => {
  return (
    <div className='paydeliverydetails'>
      <div className='locationtimediv'>
        <div className='paydeliverylocation'>
          {deliveryType !== 'pickUp' ? (
            <p className='paydeliverylocationtext'>Delivery location</p>
          ) : null}
          <p className='paydeliveryaddress'>
            {deliveryType === 'pickUp'
              ? 'You chose to pick up'
              : `${location.location}, -${location.city} - ${location.area} - ${location.address}`}
          </p>
          <div className='paychange'>Change</div>
        </div>
        <div className='payonegreyline' />
        <div className='paydateandtime'>
          <p className='dateandtime'>Date & Time</p>
          <p className='todayat11'>Today at 11:30 AM</p>
          <p className='datetimedivchange'>Change</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentDeliveryDetails;
PaymentDeliveryDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  deliveryType: PropTypes.string.isRequired,
};
