import React from 'react';
import SearchBar, {
  DateTimeSetter,
  LocationSetter,
} from '../../Components/HomeComponents/SearchBar';
import mouse from '../../Assets/Icons/mouse.png';
import './Home.css';
import Header from '../../Components/Header';

const Home = () => {
  return (
    <div className='homeBg'>
      <Header isHome />
      <div className='homeInfo'>
        <span className='homeInfo1'>Order your food</span>
        <br />
        <span className='homeInfo2'>from the best restaurants</span>
      </div>
      <div className='homeSearchBar'>
        <div className='homeSearch'>
          <SearchBar searchValue='' from='home' />
        </div>
        <div className='homeLocation'>
          <LocationSetter locationValue='' from='home' />
        </div>
        <div className='homeDate'>
          <DateTimeSetter />
        </div>
      </div>

      <div className='scroller'>
        <img src={mouse} alt='mouse' className='ScrollImage' />
        <div className='scrollInfo'>Scroll</div>
      </div>
    </div>
  );
};
export default Home;
