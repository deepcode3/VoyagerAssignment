import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RestaurantData from '../components/restaurentsData';
import Payment from '../components/payment/Payment';
import FinalPayment from '../components/finalpay/FinalPayment';
import CartHome from '../components/carthome/CartHome';
import CartAddress from '../components/address/Address';
import Home from '../containers/home';
import Menu from '../containers/menu';
import OverView from '../components/menuComponent/overview';
import Reviews from '../components/menuComponent/review';
import Gallery from '../components/menuComponent/gallery';
import CartContextProvider from '../context/cartContext';
import Cart from '../components/description/cart';
import ProfileMain from '../containers/Profile/index';
import Error from '../containers/Error/index';
import Orderstatus from '../components/orderstatus/Orderstatus';
import About from '../components/footerlinker/About';
import Terms from '../components/footerlinker/Terms';
import PrivacyPolicy from '../components/footerlinker/PrivacyPolicy';
import Contacts from '../components/footerlinker/FooterContact';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/restaurants/:searchKey/:location'>
          <RestaurantData />
        </Route>
        <Route path='/about' component={About} />
        <Route path='/careers' component={Error} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Route path='/terms-&-conditions' component={Terms} />
        <Route path='/mobile-app' component={Error} />
        <Route path='/blog' component={Error} />
        <Route path='/contact' component={Contacts} />
        <Route path='/sitemap' component={Error} />
        <Route exact path='/cart'>
          <CartContextProvider>
            <Cart />
          </CartContextProvider>
        </Route>
        <Route exact path='/address'>
          <CartAddress />
        </Route>
        <Route path='/payment' component={Payment} />
        <Route path='/finalpay' component={FinalPayment} />
        <Route path='/carthome'>
          <CartHome />
        </Route>
        <Route path='/status'>
          <Orderstatus />
        </Route>
        <Route path='/:searchKey/:location/menu/:restaurant/:item'>
          <CartContextProvider>
            <Menu />
          </CartContextProvider>
        </Route>
        <Route path='/:searchKey/:location/overview/:restaurant/:item'>
          <OverView />
        </Route>
        <Route path='/:searchKey/:location/reviews/:restaurant/:item'>
          <Reviews />
        </Route>
        <Route path='/:searchKey/:location/gallery/:restaurant/:item'>
          <Gallery />
        </Route>
        <Route path='/profile'>
          <ProfileMain />
        </Route>
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  );
};
export default Routing;
