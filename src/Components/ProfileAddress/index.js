/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ProfileContext } from '../../Context/ProfileContext';
import Modal from './modal';
import AddressCard from './AddressCard';

const Address = () => {
  const { addressItems, addItem1, removeItem1 } = useContext(ProfileContext);
  const [open, setOpen] = useState(false);
  const initialFormData = Object.freeze({
    location: '',
    city: '',
    area: '',
    address: '',
    addressLabel: '',
    primary: null,
  });
  const [values, setValues] = useState(initialFormData);
  console.log('addressItems', addressItems);
  return (
    <Div>
      <div className='recommendation-1'>
        <span className='my-addresses-2'>Address</span>
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
            {addressItems.map((item, index) => {
              return (
                <li key={index.toString()} className='list'>
                  <AddressCard
                    item={item}
                    removeItem={removeItem1}
                    index={index}
                    values={values}
                    setValues={setValues}
                    // primary={primary}
                    // handleClick={handleClick}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {open && <Modal setOpen={setOpen} values={values} setValues={setValues} addItem={addItem1} />}
    </Div>
  );
};
export default Address;

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
@media screen and (max-width: 393px) {
  height: 60vh;
}
    .recommendation-1 {
        width: 930px;
        display:flex;
        height: 24px;
        margin-right: auto;
        margin-left: auto;
        justify-content: space-between;
        @media screen and (max-width: 393px) {
          display:block;
          width: 320px;
          position:absolute;
          top:10px;
        }
    }
    .my-addresses-2 {
       height: 22px;
       width: 122px;
       color: #6f6f6f;
       font-family: "Open Sans";
       font-size: 16px;
       letter-spacing: -0.27px;
       line-height: 22px;
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
       @media screen and (max-width: 393px) {
        display: block;
        position:absolute;
        top:2px;
        margin-left:230px;
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
       @media screen and (max-width: 393px) {
         width:72%;
        background-color:red;
        position: relative;
        padding: 0;
       }
   }
   .order-1 {
    //  width: 1050px;
      width: 100%;
      max-height: 100%;
      padding-left: 11%;
      @media screen and (max-width: 393px) {
        background-color:green;
        width: 100%;
       }
   }
  .list{
    list-style-type: none;
  }
    .primary-1{
      position: absolute;
      top:21px;
      left:367px;
    }
    .primary {
      height: 19px;
      width: 52px;
      
      font-family: "Open Sans";
      font-size: 14px;
      font-weight: 600;
      letter-spacing: -0.27px;
      line-height: 19px;  
      padding-left:11px;
    }
    .address{
      height: 84px;
      width: 387px;
      color: #2D2D2D;
      font-family: "Open Sans";
      font-size: 18px;
      letter-spacing: -0.3px;
      line-height: 28px;
      position: absolute;
      top:59px;
      left:26px;
    }
    .edit {
      height: 22px;
      width: 30px;
      color: #F57C00;
      font-family: "Open Sans";
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 22px;
      text-align: center;
      position: absolute;
      top:143px;
      left:343px;
    }
    .delete {
      height: 22px;
      width: 51px;
      color: #F57C00;
      font-family: "Open Sans";
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 22px;
      text-align: center;
      position: absolute;
      top:143px;
      left:400px;
    }
}
`;
