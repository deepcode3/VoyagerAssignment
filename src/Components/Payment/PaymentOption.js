import React from 'react';
import './Payment.css';
import PropTypes from 'prop-types';
import cashicon from '../../Assets/Icons/cashicon.png';
import creditcardicon from '../../Assets/Icons/creditcardicon.png';

const PaymentOption = ({ cardDisplay, hideDetails, enterCardDetails }) => {
  return (
    <>
      <div className='preferdway'>
        <p className='preferedtext'>Please select your preferred way to pay. </p>
      </div>
      <div className='cashcarddiv'>
        <div className='cashdiv'>
          <input
            type='radio'
            name='payment'
            className='cashradio'
            onClick={hideDetails}
            checked={!enterCardDetails}
          />
          <div className='cash'>
            <img src={cashicon} className='cashicons' alt='' />
          </div>
          <div className='cashes'>
            <p className='Cashtext'>Cash</p>
          </div>
        </div>
        <div className='carddiv'>
          <input
            type='radio'
            name='payment'
            className='cardradio'
            onClick={cardDisplay}
            checked={enterCardDetails}
          />
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

PaymentOption.propTypes = {
  cardDisplay: PropTypes.func.isRequired,
  hideDetails: PropTypes.func.isRequired,
  enterCardDetails: PropTypes.bool.isRequired,
  // display: PropTypes.func,
};
// PaymentOption.defaultProps = {
//   display: () => {},
// };
