/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { addressContext } from '../../Context/ProfileContext';
import Modal from './modal';
import AddressCard from './AddressCard';

const Address = () => {
  const { addressItems, addItem, removeItem } = useContext(addressContext);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const initialFormData = Object.freeze({
    location: '',
    city: '',
    area: '',
    address: '',
    addressLabel: '',
  });
  const [values, setValues] = useState(initialFormData);
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
                  <AddressCard item={item} removeItem={removeItem} index={index} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {open && (
        <Modal
          setOpen={setOpen}
          values={values}
          setValues={setValues}
          addItem={addItem}
          setItems={setItems}
          items={items}
        />
      )}
    </Div>
  );
};
export default Address;

const Div = styled.div`
    height: 100vh;
    weidth: 100vw;
    display: flex;
    align-items: center;
    padding-top:75px;
    flex-direction:column;
    background-color: #f1f3fb;
    .recommendation-1 {
        width: 930px;
        display:flex;
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
     }
    .home {
      height: 19px;
      width: 39px;
      color: #6A6A6A;
      font-family: "Open Sans";
      font-size: 14px;
      letter-spacing: -0.27px;
      line-height: 19px;
      position: absolute;
      top:29px;
      left:26px;
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
