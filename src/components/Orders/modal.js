import React from "react";
import styled from "styled-components";
import dismiss_button from "../../assets/icons/dismiss button.png";

const Modal = ({ setOpen, open }) => {
	console.log("open state in modal:", open);
	return (
		<ModalBack>
			<ModalContainer>
				<img
					src={dismiss_button}
					alt="dismiss"
					onClick={() => {
						setOpen(false);
					}}
					className="dismiss-button"
				/>
				<div className="navbar">
					<h1 className="  order-details ">Order Details</h1>
				</div>
				<form>
					<div className="mask">
						<input
							type=""
							id=""
							name=""
							className="location-1"
							placeholder="Downtown Burj Khalifa, Dubai."
						/>
					</div>
					<div className="field">
						<label for="fname" className="label">
							City
						</label>
						<input type="text" value="Dubai" className="input" />
					</div>
					<div className="field-1">
						<label for="fname" className="label">
							Area
						</label>
						<input type="text" className="input" />
					</div>
					<div className="field-2">
						<label for="fname" className="label">
							Address
						</label>
						<input type="text" className="input" />
					</div>
					<div className="field-3">
						<label for="fname" className="label">
							Address label
						</label>
						<input type="text" className="input" />
					</div>
				</form>
				<div className="rectangle-copy">
					<span className="save-address" type="button">
						SAVE ADDRESS
					</span>
				</div>
			</ModalContainer>
		</ModalBack>
	);
};
export default Modal;

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
	overflow: hidden;
	background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
	height: 1211px;
	width: 501px;
	border-radius: 8px;
	background-color: #ffffff;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
	display: flex;
	padding: 40px;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	position: fixed;
	top: 10%;

	max-height: calc(100vh);
	overflow-y: auto;

	background-color: green;
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
		position: absolute;
		text-align: center;
		top: 43px;
		left: 183px;
	}
	. order-details {
		height: 33px;
		width: 193px;
		color: #4c4c4c;
		font-family: "Open Sans";
		font-size: 24px;
		font-weight: 600;
		letter-spacing: -0.34px;
		line-height: 33px;
		margin: 0 auto;
	}
`;
