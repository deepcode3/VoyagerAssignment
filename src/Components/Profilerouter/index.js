import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Order from '../Orders/index';
import Address from '../ProfileAddress/index';
import PayAmount from '../PayMethods/index';
import Review from '../ProfileReview/index';
import Gallary from '../ProfileGallary/index';

const Profileroute = () => {
  return (
    <Switch>
      <Route exact path='/profile' component={Order} />
      <Route exact path='/profile/profile-address' component={Address} />
      <Route path='/profile/profile-Pay' component={PayAmount} />
      <Route path='/profile/profile-Review' component={Review} />
      <Route path='/profile/profile-Gallary' component={Gallary} />
    </Switch>
  );
};
export default Profileroute;
