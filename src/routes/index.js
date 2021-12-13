import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RestaurantData from '../components/restaurentsData';
import Home from '../containers/home';
import Addresscomp from '../components/address/Address';
import Payment from '../components/payment/Payment';
import ContextCart from '../components/description/ContextCart'
import FinalPayment from '../components/finalpay/FinalPayment'
import Description from '../components/description/Description';
import CartHome from '../components/carthome/CartHome';

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


				<Route path="/address">
				<Addresscomp/>
				</Route>
				<Route  path="/payment" component={Payment}/>
				<Route path="/description">
					<Description/>
				</Route>
				<Route path="/finalpay" component={FinalPayment}>
					
				</Route>
				<Route path="/carthome">
					<CartHome/>
				</Route>
			</Switch>
		</Router>
	);
};
export default Routing;
