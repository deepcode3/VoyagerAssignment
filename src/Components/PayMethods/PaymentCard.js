/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import icnCheckActive from '../../Assets/Icons/icn_check.png';
import icnCheckInactive from '../../Assets/Icons/icn_check_inactive.png';
import { removeCard } from '../../Actions/CardActions';
import { findIndex } from '../../Utils';
import Visa from '../../Assets/Icons/visa.png';
import Mastercard from '../../Assets/Icons/mastercard.png';

const PaymentCard = ({ item, index, values, setValues }) => {
  const indx = findIndex();
  const dispatch = useDispatch();
  const handleClick = (active) => {
    return values === active ? setValues(null) : setValues(active);
  };
  return (
    <CardDiv key={index.toString()}>
      <Bitmap src={index.toString() % 2 === 0 ? Visa : Mastercard} alt={index.toString()} />
      <Primary1
        onClick={() => {
          handleClick(index.toString());
        }}
        onKeyDown={null}
        role='button'
      >
        <img
          src={values === index.toString() ? icnCheckActive : icnCheckInactive}
          alt='icn'
          style={{ float: 'left' }}
        />
        <Primary
          className='primary'
          style={{
            color: `${values === index.toString() ? '#6A6A6A' : '#B8B8B8'}`,
          }}
        >
          Primary
        </Primary>
      </Primary1>
      <Account>{`${item.cardDigit}`}</Account>
      <Name>{`${item.Name}`}</Name>
      <Date>{` Expiary: ${item.expiaryDate}/${item.expiaryYear}`}</Date>
      <Num>{`cvv:${item.securityNumber}`}</Num>

      <Edit>Edit</Edit>
      <Delete
        className='delete'
        type='button'
        onKeyDown={null}
        onClick={() => {
          dispatch(removeCard(item, indx));
        }}
      >
        Delete
      </Delete>
    </CardDiv>
  );
};
export default PaymentCard;
PaymentCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  setValues: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
};

const CardDiv = styled.div`
  height: 186px;
  width: 469px;
  float: left;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  margin: 1%;
  position: relative;
  flex: 1;
  @media screen and (max-width: 500px) {
    display: block;
    position: relative;
    left: -67px;
    margin: 2%;
    height: 240px;
    width: 300px;
  }
`;
const Bitmap = styled.img`
  height: 24.65px;
  width: 76.64px;
  position: absolute;
  top: 50px;
  left: 24px;
  @media screen and (max-width: 500px) {
    display: block;
    position: absolute;
  }
`;

const Account = styled.span`
  height: 28px;
  width: 200px;
  color: #2d2d2d;
  font-family: 'Open Sans';
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 28px;
  position: absolute;
  top: 42px;
  left: 131px;
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 80px;
    left: -10px;
  }
`;

const Name = styled.span`
  height: 19px;
  width: 150px;
  color: #6a6a6a;
  font-family: 'Open Sans';
  font-size: 14px;
  letter-spacing: -0.27px;
  line-height: 19px;
  position: absolute;
  top: 74px;
  left: 130px;
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 110px;
    left: -24px;
  }
`;
const Date = styled.span`
  height: 19px;
  width: 150px;
  color: #6a6a6a;
  font-family: 'Open Sans';
  font-size: 14px;
  letter-spacing: -0.27px;
  line-height: 19px;
  position: absolute;
  top: 74px;
  left: 280px;
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 140px;
    left: 10px;
  }
`;
const Num = styled.span`
  height: 19px;
  width: 150px;
  color: #6a6a6a;
  font-family: 'Open Sans';
  font-size: 14px;
  letter-spacing: -0.27px;
  line-height: 19px;
  position: absolute;
  fontsize: 18px;
  top: 110px;
  left: 130px;
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 170px;
    left: -20px;
  }
`;

const Primary1 = styled.div`
  position: absolute;
  top: 21px;
  left: 367px;
  @media screen and (max-width: 500px) {
    position: absolute;
    width: 22px;
    top: 10px;
    left: 150px;
    padding-left: 0px;
  }
`;

const Primary = styled.span`
  height: 19px;
  width: 52px;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.27px;
  line-height: 19px;
  padding-left: 11px;
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 1px;
    left: 17px;
  }
`;
const Edit = styled.span`
  height: 22px;
  width: 30px;
  color: #f57c00;
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 22px;
  text-align: center;
  position: absolute;
  top: 143px;
  left: 343px;
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 200px;
    left: 30px;
  }
`;
const Delete = styled.button`
  height: 22px;
  width: 51px;
  color: #f57c00;
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 22px;
  text-align: center;
  position: absolute;
  top: 143px;
  left: 400px;
  padding: 0;
  border: none;
  background: none;
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 200px;
    left: 90px;
  }
`;
