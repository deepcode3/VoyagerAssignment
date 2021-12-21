import React, { useState } from "react";
import Modal from "./modal";
import styled from "styled-components";
import { Data } from "../Profiledata";

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
				</div>
				<div className="align-2">
					<div className="rectangle-2">
						{Data.map((data, key) => (
							<div key={key} className="rectangle-3">
								<span className="order-id">Order id:{data.orderId}</span>
								<span className="kitchen-type">{data.kitchen}</span>
								<span className="road">{data.address}</span>
								<span className="itemsAED">
									{data.items} Items | AED{data.cost}
								</span>
								<span className="delivery-status-text ">{data.status}</span>
								<div className="details">
									<span
										className="detail-text"
										type="button"
										onClick={() => {
											setOpen(true);
										}}
									>
										DETAILS
									</span>
								</div>
								<div className="status">
									<span className="status-text" type="button">
										STATUS
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
				{open && <Modal setOpen={setOpen} open={open} />}
			</Div>
		</>
	);
};
export default Orders;

const Div = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	padding: 75px 0;
	flex-direction: column;
	position: relative;
	background-color: #f1f3fb;
	.align-1 {
		width: 940px;
		height: 33px;
		display: flex;
		position: relative;
		justify-content: start;
	}
	.align-2 {
		height: 536px;
		width: 980px;
		overflow-y: scroll;
		position: relative;
	}
	.rectangle-2 {
		width: 980px;
		max-height: 100%;
	}
	.rectangle-3 {
		height: 248px;
		width: 469px;
		float: left;
		border-radius: 6px;
		background-color: #ffffff;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
		margin: 7px;
		position: relative;
		flex: 1;
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
		height: 36px;
		width: 111px;
		box-sizing: border-box;
		border: 1px solid #7b7676;
		border-radius: 18px;
		position: absolute;
		top: 191px;
		left: 197px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.detail-text {
		height: 19px;
		width: 79px;
		color: #726e6e;
		color: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
		font-family: "Open Sans";
		font-size: 14px;
		font-weight: 600;
		letter-spacing: -0.2px;
		line-height: 19px;
		text-align: center;
		text-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
	}
	.status {
		height: 36px;
		width: 111px;
		box-sizing: border-box;
		border: 1px solid #f57c00;
		border-radius: 18px;
		position: absolute;
		top: 191px;
		left: 327px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.status-text {
		height: 19px;
		width: 58px;
		background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-family: "Open Sans";
		font-size: 14px;
		font-weight: 600;
		letter-spacing: -0.2px;
		line-height: 19px;
		text-align: center;
		text-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
	}
`;
