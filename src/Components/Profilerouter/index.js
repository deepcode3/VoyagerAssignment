import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Order from '../Orders/index';
import Address from '../ProfileAddress/index';
import PayAmount from '../PayMethods/index';

const Profileroute = () => {
  return (
    <Switch>
      <Route exact path='/profile' component={Order} />
      <Route exact path='/profile/profile-address' component={Address} />
      <Route path='/profile/profile-Pay' component={PayAmount} />
    </Switch>
  );
};
export default Profileroute;
