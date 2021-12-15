import React from "react";
import styled from "styled-components";
import icn_save_card_unchecked from "../../assets/icons/icn_save_card_unchecked.png";

const Modal = ({ setOpen }) => {
	return (
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
					<h1 className="add-new-address ">Add New Card</h1>
				</div>
				<div className="enter-cards">
					<span className="enter-credit">Enter Credit/Debit card details</span>
					<form>
						<div className="field">
							<label className="label">Card number</label>

							<input
								type="text"
								value=""
								className="input"
								placeholder="4022 8888 8888 1881"
							/>
						</div>
						<div className="field-1">
							<label className="label">Name on card</label>
							<input type="text" className="input" placeholder="Abdullah" />
						</div>
						<div className="field-2">
							<div className="extra">
								<label className="label-1">Expiary</label>
								<input
									type="text"
									name="month"
									className="input-1"
									placeholder="11"
									maxlength="2"
									size="2"
								/>
								<span className="dash">/</span>
								<input
									type="text"
									name="year"
									className="input-1"
									placeholder="2021"
									maxlength="4"
									size="4"
									style={{ marginLeft: "60px" }}
								/>
								<label className="label-2">Security card</label>
								<input type="text" className="input-2" placeholder="XXX" />
							</div>
						</div>
					</form>
					<span className="add-this-card-to-sav">
						<img
							src={icn_save_card_unchecked}
							alt="checked_icn"
							style={{ paddingRight: "10px" }}
						/>
						Add this card to saved cards
					</span>
				</div>
				<div className="rectangle-copy">
					<span className="save-address" type="button">
						SAVE Card
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
	background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
	height: 552px;
	width: 530px;
	border-radius: 8px;
	background-color: #ffffff;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	position: relative;
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
		position: absolute;
		text-align: center;
		top: 43px;
		left: 183px;
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
		margin: 0 auto;
	}
	.enter-cards {
		height: 359px;
		width: 560px;
		position: relative;
	}
	.enter-credit {
		height: 23px;
		width: 227px;
		color: #000000;
		font-family: "Open Sans";
		font-size: 17px;
		letter-spacing: -0.41px;
		line-height: 23px;
	}

	.input[type="text"] {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		box-sizing: border-box;
		border: none;
		border-bottom: 2px solid #4a4a4a;
		opacity: 0.53;
	}
	.input-image {
		height: 12px;
		width: 40px;
		padding: 41px 0 0 200px;
	}
	.label {
		height: 17px;
		width: 20px;
		color: #858585;
		font-family: "Open Sans";
		font-size: 12px;
		letter-spacing: -0.24px;
		line-height: 17px;
	}
	.field {
		height: 67px;
		width: 502px;
		position: absolute;
		top: 39px;
	}
	.field-1 {
		height: 67px;
		width: 502px;
		position: absolute;
		top: 130px;
	}
	.field-2 {
		height: 67px;
		width: 502px;
		position: absolute;
		top: 221px;
	}
	.extra {
		height: 67px;
		width: 502px;
		position: relative;
	}
	.label-1 {
		height: 17px;
		//width: 20px;
		color: #858585;
		font-family: "Open Sans";
		font-size: 12px;
		letter-spacing: -0.24px;
		line-height: 17px;
		position: absolute;
		top: 0px;
	}
	.label-2 {
		height: 17px;
		//width: 20px;
		color: #858585;
		font-family: "Open Sans";
		font-size: 12px;
		letter-spacing: -0.24px;
		line-height: 17px;
		position: absolute;
		top: 0px;
		left: 160px;
	}
	.input-1[type="text"] {
		width: 8%;
		padding: 12px 0;
		margin: 8px 0;
		box-sizing: border-box;
		border: none;
		border-bottom: 2px solid #4a4a4a;
		opacity: 0.53;
		position: absolute;
		top: 18px;
	}
	.input-2[type="text"] {
		width: 50%;
		padding: 12px 20px;
		margin: 8px 0;
		box-sizing: border-box;
		border: none;
		border-bottom: 2px solid #4a4a4a;
		opacity: 0.53;
		position: absolute;
		top: 18px;
		left: 160px;
	}
	.dash {
		position: absolute;
		top: 35px;
		left: 47px;
	}
	.line {
		box-sizing: border-box;
		height: 2px;
		width: 498px;
		border: 1px solid #4a4a4a;
		opacity: 0.53;
	}
	.add-this-card-to-sav {
		height: 19px;
		width: 210px;
		color: #070707;
		font-family: "Open Sans";
		font-size: 14px;
		font-weight: 600;
		letter-spacing: 0;
		line-height: 19px;
		position: absolute;
		top: 320px;
	}
	.rectangle-copy {
		height: 50px;
		width: 335px;
		border-radius: 4px;
		background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
		box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
		text-align: center;
		position: absolute;
		left: 118px;
		bottom: 50px;
	}
	.save-address {
		height: 19px;
		width: 101px;
		color: #ffffff;
		font-family: "Open Sans";
		font-size: 14px;
		font-weight: bold;
		letter-spacing: 0;
		line-height: 50px;
		text-align: center;
	}
`;
