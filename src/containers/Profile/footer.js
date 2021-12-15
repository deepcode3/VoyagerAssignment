import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<Foot>
			<h1 className="headder">LOREM</h1>
			Footer
		</Foot>
	);
};
export default Footer;

const Foot = styled.div`
	height: 227px;
	//width: 2023px;
	width: 100vw;
	position: absolute;
	background-color: #ffffff;
	.headder {
		height: 43px;
		width: 72.97px;
		color: #0275d8;
		font-family: "Bebas Neue";
		font-size: 35px;
		letter-spacing: 0;
		line-height: 43px;
		text-align: center;
	}
`;
