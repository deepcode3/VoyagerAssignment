/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import icnCheckActive from '../../Assets/Icons/icn_check.png';
import icnCheckInactive from '../../Assets/Icons/icn_check_inactive.png';
import { findIndex } from '../../Utils';
import { removeAddress } from '../../Actions/AddressActions';

const AddressCard = ({ item, index, values, setValues }) => {
  const indx = findIndex();
  const dispatch = useDispatch();
  const handleClick = (active) => {
    return values === active ? setValues(null) : setValues(active);
  };

  return (
    <CardDiv key={index.toString()}>
      <Home className='home'>{`${item.addressLabel}`}</Home>
      <PrimaryDiv
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
          style={{
            color: `${values === index.toString() ? '#6A6A6A' : '#B8B8B8'}`,
          }}
        >
          Primary
        </Primary>
      </PrimaryDiv>
      <Address>{`${item.location}, -${item.city} - ${item.area} - ${item.address}, `}</Address>
      <Edit className='edit'>Edit</Edit>
      <Delete
        className='delete'
        type='button'
        onKeyDown={null}
        onClick={() => {
          dispatch(removeAddress(item, indx));
        }}
      >
        Delete
      </Delete>
    </CardDiv>
  );
};
export default AddressCard;
AddressCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
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
  // margin: 7px;
  position: relative;
  flex: 1;
  margin: 1%;
  @media screen and (max-width: 500px) {
    position: relative;
    left: -67px;
    margin: 2%;
    height: 240px;
    width: 302px;
  }
`;
const Home = styled.span`
  height: 19px;
  width: 39px;
  color: #6a6a6a;
  font-family: 'Open Sans';
  font-size: 14px;
  letter-spacing: -0.27px;
  line-height: 19px;
  position: absolute;
  top: 29px;
  left: 26px;
  @media screen and (max-width: 500px) {
    //display:none;
    position: absolute;
    top: 29px;
    left: 26px;
  }
`;
const PrimaryDiv = styled.div`
  // height: 19px;
  // width: 52px;
  // padding-left: 11px;
  position: absolute;
  top: 21px;
  left: 367px;
  @media screen and (max-width: 500px) {
    position: absolute;
    width: 22px;
    top: 10px;
    left: 160px;
    padding-left: 0px;
  }
`;

const Primary = styled.span`
  // position: absolute;
  // top: 21px;
  //left: 367px;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.27px;
  line-height: 19px;

  height: 19px;
  width: 52px;
  padding-left: 11px;
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 1px;
    left: 27px;
  }
`;
const Address = styled.span`
  height: 84px;
  width: 387px;
  color: #2d2d2d;
  font-family: 'Open Sans';
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 28px;
  position: absolute;
  top: 59px;
  left: 26px;
  @media screen and (max-width: 500px) {
    height: 130px;
    width: 220px;
    position: absolute;
    top: 59px;
    left: 11px;
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
    left: 26px;
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
