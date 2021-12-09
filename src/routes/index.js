import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Addresscomp from '../components/address/Address';
import Home from '../containers/home';
const Routing = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/address"></Route>
				<Addresscomp/>
			</Switch>
		</Router>
	);
};
export default Routing;
