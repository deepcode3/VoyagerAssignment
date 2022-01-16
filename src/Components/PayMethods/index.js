/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Modal from './modal';
import PaymentCard from './PaymentCard';
import { ProfileContext } from '../../Context/ProfileContext';
import Device from '../../DeviceSize';
// import visaicon from '../../Assets/Icons/visaicon.png';
// import mastercard from '../../Assets/Iconsmastercard_icon.png'

const PayAmount = () => {
  const { paymentItems, addItem2, removeItem2 } = useContext(ProfileContext);
  const [open, setOpen] = useState(false);
  const initialFormData = Object.freeze({
    cardDigit: '',
    Name: '',
    expiaryDate: '',
    expiaryYear: '',
    securityNumber: '',
    primary: null,
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
                  <PaymentCard
                    item={item}
                    removeItem={removeItem2}
                    index={index}
                    values={values}
                    setValues={setValues}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {open && <Modal setOpen={setOpen} values={values} setValues={setValues} addItem={addItem2} />}
    </Div>
  );
};
export default PayAmount;

const Div = styled.div`
  height: 100vh;
  weidth: 100wh;
  display: flex;
  align-items: center;
  padding: 75px 0;
  flex-direction: column;
  position: relative;
  background-color: #f1f3fb;
  margin-right: auto;
  margin-left: auto;
  @media ${Device.mobile} {
    max-width: 390px;
  }
  @media ${Device.tablet} {
    max-width: 954px;
  }
  @media ${Device.desktop} {
    max-width: 1400px;
  }
  @media ${Device.desktopL} {
    max-width: 2500px;
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
  }
  .order-1 {
    // width: 1050px;
    width: 100%;
    max-height: 100%;
    padding-left: 11%;
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
    //margin-left: 720px;
  }
  .list {
    list-style-type: none;
  }
`;
