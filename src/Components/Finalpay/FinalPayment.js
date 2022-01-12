/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import PaymentOption from '../Payment/PaymentOption';
import PaymentPoints from '../Payment/PaymentPoints';
import PaymentDeliveryDetails from '../Payment/PaymentDeliveryDetails';
import PaymentresDetails from '../Payment/PaymentresDetails';
import { ProfileContext } from '../../Context/ProfileContext';
import PaymentCardCart from './PaymentCardCart';
import payback from '../../Assets/Images/payback.png';
import paynow from '../../Assets/Images/paynow.png';
import '../Payment/Payment.css';
import './FinalPayment.css';
import cactive from '../../Assets/Icons/Active state.png';
import activeline from '../../Assets/Icons/Activeline.png';

const FinalPayment = () => {
  const location = useLocation();
  const history = useHistory();
  const { paymentItems } = useContext(ProfileContext);
  const prepay = () => {
    history.goBack('/payment');
  };
  const [cardDetails, setCardDetails] = useState(false);
  const showDetails = () => {
    setCardDetails(true);
  };
  const hideCard = () => {
    setCardDetails(false);
  };
  return (
    <div className='finalpaymentbg'>
      <p className='paytext'>Payment</p>
      <div className='finalpaycontainer'>
        <PaymentOption cardDisplay={showDetails} hideDetails={hideCard} />
        {cardDetails
          ? (
        // eslint-disable-next-line react/jsx-wrap-multilines
            <>
              <p className='mycards'>My Card</p>
              <div className='payaddnew'>
                <p
                  className='payaddnewtext'
                  onKeyDown={null}
                  onClick={() => {
                    history.push('/profile/profile-Pay');
                  }}
                >
                  ADD NEW
                </p>
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
            </>)
          : (null)}
        <div className='Fpaypoints'>
          <PaymentPoints />
        </div>

        <p className='Fpaymentdeliverydetails'>Delivery Details</p>
        <div className='Fpaydeldetails'>
          <PaymentDeliveryDetails />
        </div>
        <div className='fpayres'>
          <PaymentresDetails restaurantName={location.state.restaurant} />
        </div>
        <div className='fpayback' onClick={prepay} role='button' onKeyDown={null}>
          <img src={payback} alt='' />
        </div>
        <div
          className='fpaynow'
          onClick={() => {
            history.push({ pathname: '/status', state: { restaurant: location.state.restaurant } });
          }}
          role='button'
          onKeyDown={null}
        >
          <img src={paynow} alt='' />
        </div>
      </div>
      <div className='fpayactive'>
        <img src={cactive} alt='' className='Fpactive' />
        <p className='fcart'>Cart</p>
      </div>
      <div className='FActiveeline'>
        <img src={activeline} alt='' className='fpactiveline' />
      </div>
      <div className='fpayactive2'>
        <img src={cactive} alt='' className='fpactive2' />
        <p className='fpadresstext'>Address Details</p>
      </div>
      <div className='Fpactiveline2'>
        <img src={activeline} alt='' className='fpactiveline2' />
      </div>
      <div className='fpactive3'>
        <img src={cactive} alt='' className='fpactivestate3' />
        <p className='Fpaymenttext'>Payment</p>
      </div>
    </div>
  );
};
export default FinalPayment;
