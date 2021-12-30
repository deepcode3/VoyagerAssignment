import React from 'react';
import './About.css';
import aboutbanner from '../../assets/images/about_banner.png';
import shopimg from '../../assets/images/shop.png';
import shopline from '../../assets/images/shopline.png';
import burgerimg from '../../assets/images/burger.png';
import burgerline from '../../assets/images/burgerline.png';
import aboutcart from '../../assets/images/aboutcart.png';
import PageHeader from './PageHeader';
import Header from '../Header';
import Footer from '../Footer';

const About = () => {
  return (
    <>
      <Header />
      <PageHeader />
      <div className='aboutbackground'>
        <div className='aboutcontainer'>
          <div className='htextdiv'>
            <img src={aboutbanner} alt='aboutfoodimage' className='aboutfoodimg' />
            <p className='healthytext'>“A healthy outside starts from the inside.”</p>
            <p className='robert'>Robert Urich</p>
          </div>
          <p className='whowearetext'> Who we are </p>
          <div className='wearetext'>
            <p className='fulltext'>
              We are an online ordering service and our aim is to become the best delivery service
              platform for our users by diversifying our services portfolio and providing
              best-in-class customer experience. Our online food ordering portal helps you find
              restaurants in your area, filter by cuisine/ time/ price, browse menus and place
              orders via multiple payment options. Our delivery platform ensures that you receive
              your order in shortest possible time, can track your order and can interact with our
              awesome support folks in case of any query
            </p>
          </div>
          <p className='howweworktext'> How we work </p>
          <img src={shopimg} alt='Shop' className='shopimage' />
          <img src={shopline} alt='Shopline' className='shopline1' />
          <img src={burgerimg} alt='burger' className='burgerimage' />
          <img src={burgerline} alt='burgerline' className='Burgerline' />
          <img src={aboutcart} alt='cart' className='cartabout' />
          <p className='shoptext'> Explore restaurants that deliver to your doorstep. </p>
          <p className='burgertext'> Browse menus and build your order in seconds. </p>
          <p className='aboutcarttext'> Follow the status of your order with real-time alerts. </p>
        </div>
      </div>
      <div className='footerDiv'>
        <Footer />
      </div>
    </>
  );
};

export default About;
