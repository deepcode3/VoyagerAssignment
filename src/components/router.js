import React from "react";
import { Switch, Route } from "react-router-dom";
import Order from "./Orders/index";
import Address from "./Address/index";
import PayAmount from "./PayMethods/index";

const Router = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Order} />
				<Route path="/Address" component={Address} />
				<Route path="/Pay" component={PayAmount} />
			</Switch>
		</>
	);
};
export default Router;
