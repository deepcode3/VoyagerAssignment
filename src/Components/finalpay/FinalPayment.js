/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ProfileContext } from '../../Context/ProfileContext';
import PaymentOption from '../payment/PaymentOption';
import PaymentPoints from '../payment/PaymentPoints';
import PaymentDeliveryDetails from '../payment/PaymentDeliveryDetails';
import PaymentresDetails from '../payment/PaymentresDetails';
import PaymentCardCart from './PaymentCardCart';
import payback from '../../Assets/Images/payback.png';
import paynow from '../../Assets/Images/paynow.png';
// import mastercardicon from '../../Assets/Icons/mastercard_icon.png';
// import pvisaicon from '../../Assets/Icons/Visa_icon.png';
import CommonHeader from '../headercommon/CommonHeader';
import '../payment/Payment.css';
import './FinalPayment.css';
import Footer from '../Footer';

const FinalPayment = () => {
  const { paymentItems } = useContext(ProfileContext);
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
          <div>
            <div className='pay_container'>
              <div className='pay_scroller'>
                <ul className='list'>
                  {paymentItems.map((item, index) => {
                    return (
                      <li key={index.toString()}>
                        <PaymentCardCart item={item} index={index} />
                      </li>
                    );
                  })}
                </ul>
              </div>
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
