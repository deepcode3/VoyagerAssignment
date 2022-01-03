import React, { useState } from 'react';
import Geocode from 'react-geocode';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import searchIcon from '../../../Assets/Icons/searchIcon.png';
import clearButton from '../../../Assets/Icons/dismissButton.png';
import locationImg from '../../../Assets/Icons/location.png';
import gps from '../../../Assets/Icons/gps.png';
import dateTime from '../../../Assets/Icons/dateTime.png';
import './SerachBar.css';

let location;
const SearchBar = ({ searchValue, from }) => {
  const history = useHistory();
  const [searchKey, setSearchKey] = useState(searchValue);
  const [searchClicked, setSearchClicked] = useState(false);
  return (
    <>
      <div className='searchCard'>
        <div className={from === 'home' ? 'searchBox' : 'restaurantSearchBox'}>
          <input
            className={from === 'home' ? 'searchInput' : 'restaurantSearchInput'}
            type='text'
            placeholder='Search your restaurants or cuisines'
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            value={searchKey}
          />
          <img
            className={from === 'home' ? 'searchIcon' : 'restaurantSearchIcon'}
            alt='searchIcon'
            src={searchIcon}
            onClick={() => {
              setSearchClicked(true);
            }}
            onKeyDown={null}
          />
          {searchKey || searchValue ? (
            <img
              alt='clearButton'
              src={clearButton}
              className={from === 'home' ? 'clearButton' : 'restaurantclearButton'}
              onClick={() => {
                setSearchKey('');
              }}
              onKeyDown={null}
            />
          ) : null}
        </div>
      </div>
      {searchKey && searchClicked ? history.push(`/restaurants/${searchKey}/${location}`) : null}
    </>
  );
};
export const LocationSetter = ({ locationValue, from }) => {
  const [myLocation, setMyLocation] = useState(locationValue);
  const findMyLocation = () => {
    navigator.geolocation.watchPosition((pos) => {
      const Longitude = pos.coords.longitude;
      const Latitude = pos.coords.latitude;
      Geocode.setApiKey('AIzaSyB2LQDL0xgHE_xT-TvAlZ-2Xhil3R8btLo');
      Geocode.setLanguage('en');
      Geocode.setLocationType('ROOFTOP');
      Geocode.fromLatLng(Latitude, Longitude).then(
        (response) => {
          const address = response.results[0].formatted_address;
          console.log(address);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  };
  return (
    <div className={from === 'home' ? 'locationSetter' : 'restaurantLocationSetter'}>
      <input
        className={from === 'home' ? 'locationInput' : 'restaurantLocationInput'}
        onChange={(e) => {
          setMyLocation(e.target.value);
        }}
        value={myLocation}
      />
      <div className='assigner'>{(location = myLocation)}</div>
      <img
        src={locationImg}
        className={from === 'home' ? 'location' : 'retsurantLocation'}
        alt='location'
      />
      <img
        src={gps}
        className={from === 'home' ? 'gpsTracker' : 'retsurantGpsTracker'}
        alt='gpstracker'
        onClick={findMyLocation}
        onKeyDown={null}
      />
    </div>
  );
};

export const DateTimeSetter = () => {
  const [date, setDate] = useState('');
  return (
    <div className='dateTime'>
      <div className='dateText'>{date}</div>
      <img
        src={dateTime}
        alt='date'
        onClick={() => {
          setDate(moment(new Date()).format('[Today, ]DD[ ]MMMM[, ]YYYY[ ]'));
        }}
        className='dateButton'
        onKeyDown={null}
      />
    </div>
  );
};
export default SearchBar;
SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
};
LocationSetter.propTypes = {
  locationValue: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
};
