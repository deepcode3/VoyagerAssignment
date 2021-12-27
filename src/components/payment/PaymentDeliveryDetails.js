import React from 'react';
import './Payment.css';

const PaymentDeliveryDetails = () => {
  return (
    <div className='paydeliverydetails'>
      <div className='locationtimediv'>
        <div className='paydeliverylocation'>
          <p className='paydeliverylocationtext'>Delivery location</p>
          <p className='paydeliveryaddress'>Downtown Burj Khalifa, Dubai, UAE</p>
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
