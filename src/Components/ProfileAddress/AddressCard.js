/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import icnCheckActive from '../../Assets/Icons/icn_check.png';
import icnCheckInactive from '../../Assets/Icons/icn_check_inactive.png';

const AddressCard = ({ item, removeItem, index }) => {
  const buttonMap = {
    active: true,
    unactive: false,
  };
  const [primary, setPrimary] = useState(buttonMap.unactive);
  const handleClick = (button) => {
    if (button === index.toString()) {
      setPrimary(buttonMap.active);
    }
  };
  return (
    <Div key={index.toString()}>
      <span className='home'>{`${item.addressLabel}`}</span>
      <div
        className='primary-1'
        onClick={() => {
          return handleClick(buttonMap.active);
        }}
        role='button'
        onKeyDown={null}
      >
        <img
          src={primary === buttonMap.active ? icnCheckActive : icnCheckInactive}
          alt='icn'
          style={{ float: 'left' }}
        />
        <span
          className='primary'
          style={{
            color: `${primary === buttonMap.button2 ? '#6A6A6A' : '#B8B8B8'}`,
          }}
        >
          Primary
        </span>
      </div>
      <span className='address'>{`${item.location}, -${item.city} - ${item.area} - ${item.address}, `}</span>
      <span className='edit'>Edit</span>
      <button
        className='delete'
        type='button'
        onKeyDown={null}
        onClick={() => {
          removeItem(item);
        }}
      >
        Delete
      </button>
    </Div>
  );
};
export default AddressCard;
AddressCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  removeItem: PropTypes.func.isRequired,
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
      padding: 0;
      border: none;
      background: none;
    }
}`;
