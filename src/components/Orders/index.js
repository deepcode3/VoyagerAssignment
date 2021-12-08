import React, { useState } from "react";
import Modal from "./modal";
import styled from "styled-components";
import rightArrow from "../../assets/icons/right_arrow@3x.png";

const Orders = () => {
	const [open, setOpen] = useState(false);
	console.log("open state in orders:", open);
	return (
		<>
			<Div>
				<div className="align-1">
					<select className="active-orders">
						<option value="1">Active Orders</option>
						<option value="2">Cancelled Orders</option>
						<option value="3">Past Orders</option>
					</select>

					{/*<span className="active-orders">
						Active Orders
						<img className="right-arrow " src={rightArrow} alt="icons" />
  </span>*/}
				</div>
				<div className="align-2">
					<div className="rectangle-3">
						<span className="order-id">Order id: 1234567890</span>
						<span className="kitchen-type">The Boutique Kitchen</span>
						<span className="road">Shiekh Zayed Road, , Dubai, UAE</span>
						<span className="itemsAED">3 Items | AED85.76</span>
						<span className="delivery-status-text ">Out for Delivery</span>
						<button
							className="details"
							type="button"
							onClick={() => {
								setOpen(true);
							}}
						>
							DETAILS
						</button>
						<button className="status" type="button">
							STATUS
						</button>
					</div>
					<div className="rectangle-3">
						<span className="order-id">Order id: 1234567890</span>
						<span className="kitchen-type">The Boutique Kitchen</span>
						<span className="road">Shiekh Zayed Road, , Dubai, UAE</span>
						<span className="itemsAED">3 Items | AED85.76</span>
						<span className="delivery-status-text ">In kitchen</span>
						<button
							className="details"
							type="button"
							onClick={() => {
								setOpen(true);
							}}
						>
							DETAILS
						</button>
						<button className="status" type="button">
							STATUS
						</button>
					</div>
				</div>
				{open && <Modal setOpen={setOpen} open={open} />}
			</Div>
		</>
	);
};
export default Orders;

const Div = styled.div`
	height: 100vh;
	weidth: 100vw;
	display: flex;
	align-items: center;
	padding: 75px 0;
	flex-direction: column;
	background-color: #f1f3fb;
	.align-1 {
		width: 940px;
		height: 33px;
		display: flex;
		justify-content: start;
		position: relative;
	}
	.align-2 {
		display: flex;
		width: 960px;
		flex-wrap: wrap;
		//align-items: start;
		//flex-direction: row;
	}
	.align-2 > * {
		flex: 1 1;
	}
	.rectangle-3 {
		height: 248px;
		width: 469px;
		border-radius: 6px;
		background-color: #ffffff;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
		margin: 10px;
		position: relative;
	}
	.active-orders {
		height: 22px;
		color: #f57c00;
		font-family: "Open Sans";
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 0;
		line-height: 22px;
		text-align: right;
		background-color: #f1f3fb;
		border: 0px;
		outline: 0px;
		position: absolute;
	}
	.ao {
		color: #f57c00;
		font-family: "Open Sans";
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 0;
		line-height: 22px;
	}
	.right-arrow {
		height: 10px;
		width: 6.17px;
		transform: rotate(180deg);
		padding: 2px;
	}

	.order-id {
		height: 30px;
		width: 219px;
		color: #313131;
		font-family: "Open Sans";
		font-size: 22px;
		font-weight: 600;
		letter-spacing: -0.34px;
		line-height: 30px;
		position: absolute;
		top: 27px;
		left: 30px;
	}
	.kitchen-type {
		height: 23px;
		width: 165px;
		color: #4c4c4c;
		font-family: "Open Sans";
		font-size: 17px;
		letter-spacing: -0.29px;
		line-height: 23px;
		position: absolute;
		top: 67px;
		left: 30px;
	}
	.road {
		height: 18px;
		width: 188px;
		color: #909090;
		font-family: "Open Sans";
		font-size: 13px;
		letter-spacing: -0.26px;
		line-height: 18px;
		position: absolute;
		top: 100px;
		left: 30px;
	}
	.itemsAED {
		height: 19px;
		width: 136px;
		color: #4c4c4c;
		font-family: "Open Sans";
		font-size: 14px;
		font-weight: 600;
		letter-spacing: 0;
		line-height: 19px;
		position: absolute;
		top: 129px;
		left: 30px;
	}
	.delivery-status-text {
		height: 19px;
		width: 108px;
		color: #72b000;
		font-family: "Open Sans";
		font-size: 14px;
		font-weight: 600;
		letter-spacing: 0;
		line-height: 19px;
		text-align: right;
		position: absolute;
		top: 37px;
		left: 330px;
	}
	.details {
		box-sizing: border-box;
		height: 36px;
		width: 111px;
		border: 1px solid #7b7676;
		border-radius: 18px;
		box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
		position: absolute;
		top: 191px;
		left: 197px;
	}
	.status {
		height: 36px;
		width: 111px;
		border-radius: 18px;
		box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
		position: absolute;
		top: 191px;
		left: 327px;
	}
`;
