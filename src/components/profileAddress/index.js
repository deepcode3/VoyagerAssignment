import React, { useState } from "react";
import styled from "styled-components";
import icn_check_active from "../../assets/icons/icn_check.png";
import icn_check_inactive from "../../assets/icons/icn_check_inactive.png";
import Modal from "./modal";
//import { Data } from "../Profiledata";

const Address = () => {
	const [open, setOpen] = useState(false);
	const buttonMap = {
		button1: "button1",
		button2: "button2",
	};
	const [primary, setPrimary] = useState();
	const handleClick = (button) => {
		setPrimary(button);
	};

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
						<div className="order-2">
							<span className="home">Home</span>
							<span className="address">
								Downtown Burj Khalifa, Sheikh Mohammed bin Rashid Blvd - Dubai -
								United Arab EmiratesDubai, UAE
							</span>
							<div
								className="primary-1"
								onClick={() => handleClick(buttonMap.button1)}
							>
								<img
									src={
										primary === buttonMap.button1
											? icn_check_active
											: icn_check_inactive
									}
									alt="icn"
									style={{ float: "left" }}
								/>
								<span
									className="primary"
									style={{
										color: `${
											primary === buttonMap.button1 ? "#6A6A6A" : "#B8B8B8"
										}`,
									}}
								>
									Primary
								</span>
							</div>
							<span className="edit">Edit</span>
							<span className="delete">Delete</span>
						</div>
						<div className="order-2">
							<span className="home">Office</span>
							<div
								className="primary-1"
								onClick={() => handleClick(buttonMap.button2)}
							>
								<img
									src={
										primary === buttonMap.button2
											? icn_check_active
											: icn_check_inactive
									}
									alt="icn"
									style={{ float: "left" }}
								/>
								<span
									className="primary"
									style={{
										color: `${
											primary === buttonMap.button2 ? "#6A6A6A" : "#B8B8B8"
										}`,
									}}
								>
									Primary
								</span>
							</div>
							<span className="address">
								Downtown Burj Khalifa,- Dubai - United Arab EmiratesDubai, UAE
							</span>
							<span className="edit">Edit</span>
							<span className="delete">Delete</span>
						</div>
						{/* {Data.map((data, key) => (
							<div key={key} className="order-2">
								<span className="home">Home</span>
								<div className="primary-1" onClick={handlePrimary}>
									<img
										src={primary ? icn_check_active : icn_check_inactive}
										alt="icn"
										style={{ float: "left" }}
									/>
									<span
										className="primary"
										style={{ color: `${primary ? "#6A6A6A" : "#B8B8B8"}` }}
									>
										Primary
									</span>
								</div>
								<span className="address">{data.fulladdress}</span>
								<span className="edit">Edit</span>
								<span className="delete">Delete</span>
							</div>
						))} */}
					</div>
				</div>
				{open && <Modal setOpen={setOpen} />}
			</Div>
		</>
	);
};
export default Address;

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
		height: 536px;
		width: 980px;
		overflow-y: scroll;
        position: relative;
	}
	.order-1 {
	    width: 980px;
		max-height: 100%;
		}
		.order-2 {
			height: 186px;
			width: 469px;
			float: left;
			border-radius: 6px;
			background-color: #ffffff;
			box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
			margin: 7px;
			position:relative;
			flex: 1;
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
