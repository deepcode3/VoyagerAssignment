/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from './modal';
import PaymentCard from './PaymentCard';

// import visaicon from '../../Assets/Icons/visaicon.png';
// import mastercard from '../../Assets/Iconsmastercard_icon.png'

const PayAmount = () => {
  const currentUser = useSelector((state) => {
    return state.currentUser;
  });
  const paymentItems = [...currentUser.cards];
  const [open, setOpen] = useState(false);
  const initialFormData = Object.freeze({
    cardNumber: '',
    cardName: '',
    expiaryDate: '',
    expiaryYear: '',
    securityNumber: '',
    cardIcon: [
      {
        visa: '../../Assets/Icons/visaicon.png',
        masterCard: '../../Assets/Iconsmastercard_icon.png',
      },
    ],
  });
  const [values, setValues] = useState(initialFormData);
  return (
    <Div>
      <div className='recommendation-1'>
        <span className='my-addresses-2'>Payment Methods</span>
        <span
          className='add-new'
          type='button'
          onClick={() => {
            setOpen(true);
          }}
          role='button'
          onKeyDown={null}
        >
          + Add new
        </span>
      </div>
      <div className='recommendation-2'>
        <div className='order-1'>
          <ul>
            {paymentItems.map((item, index) => {
              return (
                <li key={index.toString()} className='list'>
                  <PaymentCard item={item} index={index} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {open && <Modal setOpen={setOpen} values={values} setValues={setValues} />}
    </Div>
  );
};
export default PayAmount;

const Div = styled.div`
  height: 100vh;
  weidth: 100wh;
  display: flex;
  align-items: center;
  padding:75px 0;
  flex-direction:column;
  position: relative;
  background-color: #f1f3fb;
  .recommendation-1 {
    width: 930px;
    display:flex;
  }
  .my-addresses-2 {
    height: 22px;
    width: 160px;
    color: #6f6f6f;
    font-family: "Open Sans";
    font-size: 16px;
    letter-spacing: -0.27px;
    line-height: 22px;
    margin
  }
  .add-new {
    height: 19px;
    width: 83px;
    color: #fda200;
    font-family: "SF UI Text";
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 19px;
    text-align: right;
    margin-left:720px;
  }
  .recommendation-2 {
    height: 536px;
    width: 1050px;
    overflow-y: scroll;
    position: relative;
  }
  .order-1 {
    width: 1050px;
    max-height: 100%;
  }  
  .list{
    list-style-type: none;
  }
`;
