import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RestaurantData from '../components/restaurentsData';
import Addresscomp from '../components/address/Address';
import Home from '../containers/home';
import Menu from '../containers/menu';
import OverView from '../components/menuComponent/overview';
import Reviews from '../components/menuComponent/review';
import Gallery from '../components/menuComponent/gallery';
import CartContextProvider from '../context/cartContext';
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
					<Addresscomp />
				</Route>
				<Route path="/:searchKey/:location/menu/:restaurant/:item">
					<CartContextProvider>
						<Menu />
					</CartContextProvider>
				</Route>
				<Route path="/:searchKey/:location/overview/:restaurant/:item">
					<OverView />
				</Route>
				<Route path="/:searchKey/:location/reviews/:restaurant/:item">
					<Reviews />
				</Route>
				<Route path="/:searchKey/:location/gallery/:restaurant/:item">
					<Gallery />
				</Route>
			</Switch>
		</Router>
	);
};
export default Routing;
