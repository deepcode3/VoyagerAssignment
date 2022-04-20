import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import MercentList from '../Containers/MercentList';
import Brand from '../Containers/Brand';
import Outlet from '../Containers/Outlet';

const Routing = ({ Data, search }) => {
  console.log('data', Data);
  return (
    <Switch>
      <Route exact path='/'>
        <MercentList Data={Data} search={search} />
      </Route>
      <Route exact path='/Brand'>
        <Brand />
      </Route>
      <Route exact path='/Outlet'>
        <Outlet />
      </Route>
    </Switch>
  );
};
export default Routing;

Routing.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.object).isRequired,
  search: PropTypes.string.isRequired,
};
