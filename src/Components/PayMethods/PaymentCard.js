/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import visaicon from '../../Assets/Icons/visaicon.png';
import icnCheckActive from '../../Assets/Icons/icn_check.png';
import icnCheckInactive from '../../Assets/Icons/icn_check_inactive.png';
import { removeCard } from '../../Actions/CardActions';
import { findIndex } from '../../Utils';

const PaymentCard = ({ item, index }) => {
  const indx = findIndex();
  const dispatch = useDispatch();
  const buttonMap = {
    button1: 'button1',
    button2: 'button2',
  };
  const [primary, setPrimary] = useState(buttonMap);
  const handleClick = (button) => {
    if (button === index.toString()) {
      setPrimary(buttonMap);
    }
  };
  return (
    <Div key={index.toString()}>
      <img
        src={index.toString() % 2 === 0 ? item.cardIcon.visa : item.cardIcon.masterCard}
        alt={index.toString()}
        className='bitmap'
      />
      <span className='account'>{`${item.cardNumber}`}</span>
      <span className='card'>{`${item.cardName}`}</span>
      <span className='card' style={{ left: '280px' }}>
        {` Expiary:${item.expiaryDate}/${item.expiaryYear}`}
      </span>
      <span className='card' style={{ top: '110px', fontSize: '18px' }}>
        {`cvv:${item.securityNumber}`}
      </span>
      <div
        className='primary-1'
        onClick={() => {
          return handleClick(buttonMap.button1);
        }}
        onKeyDown={null}
        role='button'
      >
        <img
          src={primary === buttonMap.button1 ? icnCheckActive : icnCheckInactive}
          alt='icn'
          style={{ float: 'left' }}
        />
        <span
          className='primary'
          style={{
            color: `${primary === buttonMap.button1 ? '#6A6A6A' : '#B8B8B8'}`,
          }}
        >
          Primary
        </span>
      </div>

      <span className='edit'>Edit</span>
      <button
        className='delete'
        type='button'
        onKeyDown={null}
        onClick={() => {
          dispatch(removeCard(item, indx));
        }}
      >
        Delete
      </button>
    </Div>
  );
};
export default PaymentCard;
PaymentCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,

  index: PropTypes.number.isRequired,
};

const Div = styled.div`
height: 186px;
width: 469px;
float: left;
border-radius: 6px;
background-color: #ffffff;
box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
margin: 7px;
position:relative;
flex: 1;
    }
  .bitmap {
    height: 24.65px;
    width: 76.64px;
    position:absolute;
    top:50px;
    left:24px;
  }
  .account {
    height: 28px;
    width: 200px;
    color: #2D2D2D;
    font-family: "Open Sans";
    font-size: 18px;
    letter-spacing: -0.3px;
    line-height: 28px;
    position:absolute;
    top:42px;
    left:131px;
  }
  .card {
    height: 19px;
    width: 150px;
    color: #6A6A6A;
    font-family: "Open Sans";
    font-size: 14px;
    letter-spacing: -0.27px;
    line-height: 19px;
    position:absolute;
    top:74px;
    left:130px;
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
    padding: 0;
    border: none;
    background: none;
  }
  `;
