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
import spoonPoke from '../../Assets/Icons/spoonPoke.png';
import greenRectange from '../../Assets/Icons/greeenRect.png';
import timing from '../../Assets/Icons/time_icon.png';
import greenStar from '../../Assets/Icons/ratingStar.png';
import yellowStar from '../../Assets/Icons/yellowStar.png';
import redStar from '../../Assets/Icons/redStar.png';
import './MenuSemiCompo.css';

// eslint-disable-next-line object-curly-newline
const MenuHalfCompo = ({ searchKey, location, restaurant, item, from }) => {
  const history = useHistory();
  const [navSelected, setNavSelected] = useState(from);
  return (
    <>
      <div className='menuHeader'>
        <Header />
      </div>
      <img src={menuSemiBg} alt='semiBg' className='semiBg' />
      <div className='menuSearchSeperator'>
        <div className='menuSearchBar'>
          <span className='menuSearchInfo'>Delivery ASAP</span>
          <div className='menuSearchInput'>
            <SearchBar searchValue={searchKey} from='menu' />
          </div>
          <div className='restaurantLocation' from='menu'>
            <LocationSetter locationValue={location} from='menu' />
          </div>
          <img className='menuDateAndTimeButton' alt='schedule-button' src={dateTime} />
        </div>
      </div>
      <div className='menuLocators'>
        <div className='menuLocatorsInfo'>
          Home UAE Explore Great Breakfasts
          {restaurant}
        </div>
      </div>

      <img src={halfBg} alt='' className='menuHalfBgImage' />
      <div className='semiBgComponentSeperator'>
        <img src={menuKebab} alt='' className='menuKebabImage' />
        <img src={spoonPoke} className='spoonPoke' alt='' />
        <div className='restaurantDetails'>
          <span className='menuRestaurantName'>{restaurant}</span>
          <br />
          <span className='menuItemName'>{item}</span>
          <div className='menuRatingDetails'>
            <img src={greenRectange} className='greenRect' alt='' />
            <span className='menuRestaurantRating'>4.3</span>
            <div className='menuRestDetails'>
              <span className='menuDot' />
              <span className='menuTimming'>63 mins</span>
              <span className='menuDot1' />
              <span className='menuMinOrder'>AED30 min order</span>
              <img src={timing} className='timming' alt='' />
              <span className='timmingaText'>11:00 AM - 10:00 PM</span>
            </div>
          </div>
          <span className='deliveryRatings'>Delivery rating for last 5 orders</span>
          <div className='menuLine' />
          <div className='menuRatingStars'>
            <div className='menuStarBox1'>
              <img src={greenStar} className='menuStar' alt='' />
              <div className='menuRating1'>4</div>
            </div>
            <div className='menuStarBox2'>
              <img src={greenStar} className='menuStar' alt='' />
              <div className='menuRating1'>4</div>
            </div>
            <div className='menuStarBox3'>
              <img src={yellowStar} className='menuStar' alt='' />
              <div className='menuRating2'>3</div>
            </div>
            <div className='menuStarBox4'>
              <img src={greenStar} className='menuStar' alt='' />
              <div className='menuRating1'>4</div>
            </div>
            <div className='menuStarBox5'>
              <img src={redStar} className='menuStar' alt='' />
              <div className='menuRating3'>2</div>
            </div>
          </div>
        </div>
        <div className='menuKebab' />
        <img src='' className='menuButton' alt='' />
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
