/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Modal from './modal';
import PaymentCard from './PaymentCard';

const PayAmount = () => {
  const currentUser = useSelector((state) => {
    return state.currentUser;
  });
  const paymentItems = [...currentUser.cards];
  const [open, setOpen] = useState(false);
  const initialFormData = Object.freeze({
    cardDigit: '',
    Name: '',
    expiaryDate: '',
    expiaryYear: '',
    securityNumber: '',
    primary: null,
  });
  const [values, setValues] = useState(initialFormData);
  return (
    <Div>
      <div className='recommendation-1'>
        <span className='pay-methods'>Payment Methods</span>
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
                  <PaymentCard item={item} index={index} values={values} setValues={setValues} />
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
  weidth: 100%;
  display: flex;
  align-items: center;
  padding: 75px 0;
  flex-direction: column;
  position: relative;
  background-color: #f1f3fb;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 500px) {
    height: 60vh;
  }
  .recommendation-1 {
    width: 930px;
    //width: 80%;
    height: 24px;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 500px) {
      display: block;
      width: 320px;
      position: absolute;
      top: 10px;
    }
  }
  .pay-methods {
    height: 22px;
    color: #6f6f6f;
    font-family: 'Open Sans';
    font-size: 16px;
    letter-spacing: -0.27px;
    line-height: 22px;
  }
  .add-new {
    height: 19px;
    width: 83px;
    color: #fda200;
    font-family: 'SF UI Text';
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 19px;
    text-align: right;
    @media screen and (max-width: 500px) {
      display: block;
      position: absolute;
      top: 2px;
      margin-left: 230px;
    }
  }
  .recommendation-2 {
    // width: 1050px;
    width: 80%;
    height: 536px;
    display: flex;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    padding: 0 12%;
    overflow-y: scroll;
    position: relative;
    @media screen and (max-width: 500px) {
      width: 72%;
      position: relative;
      padding: 0;
    }
  }
  .order-1 {
    // width: 1050px;
    width: 100%;
    max-height: 100%;
    padding-left: 11%;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
  .list {
    list-style-type: none;
  }
`;
