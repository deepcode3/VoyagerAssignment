import styled from "styled-components";
import React, { useState } from "react";
import Footer from "./footer";
import NavBar from "./Navbar";
import Profile from "./Profile";
import Profileroute from "../../components/Profilerouter/index";
import EditModal from "../../components/Editmodel/index";

const ProfileMain = () => {
	const [open, setOpen] = useState(false);
	return (
		<Div>
			<NavBar />
			<Profile open={open} setOpen={setOpen} />
			{open && <EditModal setOpen={setOpen} />}
			<Footer />
		</Div>
	);
};
export default ProfileMain;

const Div = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
`;
