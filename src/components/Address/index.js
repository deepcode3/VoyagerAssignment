import React, { useState } from "react";
import styled from "styled-components";
import icn_check from "../../assets/icons/icn_check.png";
import icn_pin from "../../assets/icons/icn_pin.png";

const Address = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Div>
				<div className="recommendation-1">
					<span className="my-addresses-2">Address</span>
					<span
						className="add-new"
						type="button"
						onClick={() => {
							setOpen(true);
						}}
					>
						+ Add new
					</span>
				</div>
				<div className="recommendation-2">
					<div className="order-1">
						<span className="home">Home</span>
						<div className="primary-1">
							<img src={icn_check} alt="icn" style={{ float: "left" }} />
							<span className="primary">Primary</span>
						</div>
						<span className="address">
							Downtown Burj Khalifa, Sheikh Mohammed bin Rashid Blvd - Dubai -
							United Arab EmiratesDubai, UAE
						</span>
						<span className="edit">Edit</span>
						<span className="delete">Delete</span>
					</div>
					<div className="order-1">
						<span className="home">Home</span>
						<div className="primary-1">
							<img src={icn_check} alt="icn" style={{ float: "left" }} />
							<span className="primary">Primary</span>
						</div>
						<span className="address">
							Downtown Burj Khalifa, Sheikh Mohammed bin Rashid Blvd - Dubai -
							United Arab EmiratesDubai, UAE
						</span>
						<span className="edit">Edit</span>
						<span className="delete">Delete</span>
					</div>
				</div>
				{open && <Modal setOpen={setOpen} />}
			</Div>
		</>
	);
};
export default Address;

function Modal({ setOpen }) {
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
					<h1 className="add-new-address ">Add new address</h1>
				</div>
				<form>
					<div className="mask">
						<img src={icn_pin} alt="location" className="icn_pin" />
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
}

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
	height: 650px;
	width: 530px;
	border-radius: 8px;
	background-color: #ffffff;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
	position: fixed;
	padding: 40px;
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	position: relative;
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
	.mask {
		height: 70px;
		width: 502px;
		border-radius: 10px;
		background-color: #ffffff;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		position: absolute;
		top: 121px;
	}
	.icn_pin {
		padding: 10px;
	}
	.location-1 {
		height: 19px;
		width: 192px;
		color: #4c4c4c;
		font-family: "Open Sans";
		font-size: 14px;
		letter-spacing: -0.24px;
		line-height: 19px;
	}
	input[type="text"] {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		box-sizing: border-box;
		border: none;
		border-bottom: 2px solid #4a4a4a;
		opacity: 0.53;
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
		top: 219px;
	}
	.field-1 {
		height: 67px;
		width: 502px;
		position: absolute;
		top: 310px;
	}
	.field-2 {
		height: 67px;
		width: 502px;
		position: absolute;
		top: 401px;
	}
	.field-3 {
		height: 67px;
		width: 502px;
		position: absolute;
		top: 492px;
	}
	.line {
		box-sizing: border-box;
		height: 2px;
		width: 498px;
		border: 1px solid #4a4a4a;
		opacity: 0.53;
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

const Div = styled.div`
	height: 100vh;
	weidth: 100vw;
	display: flex;
	align-items: center;
 padding-top:75px;
  flex-direction:column;
	background-color: #f1f3fb;
  .recommendation-1 {
		width: 930px;
    display:flex;

	}
	.recommendation-2 {
		width: 960px;
    display:flex;
    flex-direction:row;
	background-color: red;
	}
	.my-addresses-2 {
		height: 22px;
		width: 122px;
		color: #6f6f6f;
		font-family: "Open Sans";
		font-size: 16px;
		letter-spacing: -0.27px;
		line-height: 22px;
	}
	.add-new {
		height: 19px;
		width: 83px;
		color: #fda200;
		font-family: "SF UI Text";
		font-size: 16px;
		font-weight: 500;
		letter-spacing: 0;
		line-height: 19px;
		text-align: right;
    margin-left:720px;
	}
	.order-1 {
		height: 186px;
		width: 469px;
		background-color: #ffffff;
		margin: 14px;
		border-radius: 6px;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    position:relative;
		}
    .home {
      height: 19px;
      width: 39px;
      color: #6A6A6A;
      font-family: "Open Sans";
      font-size: 14px;
      letter-spacing: -0.27px;
      line-height: 19px;
      position: absolute;
    top:29px;
    left:26px;
    }
    .primary-1{
      position: absolute;
      top:21px;
      left:367px;
    }
    .primary {
      height: 19px;
      width: 52px;
      color: #6A6A6A;
      font-family: "Open Sans";
      font-size: 14px;
      font-weight: 600;
      letter-spacing: -0.27px;
      line-height: 19px;  
      padding-left:11px;
    }
    .address{
      height: 84px;
      width: 387px;
      color: #2D2D2D;
      font-family: "Open Sans";
      font-size: 18px;
      letter-spacing: -0.3px;
      line-height: 28px;
      position: absolute;
      top:59px;
      left:26px;
    }
    .edit {
      height: 22px;
      width: 30px;
      color: #F57C00;
      font-family: "Open Sans";
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 22px;
      text-align: center;
      position: absolute;
      top:143px;
      left:343px;
    }
    .delete {
      height: 22px;
      width: 51px;
      color: #F57C00;
      font-family: "Open Sans";
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 22px;
      text-align: center;
      position: absolute;
      top:143px;
      left:400px;
    }
	}
`;
