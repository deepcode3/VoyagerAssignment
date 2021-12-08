import React from "react";
import styled from "styled-components";

const Model = (props) => {
return(
    <ModalBack>
    <ModalContainer>
        <span
            onClick={() => {
                setOpen(false);
            }}
            className="dismiss-button"
        >
            X
        </span>
        <div className="navbar">
            <h1 className="add-new-address ">Add new address</h1>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </ModalContainer>
</ModalBack>
)
}
export default Model


const ModalBack = styled.div`
	position: fixed;
	align-items: center;
	justify-content: center;
	z-index: auto;
	display: ${({ open }) => (open ? "block" : "flex")};
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 650px;
	width: 530px;
	border-radius: 8px;
	background-color: #ffffff;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
	position: fixed;
	padding: 40px;
	.dismiss-button {
		height: 12px;
		width: 12px;
		position: absolute;
		right: 13px;
		top: 13px;
	}
	.navbar {
		height: 33px;
		width: 193px;
	}
	.add-new-address {
		height: 33px;
		width: 193px;
		color: #4c4c4c;
		font-family: "Open Sans";
		font-size: 24px;
		font-weight: 600;
		letter-spacing: -0.34px;
		line-height: 33px;
	}
	.body {
	}
`;
