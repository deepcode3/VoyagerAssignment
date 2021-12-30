import React from 'react';
import './PageHeader.css';
import menuSemiBg from '../../assets/images/menuSemiBg.png';
import appbutton from '../../assets/images/ButtonApp Store.png';
import playbutton from '../../assets/images/ButtonPlay Store.png';

const PageHeader = () => {
  return (
    <div className='pageheader'>
      <img src={menuSemiBg} alt='semiBg' className='fsemiBg' />
      <p className='semibgcontent'>
        Food is for Eating & Good food is to be enjoyed.
        Download the App today!
      </p>
      <img src={appbutton} alt='appbtn' className='appstore' />
      <img src={playbutton} alt='playbtn' className='playstore' />
    </div>
  );
};

export default PageHeader;
