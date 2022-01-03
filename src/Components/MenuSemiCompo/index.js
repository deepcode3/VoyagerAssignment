/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
import SearchBar, { LocationSetter } from '../HomeComponents/SearchBar';
import menuSemiBg from '../../Assets/Images/menuSemiBg.png';
import dateTime from '../../Assets/Icons/dateTime.png';
import halfBg from '../../Assets/Images/halfBg.jpg';
import menuKebab from '../../Assets/Images/menuKebab.png';
import './MenuSemiCompo.css';

// eslint-disable-next-line object-curly-newline
const MenuHalfCompo = ({ searchKey, location, restaurant, item, from }) => {
  const history = useHistory();
  const [navSelected, setNavSelected] = useState(from);
  return (
    <>
      <div className='header'>
        <Header />
      </div>
      <img src={menuSemiBg} alt='semiBg' className='semiBg' />
      <div className='body'>
        <div className='restaurantSearchBar'>
          <span className='restaurantsInfo'>Delivery ASAP</span>
          <div className='restaurantSearch'>
            <SearchBar searchValue={searchKey} from='menu' />
          </div>
          <div className='restaurantLocation' from='menu'>
            <LocationSetter locationValue={location} />
          </div>
          <img className='restaurantDateTimeButton' alt='schedule-button' src={dateTime} />
        </div>
        <div className='restaurantLocators'>
          <div className='restaurantLocatorInfo'>
            Home UAE Explore Great Breakfasts
            {restaurant}
          </div>
        </div>
        <img src={halfBg} alt='' className='menuHalfBgImage' />
        <img src={menuKebab} alt='' className='menuKebabImage' />
        <div className='menuKebab' />
        <div className='navBar'>
          <div
            className={navSelected === 'menu' ? 'menu' : 'notMenu'}
            onClick={() => {
              setNavSelected('menu');
              history.push(`/${searchKey}/${location}/menu/${restaurant}/${item}`);
            }}
            role='button'
            onKeyDown={null}
          >
            MENU
          </div>
          <div
            className={navSelected === 'overview' ? 'overview' : 'notOverview'}
            onClick={() => {
              setNavSelected('overview');
              history.push(`/${searchKey}/${location}/overview/${restaurant}/${item}`);
            }}
            role='button'
            onKeyDown={null}
          >
            OVERVIEW
          </div>
          <div
            className={navSelected === 'reviews' ? 'reviews' : 'notReview'}
            onClick={() => {
              setNavSelected('reviews');
              history.push(`/${searchKey}/${location}/reviews/${restaurant}/${item}`);
            }}
            role='button'
            onKeyDown={null}
          >
            REVIEW & RATINGS
          </div>
          <div
            className={navSelected === 'gallery' ? 'gallery' : 'notGallery'}
            onClick={() => {
              setNavSelected('gallery');
              history.push(`/${searchKey}/${location}/gallery/${restaurant}/${item}/`);
            }}
            role='button'
            onKeyDown={null}
          >
            GALLERY
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuHalfCompo;
MenuHalfCompo.propTypes = {
  searchKey: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  restaurant: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
};
