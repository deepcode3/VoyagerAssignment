import styled from "styled-components";
import React from "react";
import Footer from "./footer";
import NavBar from "./Navbar";
import Profile from "./Profile";
import Router from "../../components/router";

const Main = () => {
	return (
		<Div>
			<NavBar />
			<Profile />
			<Router />
			<Footer />
		</Div>
	);
};
export default Main;

const Div = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: red;
`;
