/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Payment.css';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import visaicon from '../../Assets/Icons/visaicon.png';
import PaymentOption from './PaymentOption';
import PaymentPoints from './PaymentPoints';
import PaymentDeliveryDetails from './PaymentDeliveryDetails';
import PaymentresDetails from './PaymentresDetails';
import payback from '../../Assets/Images/payback.png';
import paynow from '../../Assets/Images/paynow.png';
import cactive from '../../Assets/Icons/Active state.png';
import activeline from '../../Assets/Icons/Activeline.png';

const Payment = () => {
  const [enterCardDetails, setEnterCardDetails] = useState(false);
  // const history={useHistory}
  const location = useLocation();
  const history = useHistory();
  const loadfinalpay = () => {
    history.push({ pathname: '/finalpay', state: { restaurant: location.state.restaurant } });
  };
  const loadaddress = () => {
    history.goBack('/address');
  };
  const showCardDetails = () => {
    setEnterCardDetails(true);
  };
  const HideCardDetails = () => {
    setEnterCardDetails(false);
  };
  console.log(enterCardDetails);
  return (
    <>
      <div className='paymentheading'>
        <p className='paymenttext'>Payment</p>
      </div>
      <div className='paymentcontainer'>
        <div className='Preferdpaymentdiv'>
          <PaymentOption cardDisplay={showCardDetails} hideDetails={HideCardDetails} />
        </div>
        <div className='carddetailscontainer'>
          {enterCardDetails
          // eslint-disable-next-line react/jsx-wrap-multilines
            ? (
          // eslint-disable-next-line react/jsx-wrap-multilines
              <>
                <p className='entercarddetailstext'>
                  Enter Credit/Debit card details
                </p>
                <div className='cardnumberdiv'>
                  <p className='cardnumbertext'>Card number</p>
                  <input type='text' className='cardnumber' />
                  <img src={visaicon} className='Visaicon' alt='' />
                  <div className='cardnumberline' />
                </div>
                <div className='nameoncarddiv'>
                  <p className='nameoncard'>Name on card</p>
                  <input type='text' className='namecard' />
                  <div className='namecardline' />
                </div>
                <div className='expirydatediv'>
                  <p className='expiry'>Expiry</p>
                  <p className='security'>Security card</p>
                  <input type='text' className='date' />
                  <div className='datelines' />
                  <div className='bar'>/</div>
                  <input type='text' className='year' />
                  <input type='text' className='code' />

                  <div className='yearline' />
                  <div className='codeline' />
                </div>
                <div className='sometext'>
                  <input type='radio' className='somename' />
                  <p className='addtosave'>Add this card to saved cards</p>
                </div>
              </>)
            : (null)}
        </div>
        <PaymentPoints />
        <p className='paymentdeliverydetails'>Delivery Details</p>
        <div className='paymentdeliverydetailsdiv'>
          <PaymentDeliveryDetails />
        </div>
        <PaymentresDetails restaurantName={location.state.restaurant} />

        <div className='paybackbutton' onClick={loadaddress} role='button' onKeyDown={null}>
          <img src={payback} alt='' className='imgpayback' />
        </div>
        <div className='paynowbutton' onClick={loadfinalpay} role='button' onKeyDown={null}>
          <img src={paynow} alt='' className='imgpaynow' />
        </div>
        <div className='payactive'>
          <img src={cactive} alt='' className='Pactive' />
          <p className='pcart'>Cart</p>
        </div>
        <div className='pActiveeline'>
          <img src={activeline} alt='' className='pactiveline' />
        </div>
        <div className='payactive2'>
          <img src={cactive} alt='' className='Pactive2' />
          <p className='padresstext'>Address Details</p>
        </div>
        <div className='Pactiveline2'>
          <img src={activeline} alt='' className='pactiveline2' />
        </div>
        <div className='pactive3'>
          <img src={cactive} alt='' className='pactivestate3' />
          <p className='Ppaymenttext'>Payment</p>
        </div>
      </div>
    </>
  );
};
export default Payment;
