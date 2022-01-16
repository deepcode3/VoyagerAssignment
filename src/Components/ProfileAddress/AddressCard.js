/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import icnCheckActive from '../../Assets/Icons/icn_check.png';
import icnCheckInactive from '../../Assets/Icons/icn_check_inactive.png';

const AddressCard = ({ item, removeItem, index, values, setValues }) => {
  // primary, handleClick
  // const [primary, setPrimary] = useState(null);
  // const handleClick = (active) => {
  //   return primary === active ? setPrimary(null) : setPrimary(active);
  //   // setPrimary((state) => {
  //   //   return state === active ? null : active;
  //   // });
  // };
  const handleClick = (active) => {
    return values === active ? setValues(null) : setValues(active);
  };

  return (
    <Div key={index.toString()}>
      <span className='home'>{`${item.addressLabel}`}</span>
      <div
        className='primary-1'
        role='button'
        onKeyDown={null}
        onClick={() => {
          handleClick(index.toString());
        }}
      >
        <img
          src={values === index.toString() ? icnCheckActive : icnCheckInactive}
          alt='icn'
          style={{ float: 'left' }}
        />
        <span
          className='primary'
          style={{
            color: `${values === index.toString() ? '#6A6A6A' : '#B8B8B8'}`,
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
  setValues: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
};

const Div = styled.div`
     height: 186px;
     width: 469px;
     float: left;
     border-radius: 6px;
     background-color: #ffffff;
     box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    // margin: 7px;
     position:relative;
     flex: 1;
     margin: 1%;
     @media screen and (max-width: 393px) {
      // display:none;
      left:-67px;
      margin: 2%;
      height: 240px;
      width: 247px;
     }
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
      @media screen and (max-width: 393px) {
        //display:none;
        position: absolute;
        top:29px;
        left:26px;
      }
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
      background-color:green;
      @media screen and (max-width: 393px) {
       position: absolute;
       top:21px;
       left:50px;
      }
    }
    .primary-1{
      position: absolute;
      top:21px;
      left:367px;
      @media screen and (max-width: 393px) {
       position: absolute;
       top:21px;
       left:100px;
      }
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
      @media screen and (max-width: 393px) {
        position: absolute;
        top:59px;
        left:11px;
        height: 84px;
        width: 230px;
        background-color:red;
      }
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
      @media screen and (max-width: 393px) {
       // display:none;
       position: absolute;
       top:143px;
       left:43px;
      }
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
      @media screen and (max-width: 393px) {
        display:none;
      }
    }
}`;
