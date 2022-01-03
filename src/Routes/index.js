import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RestaurantData from '../Components/RestaurentsData';
import Payment from '../Components/payment/Payment';
import FinalPayment from '../Components/finalpay/FinalPayment';
import CartHome from '../Components/carthome/CartHome';
import CartAddress from '../Components/address/Address';
import Home from '../Containers/Home';
import Menu from '../Containers/Menu';
import OverView from '../Components/MenuComponent/Overview';
import Reviews from '../Components/MenuComponent/Review';
import Gallery from '../Components/MenuComponent/Gallery';
import CartContextProvider from '../Context/CartContext';
import ReviewContext from '../Context/ReviewContext';
import Cart from '../Components/description/cart';
import ProfileMain from '../Containers/Profile/index';
import Error from '../Containers/Error/index';
import Orderstatus from '../Components/orderstatus/Orderstatus';
import About from '../Components/footerlinker/About';
import Terms from '../Components/footerlinker/Terms';
import PrivacyPolicy from '../Components/footerlinker/PrivacyPolicy';
import Contacts from '../Components/footerlinker/FooterContact';
import UserContextProvider from '../Context/UserContext';
import AccountsContextProvider from '../Context/AccountsContext';

const Routing = () => {
  return (
    <Router>
      <UserContextProvider>
        <AccountsContextProvider>
          <CartContextProvider>
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
                <ReviewContext>
                  <Reviews />
                </ReviewContext>
              </Route>
              <Route path='/:searchKey/:location/gallery/:restaurant/:item'>
                <Gallery />
              </Route>
              <Route path='/profile'>
                <ProfileMain />
              </Route>
              <Route path='*' component={Error} />
            </Switch>
          </CartContextProvider>
        </AccountsContextProvider>
      </UserContextProvider>
    </Router>
  );
};
export default Routing;
