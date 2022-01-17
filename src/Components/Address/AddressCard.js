import React from 'react';
import PropTypes from 'prop-types';
import icnCheckActive from '../../Assets/Icons/icn_check.png';
// import icnCheckInactive from '../../Assets/Icons/icn_check_inactive.png';
import './Address.css';

const AddressCard = ({ item, removeItem, index }) => {
  return (
    <div key={index.toString()} className='address_card'>
      <span className='home'>{`${item.addressLabel}`}</span>
      <div className='check_address'>
        <img src={icnCheckActive} alt='icn' style={{ float: 'left' }} className='addresscardcheckicn' />
      </div>
      <span className='addressline'>{`${item.location}, -${item.city} - ${item.area} - ${item.address}, `}</span>
      <div className='editbtn'>Edit</div>
      <button
        className='deletebtn'
        type='button'
        onKeyDown={null}
        onClick={() => {
          removeItem(item);
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
  removeItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
