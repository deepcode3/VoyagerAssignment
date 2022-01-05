import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RestaurantData from '../Components/RestaurentsData';
import Payment from '../Components/Payment/Payment';
import FinalPayment from '../Components/Finalpay/FinalPayment';
import CartHome from '../Components/CartHome/CartHome';
import CartAddress from '../Components/Address/Address';
import Home from '../Containers/Home';
import Menu from '../Containers/Menu';
import OverView from '../Components/MenuComponent/Overview';
import Reviews from '../Components/MenuComponent/Review';
import Gallery from '../Components/MenuComponent/Gallery';
import CartContextProvider from '../Context/CartContext';
import ReviewContext from '../Context/ReviewContext';
import Cart from '../Components/ItemDescription/CartOrders';
import ProfileMain from '../Containers/Profile/index';
import Error from '../Containers/Error/index';
import Orderstatus from '../Components/OrderStatus/Orderstatus';
import About from '../Components/FooterLinker/About';
import Terms from '../Components/FooterLinker/Terms';
import PrivacyPolicy from '../Components/FooterLinker/PrivacyPolicy';
import Contacts from '../Components/FooterLinker/FooterContact';
import UserContextProvider from '../Context/UserContext';
import AccountsContextProvider from '../Context/AccountsContext';
import AddressContextProvider from '../Context/ProfileContext';

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
                <AddressContextProvider>
                  <CartAddress />
                </AddressContextProvider>
              </Route>
              <Route path='/payment' component={Payment} />
              <Route path='/finalpay' component={FinalPayment} />
              <Route path='/cart-home'>
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
                <AddressContextProvider>
                  <ProfileMain />
                </AddressContextProvider>
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
