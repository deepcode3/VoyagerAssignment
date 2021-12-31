/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { useHistory } from 'react-router-dom';
import PaymentOption from '../payment/PaymentOption';
import PaymentPoints from '../payment/PaymentPoints';
import PaymentDeliveryDetails from '../payment/PaymentDeliveryDetails';
import PaymentresDetails from '../payment/PaymentresDetails';
import payback from '../../assets/images/payback.png';
import paynow from '../../assets/images/paynow.png';
import mastercardicon from '../../assets/icons/mastercard_icon.png';
import pvisaicon from '../../assets/icons/Visa_icon.png';
import CommonHeader from '../headercommon/CommonHeader';
import '../payment/Payment.css';
import './FinalPayment.css';
import Footer from '../Footer';

const FinalPayment = () => {
  const history = useHistory();
  const prepay = () => {
    history.goBack('/payment');
  };
  return (
    <>
      <CommonHeader />
      <div className='finalpaymentbg'>
        <p className='paytext'>Payment</p>
        <div className='finalpaycontainer'>
          <PaymentOption />
          <p className='mycards'>My Card</p>
          <div className='payaddnew'>
            <p className='payaddnewtext'>ADD NEW</p>
          </div>
          <div className='cardsdiv'>
            <div className='mask1'>
              <img src={pvisaicon} alt='' className='vicon' />
              <p className='vcardnums'>54XX XXXX XXXX 1267</p>
              <p className='vcardname'>Abdullah</p>
              <p className='vexpdate'>Expiry:03/22</p>
              <input type='text' className='ventercode' placeholder='Enter CVV' />
              <div className='vcardline' />
            </div>

            <div className='mask'>
              <img src={mastercardicon} alt='' className='mcardicon' />
              <p className='cardnums'>54XX XXXX XXXX 1267</p>
              <p className='mcardname'>Abdullah</p>
              <p className='mexpdate'>Expiry:03/22</p>
              <input type='text' className='entercode' placeholder='Enter security code' />
              <div className='mcardline' />
            </div>
          </div>
          <div className='Fpaypoints'>
            <PaymentPoints />
          </div>

          <p className='Fpaymentdeliverydetails'>Delivery Details</p>
          <div className='Fpaydeldetails'>
            <PaymentDeliveryDetails />
          </div>
          <div className='fpayres'>
            <PaymentresDetails />
          </div>
          <div className='fpayback' onClick={prepay} role='button' onKeyDown={null}>
            <img src={payback} alt='' />
          </div>
          <div
            className='fpaynow'
            onClick={() => {
              history.push('/status');
            }}
            role='button'
            onKeyDown={null}
          >
            <img src={paynow} alt='' />
          </div>
        </div>
      </div>
      <div className='footerDivFinalPay'>
        <Footer />
      </div>
    </>
  );
};
export default FinalPayment;
