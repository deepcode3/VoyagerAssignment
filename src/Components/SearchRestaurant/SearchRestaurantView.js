import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import SearchBar, { LocationSetter } from '../HomeComponents/SearchBar';
import '../../Containers/Restaurants/index';
import menuSemiBg from '../../Assets/Images/menuSemiBg.png';
import dateTime from '../../Assets/Icons/dateTime.png';
import './SearchRestaurantView.css';

const SearchRestaurantView = ({ data, searchKey, location }) => {
  return (
    <div className='outContainer'>
      <div className='headerDivSearchRest'>
        <Header />
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
            <LocationSetter locationValue={location} from='restaurant' />
          </div>
        </div>
        <img className='crestaurantDateTimeButton' alt='schedule-button' src={dateTime} />
      </div>
      <div className='crestaurantLocators'>
        <div className='crestaurantLocatorInfo'>Home UAE Explore Great breakfasts My Cart</div>
      </div>
    </div>
  );
};

export default SearchRestaurantView;
SearchRestaurantView.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  searchKey: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
