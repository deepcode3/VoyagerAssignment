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
    <div className='cartmaindiv'>
      <div className='cartheaderDivSearchRest'>
        <Header />
      </div>
      <img src={menuSemiBg} alt='semiBg' className='cartsemiBg' />
      <div className='cartbodySeperator'>
        <div className='cartrestaurantSearchBar1'>
          <span className='cartrestaurantsInfo'>Delivery ASAP</span>
          {console.log(data)}
          <div className='cartrestaurantSearch'>
            <SearchBar searchValue={searchKey} from='restaurant' />
          </div>
          <div className='cartrestaurantLocation' from='restaurant'>
            <LocationSetter locationValue={location} from='restaurant' />
          </div>
          <img className='cartrestaurantDateTimeButton' alt='schedule-button' src={dateTime} />
        </div>
      </div>
      <div className='cartbreadcrumbsarea'>
        <p className='cartbreadcrumbs'>Home    UAE    Explore   Great breakfasts    My Cart</p>
        <div className='cartcrumbline' />
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
