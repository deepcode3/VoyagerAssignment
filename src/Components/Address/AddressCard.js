import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import icnCheckActive from '../../Assets/Icons/icn_check.png';
// import icnCheckInactive from '../../Assets/Icons/icn_check_inactive.png';
import './Address.css';
import { findIndex } from '../../Utils';
import { removeAddress } from '../../Actions/AddressActions';

const AddressCard = ({ item, index }) => {
  const indx = findIndex();
  // const currentUser = useSelector((state) => {
  //   return state.currentUser;
  // });
  const dispatch = useDispatch();
  return (
    <div key={index.toString()} className='address_card'>
      <span className='home'>{`${item.addressLabel}`}</span>
      <div className='check_address'>
        <img
          src={icnCheckActive}
          alt='icn'
          style={{ float: 'left' }}
          className='addresscardcheckbtn'
        />
      </div>
      <span className='addressline'>{`${item.location}, -${item.city} - ${item.area} - ${item.address}, `}</span>
      <div className='editbtn'>Edit</div>
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
  index: PropTypes.number.isRequired,
};
