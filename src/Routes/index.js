/* eslint-disable react/jsx-wrap-multilines */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import RestaurantData from '../Components/RestaurentsData';
import Payment from '../Components/Payment/Payment';
import FinalPayment from '../Components/Finalpay/FinalPayment';
import CartHome from '../Components/CartHome/CartHome';
import CartAddress from '../Components/Address/Address';
import Home from '../Containers/Home';

const Cart = lazy(() => {
  return import('../Components/ItemDescription/CartOrders');
});
const ProfileMain = lazy(() => {
  return import('../Containers/Profile/index');
});
const Error = lazy(() => {
  return import('../Containers/Error/index');
});
const Orderstatus = lazy(() => {
  return import('../Components/OrderStatus/Orderstatus');
});
const About = lazy(() => {
  return import('../Components/FooterLinker/About');
});
const Terms = lazy(() => {
  return import('../Components/FooterLinker/Terms');
});
const PrivacyPolicy = lazy(() => {
  return import('../Components/FooterLinker/PrivacyPolicy');
});
const Contacts = lazy(() => {
  return import('../Components/FooterLinker/FooterContact');
});
const CartLayout = lazy(() => {
  return import('../Containers/CartLayouts/CartLayout');
});
const Menu = lazy(() => {
  return import('../Containers/Menu');
});
const OverView = lazy(() => {
  return import('../Components/MenuComponent/Overview');
});
const Reviews = lazy(() => {
  return import('../Components/MenuComponent/Review');
});
const Gallery = lazy(() => {
  return import('../Components/MenuComponent/Gallery');
});
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
        <Suspense
          fallback={
            <div className='loader'>
              <CircularProgress color='secondary' />
            </div>
          }
        >
          <Route path='/about' component={About} />
          <Route path='/privacy-policy' component={PrivacyPolicy} />
          <Route path='/terms-&-conditions' component={Terms} />
          <Route path='/contact' component={Contacts} />
          <Route path='/careers' component={Error} />
          <Route path='/mobile-app' component={Error} />
          <Route path='/blog' component={Error} />
          <Route path='/sitemap' component={Error} />
          <Route exact path='/cart'>
            <CartLayout Component={Cart} />
          </Route>
          <Route exact path='/address'>
            <CartLayout Component={CartAddress} />
          </Route>
          <Route path='/payment'>
            <CartLayout Component={Payment} />
          </Route>
          <Route path='/finalpay'>
            <CartLayout Component={FinalPayment} />
          </Route>
          <Route path='/cart-home'>
            <CartLayout Component={CartHome} />
          </Route>
          <Route path='/status'>
            <Orderstatus />
          </Route>
          <Route path='/:searchKey/:location/menu/:restaurant/:item'>
            <Menu />
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
          <Route path='/cart-layout'>
            <CartLayout />
          </Route>
        </Suspense>
      </Switch>
    </Router>
  );
};
export default Routing;
