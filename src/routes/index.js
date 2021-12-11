import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Addresscomp from '../components/address/Address'
import Payment from '../components/payment/Payment';
import ContextCart from '../components/description/ContextCart';
import FinalPayment from '../components/finalpay/FinalPayment';
import Home from '../containers/home';
const Routing = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				
				<Route path="/address">
				<Addresscomp/>
				</Route>
				<Route  path="/payment" component={Payment}/>
				<Route path="/contextcart">
					<ContextCart/>
				</Route>
				<Route path="/finalpay" component={FinalPayment}>
					
				</Route>
					
				
				
			</Switch>
		</Router>
	);
};
export default Routing;
