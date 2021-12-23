import React from 'react';
import './Payment.css';
import cashicon from '../../assets/icons/cashicon.png';
import creditcardicon from '../../assets/icons/creditcardicon.png';

const PaymentOption = () => {
  return (
    <>
      <div className='preferdway'>
        <p className='preferedtext'>Please select your preferred way to pay. </p>
      </div>
      <div className='cashcarddiv'>
        <div className='cashdiv'>
          <input type='radio' name='payment' className='cashradio' />
          <div className='cash'>
            <img src={cashicon} className='cashicons' alt='' />
          </div>
          <div className='cashes'>
            <p className='Cashtext'>Cash</p>
          </div>
        </div>
        <div className='carddiv'>
          <input type='radio' name='payment' className='cardradio' />
          <div className='card'>
            <img src={creditcardicon} className='cardicons' alt='' />
          </div>
          <div className='cards'>
            <p className='Cardtext'>Credit/Debit Card</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentOption;
