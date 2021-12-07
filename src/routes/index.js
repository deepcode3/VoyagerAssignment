import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RestaurantData from '../components/restaurentsData';
import Home from '../containers/home';

const Routing = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/restaurants/:searchKey/:location">
					<RestaurantData />
				</Route>
			</Switch>
		</Router>
	);
};
export default Routing;
