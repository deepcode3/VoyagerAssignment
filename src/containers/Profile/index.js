import styled from "styled-components";
import React, { useState } from "react";
import Footer from "./footer";
import NavBar from "./Navbar";
import Profile from "./Profile";
import Router from "../../components/router";
import EditModal from "../../components/edit_modal";

const Main = () => {
	const [open, setOpen] = useState(false);
	return (
		<Div>
			<NavBar />
			<Profile open={open} setOpen={setOpen} />
			<div className="edit-part">
				<Router />
				{open && <EditModal setOpen={setOpen} />}
			</div>
			<Footer />
		</Div>
	);
};
export default Main;

const Div = styled.div`
	width: 100vw;
	height: 100vh;
	.edit-part {
		height: 100vh;
		weidth: 100vw;
		background-color: red;
	}
`;
