/* eslint-disable  jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import icnCheckActive from '../../Assets/Icons/icn_check.png';
import icnCheckInActive from '../../Assets/Icons/icn_check_inactive.png';
import './Address.css';
import { findIndex } from '../../Utils';
import { removeAddress } from '../../Actions/AddressActions';

const AddressCard = ({ item, index, selectedAddress, setSelectedAddress }) => {
  const indx = findIndex();
  const dispatch = useDispatch();
   const history = useHistory();
  return (
    <div key={index.toString()} className='address_card'>
      <span className='home'>{`${item.addressLabel}`}</span>
      <button
        type='button'
        className='check_address'
        onKeyDown={null}
        onClick={() => {
          setSelectedAddress(item);
        }}
      >
        <img
          src={
            JSON.stringify(item) === JSON.stringify(selectedAddress)
              ? icnCheckActive
              : icnCheckInActive
          }
          alt='icn'
          style={{ float: 'left' }}
          className='addresscardcheckbtn'
        />
      </button>
      <span className='addressline'>{`${item.location}, -${item.city} - ${item.area} - ${item.address}, `}</span>
      <div className='editbtn' onClick={() => { history.push('/profile/profile-address'); }} onKeyDown={null}>Edit</div>
      <button
        className='deletebtn'
        type='button'
        onKeyDown={null}
        onClick={() => {
          dispatch(removeAddress(item, indx));
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default AddressCard;
AddressCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  setSelectedAddress: PropTypes.func.isRequired,
  selectedAddress: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};
