import React from 'react';
import PropTypes from 'prop-types';
import SearchBar, { LocationSetter } from '../homeComponents/searchbar/index';
import Logo from '../logo/index';
import '../../containers/restaurants/index';
import menuSemiBg from '../../assets/images/menuSemiBg.png';
import dateTime from '../../assets/icons/dateTime.png';
import './CommonHeader.css';

const CommonHeader = ({ data, searchKey, location }) => {
  return (
    <>
      <div className='cheader'>
        <Logo />
      </div>
      <img src={menuSemiBg} alt='semiBg' className='csemiBg' />

      <div className='restaurantSearchBar'>
        <span className='crestaurantsInfo'>Delivery ASAP</span>
        {console.log(data)}
        <div className='csearch'>
          <div className='restaurantSearch'>
            <SearchBar searchValue={searchKey} from='restaurant' />
          </div>
        </div>
        <div className='clsetter'>
          <div className='restaurantLocation' from='restaurant'>
            <LocationSetter locationValue={location} />
          </div>
        </div>
        <img className='crestaurantDateTimeButton' alt='schedule-button' src={dateTime} />
      </div>
      <div className='crestaurantLocators'>
        <div className='crestaurantLocatorInfo'>Home UAE Explore Great breakfasts My Cart</div>
      </div>
    </>
  );
};

export default CommonHeader;
CommonHeader.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  searchKey: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
