/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './modal';
// import { Data } from '../Profiledata';
import Data from '../Profiledata/orserdata.json';

const Orders = () => {
  const [open, setOpen] = useState(false);
  console.log('open state in orders:', open);
  console.log('open state in orders:', Data);
  return (
    <Div>
      <div className='align-1'>
        <select className='active-orders'>
          <option value='1'>Active Orders</option>
          <option value='2'>Cancelled Orders</option>
          <option value='3'>Past Orders</option>
        </select>
      </div>
      <div className='align-2'>
        <div className='rectangle-2'>
          {Data.Orders.map((data) => {
            return (
              <div key={data.orderId} className='ordercard'>
                <span className='order-id'>
                  Order id:
                  {data.orderId}
                </span>
                <span className='kitchen-type'>{data.kitchen}</span>
                <span className='road'>{data.address}</span>
                <span className='itemsAED'>
                  {`${data.items}
                  Items | AED
         ${data.cost}`}
                </span>
                <span className='delivery-status-text '>{data.status}</span>
                <div className='details'>
                  <span
                    className='detail-text'
                    type='button'
                    onClick={() => {
                      setOpen(true);
                    }}
                    role='button'
                    onKeyDown={null}
                  >
                    DETAILS
                  </span>
                </div>
                <div className='status'>
                  <span className='status-text' type='button'>
                    STATUS
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {open && <Modal setOpen={setOpen} open={open} />}
    </Div>
  );
};
export default Orders;

const Div = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  padding: 5rem 0;
  flex-direction: column;
  position: relative;
  background-color: #f1f3fb;
  @media screen and (max-width: 500px) {
    //background-color: pink;
    display: flex;
    position: relative;
    height: 60vh;
  }
  .align-1 {
    width: 1000px;
    height: 33px;
    display: flex;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    @media screen and (max-width: 998px) {
      width: 800px;
    }
    @media screen and (max-width: 768px) {
      width: 300px;
    }
    @media screen and (max-width: 500px) {
      display: flex;
      position: absolute;
      top: 10px;
      width: 50%;
      padding-left: 2%;
    }
  }
  .active-orders {
    height: 22px;
    color: #f57c00;
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 22px;
    text-align: right;
    background-color: #f1f3fb;
    border: 0px;
    outline: 0px;
    position: absolute;
  }
  .align-2 {
    height: 540px;
    width: 1000px;
    overflow-y: scroll;
    align-items: center;
    display: flex;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    @media screen and (max-width: 1815px) {
      width: 1000px;
    }
    @media screen and (max-width: 998px) {
      width: 840px;
    }
    @media screen and (max-width: 768px) {
      width: 650px;
    }
    @media screen and (max-width: 500px) {
      position: absolute;
      top: 60px;
      width: 320px;
      overflow-y: scroll;
      padding-left: 0%;
    }
  }
  .rectangle-2 {
    width: 980px;
    max-height: 100%;
    @media screen and (max-width: 1815px) {
      width: 1000px;
    }
    @media screen and (max-width: 998px) {
      width: 837px;
    }
    @media screen and (max-width: 768px) {
      width: 648px;
    }
    @media screen and (max-width: 608px) {
      width: 400px;
      padding-left: 20%;
    }
    @media screen and (max-width: 500px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-height: 100%;
      padding-left: 0%;
    }
  }
  .ordercard {
    height: 248px;
    width: 469px;
    float: left;
    border-radius: 6px;
    background-color: #ffffff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    margin: 7px;
    position: relative;
    @media screen and (max-width: 998px) {
      height: 248px;
      width: 400px;
      //display:none;
    }
    @media screen and (max-width: 768px) {
      height: 256px;
      width: 300px;
      // display:none;;
    }
    @media screen and (max-width: 608px) {
      height: 260px;
      width: 300px;
    }
    @media screen and (max-width: 500px) {
      height: 255px;
      width: 290px;
      padding-left: 0%;
    }
  }
  .order-id {
    color: #313131;
    font-family: 'Open Sans';
    font-weight: 600;
    letter-spacing: -0.34px;
    font-size: 1.375rem;
    line-height: 1.875;
    position: absolute;
    top: 27px;
    left: 30px;
    @media screen and (max-width: 998px) {
      font-size: 1.2rem;
      line-height: 1.7rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      line-height: 1.7rem;
    }
    @media screen and (max-width: 608px) {
      font-size: 1.2rem;
      line-height: 1.7rem;
    }
    @media screen and (max-width: 500px) {
      display: block;
      position: absolute;
      top: 27px;
      left: 30px;
    }
  }
  .kitchen-type {
    height: 23px;
    // width: 165px;
    color: #4c4c4c;
    font-family: 'Open Sans';
    font-size: 1rem;
    letter-spacing: -0.29px;
    line-height: 1.4rem;
    position: absolute;
    top: 67px;
    left: 30px;
    @media screen and (max-width: 998px) {
      font-size: 0.9rem;
      line-height: 1.2rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1.2rem;
    }
    @media screen and (max-width: 608px) {
      font-size: 0.9rem;
      line-height: 1.2rem;
    }
    @media screen and (max-width: 500px) {
      display: block;
      position: absolute;
      top: 67px;
      left: 30px;
    }
  }
  .road {
    height: 36px;
    // width: 200px;
    color: #909090;
    font-family: 'Open Sans';
    font-size: 0.8rem;
    letter-spacing: -0.26px;
    line-height: 1.125rem;
    position: absolute;
    top: 100px;
    left: 30px;
    @media screen and (max-width: 998px) {
      font-size: 0.7rem;
      line-height: 1rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.7rem;
      line-height: 1rem;
    }
    @media screen and (max-width: 608px) {
      font-size: 0.7rem;
      line-height: 1rem;
    }
    @media screen and (max-width: 500px) {
      display: block;
      position: absolute;
      top: 100px;
      left: 30px;
    }
  }
  .itemsAED {
    height: 19px;
    //width: 136px;
    color: #4c4c4c;
    font-family: 'Open Sans';
    font-size: 0.8;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1.188;
    position: absolute;
    top: 129px;
    left: 30px;
    @media screen and (max-width: 998px) {
      font-size: 0.7rem;
      line-height: 1rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.7rem;
      line-height: 1rem;
    }
    @media screen and (max-width: 608px) {
      font-size: 0.7rem;
      line-height: 1rem;
    }
    @media screen and (max-width: 500px) {
      display: block;
      position: absolute;
      top: 134px;
      left: 30px;
    }
  }
  .delivery-status-text {
    height: 19px;
    color: #72b000;
    font-family: 'Open Sans';
    font-size: 0.875;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1.188rem;
    text-align: right;
    position: absolute;
    top: 37px;
    left: 330px;
    @media screen and (max-width: 998px) {
      font-size: 0.7rem;
      line-height: 1rem;
      left: 300px;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.7rem;
      line-height: 1rem;
      top: 15px;
      left: 206px;
    }
    @media screen and (max-width: 608px) {
      font-size: 0.7rem;
      line-height: 1rem;
      top: 15px;
      left: 206px;
    }
    @media screen and (max-width: 500px) {
      display: block;
      position: absolute;
      top: 8px;
      left: 160px;
    }
  }
  .details {
    height: 36px;
    width: 111px;
    box-sizing: border-box;
    border: 1px solid #7b7676;
    border-radius: 18px;
    position: absolute;
    top: 191px;
    left: 197px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 998px) {
      left: 20px;
    }
    @media screen and (max-width: 768px) {
      left: 20px;
    }
    @media screen and (max-width: 608px) {
      left: 20px;
    }
    @media screen and (max-width: 500px) {
      //display: none;
      position: absolute;
      top: 191px;
      left: 25px;
    }
  }
  .detail-text {
    height: 19px;
    width: 79px;
    color: #726e6e;
    color: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.2px;
    line-height: 19px;
    text-align: center;
    text-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
    @media screen and (max-width: 500px) {
      //display: none;
    }
  }
  .status {
    height: 36px;
    width: 111px;
    box-sizing: border-box;
    border: 1px solid #f57c00;
    border-radius: 18px;
    position: absolute;
    top: 191px;
    left: 327px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 998px) {
      left: 207px;
    }
    @media screen and (max-width: 768px) {
      left: 170px;
    }
    @media screen and (max-width: 608px) {
      left: 170px;
    }
    @media screen and (max-width: 500px) {
      //display: none;
      position: absolute;
      top: 191px;
      left: 153px;
    }
  }
  .status-text {
    height: 19px;
    width: 58px;
    background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.2px;
    line-height: 19px;
    text-align: center;
    text-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
    @media screen and (max-width: 500px) {
      //display: none;
    }
  }
`;
