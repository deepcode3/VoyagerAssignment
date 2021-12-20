import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Order from "../Orders/index";
import Address from "../Address/index";
import PayAmount from "../PayMethods/index";

const Profileroute = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/profile/profile-order" component={Order} />
				<Route exact path="/profile/profile-address" component={Address} />
				<Route path="/profile/profile-Pay" component={PayAmount} />
			</Switch>
		</Router>
	);
};
export default Profileroute;
