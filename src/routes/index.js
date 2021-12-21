import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestaurantData from "../components/restaurentsData";
import Payment from "../components/payment/Payment";
import FinalPayment from "../components/finalpay/FinalPayment";
import CartHome from "../components/carthome/CartHome";
import HomeTobeDeleted from "../containers/HomeTobeDeleted";
import Addresscomp from "../components/Address/Address";
import Home from "../containers/home";
import Menu from "../containers/menu";
import OverView from "../components/menuComponent/overview";
import Reviews from "../components/menuComponent/review";
import Gallery from "../components/menuComponent/gallery";
import CartContextProvider from "../context/cartContext";
import Cart from "../components/description/cart";
import ProfileMain from "../containers/Profile/index";
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
				<Route path="/cart">
					<CartContextProvider>
						<Cart />
					</CartContextProvider>
				</Route>
				<Route path="/address">
					<Addresscomp />
				</Route>
				<Route path="/home-header" component={HomeTobeDeleted} />
				<Route path="/payment" component={Payment} />

				<Route path="/finalpay" component={FinalPayment}></Route>
				<Route path="/carthome">
					<CartHome />
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
				<Route path="/profile">
					<ProfileMain />
				</Route>
			</Switch>
		</Router>
	);
};
export default Routing;
