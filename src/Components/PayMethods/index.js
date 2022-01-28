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
    width: 950px;
    display: flex;
    position: relative;
    height: 24px;
    margin-right: auto;
    margin-left: auto;
    @media screen and (max-width: 1000px) {
      width: 670px;
    }
    @media screen and (max-width: 860px) {
      width: 640px;
    }
    @media screen and (max-width: 670px) {
      width: 440px;
    }
    @media screen and (max-width: 500px) {
      width: 320px;
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
    position: absolute;
    display: flex;
    left: 30px;
    @media screen and (max-width: 1000px) {
      left: 30px;
    }
    @media screen and (max-width: 670px) {
      left: 15px;
    }
    @media screen and (max-width: 500px) {
      left: 30px;
    }
  }
  .add-new {
    height: 19px;
    color: #fda200;
    font-family: 'SF UI Text';
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 19px;
    display: flex;
    position: absolute;
    right: 4px;
    @media screen and (max-width: 670px) {
      right: 5px;
    }
    @media screen and (max-width: 500px) {
      display: block;
      position: absolute;
      top: 2px;
      margin-left: 230px;
    }
  }
  .recommendation-2 {
    width: 1000px;
    // width: 80%;
    height: 536px;
    display: flex;
    // text-align: center;
    margin-right: auto;
    margin-left: auto;
    //padding: 0 12%;
    overflow-y: scroll;
    position: relative;
    @media screen and (max-width: 1000px) {
      width: 720px;
    }
    @media screen and (max-width: 768px) {
      width: 550px;
    }

    @media screen and (max-width: 500px) {
      width: 72%;
      position: relative;
      padding: 0;
    }
  }
  .order-1 {
    width: 1000px;
    max-height: 100%;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
  .list {
    list-style-type: none;
  }
`;
