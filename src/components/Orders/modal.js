import React, { useState } from "react";
import styled from "styled-components";
import dismiss_button from "../../assets/icons/dismiss button.png";
import icn_star_gray from "../../assets/icons/icn_star_red.png";
import icn_star_green from "../../assets/icons/icn_star_yellow.png";
import red_dot from "../../assets/icons/Group 8 Copy 2.png";
import green_dot from "../../assets/icons/Group 6.png";

const Modal = ({ setOpen, open }) => {
	const [active, setActive] = useState(false);
	const handlerating = () => {
		setActive(true);
		console.log(active, "active");
	};
	console.log("open state in modal:", open);
	console.log("rating:", active);
	return (
		<ModalBack>
			<div
				className="modal-dialog"
				style={{
					overflowY: "scroll",
					maxHeight: "85%",
					marginTop: "50px",
					marginBottom: "50px",
				}}
			>
				<div className="modal-content">
					<div className="modal-body">
						<img
							src={dismiss_button}
							alt="dismiss"
							onClick={() => {
								setOpen(false);
							}}
							className="dismiss-button"
						/>
						<span className="order-details">Order Details</span>
						<span
							className="side-headding"
							style={{ top: "100px", left: "32px" }}
						>
							Items
						</span>
						<div className="box-1">
							<div className="order-1">
								<span className="food">
									<img className="dot" src={red_dot} alt="oval" />
									Chili Cheese Meal
								</span>
								<span className="AED">AED27.00</span>
								<span className="add-on">
									Add On : Avacado, Seasoned Grilled Chicken, Grilled Salmon
								</span>
								<span className="AED-1">AED54.00</span>
							</div>
							<hr className="line" />
							<div className="order-1">
								<span className="food">
									<img className="dot" src={green_dot} alt="oval" />
									Canapes and Crostini
								</span>
								<span className="AED">AED22.00</span>
								<span className="add-on">:</span>
								<span className="AED-1">AED54.00</span>
							</div>
							<hr className="line" />
							<div className="order-1">
								<span className="food">
									<img className="dot" src={red_dot} alt="oval" />
									Chili Cheese Meal
								</span>
								<span className="AED">AED27.00</span>
								<span className="add-on">Quantity : 1</span>
								<span className="AED-1">AED54.00</span>
							</div>
						</div>
						<span
							className="side-headding"
							style={{ top: "447px", left: "32px" }}
						>
							Amount
						</span>
						<div className="box-2">
							<div className="to-pay">
								<span className="pay" style={{ top: "0px", left: "0px" }}>
									Paid
								</span>
								<span
									className="pay-value"
									style={{ top: "0px", right: "0px" }}
								>
									AED85.76
								</span>
								<span
									className="pay-items"
									style={{ top: "33px", left: "0px" }}
								>
									Items total
								</span>
								<span
									className="pay-items"
									style={{ top: "33px", right: "0px" }}
								>
									AED118.00
								</span>
								<span
									className="pay-items"
									style={{ top: "62px", left: "0px" }}
								>
									Fee/ charges
								</span>
								<span
									className="pay-items"
									style={{ top: "62px", right: "0px" }}
								>
									AED 10.00
								</span>
								<span
									className="pay-items"
									style={{ top: "90px", left: "0px" }}
								>
									Discount
								</span>
								<span
									className="pay-items"
									style={{ top: "90px", right: "0px" }}
								>
									AED 42.24
								</span>
								<hr className="line" style={{ top: "124px", left: "-7px" }} />
								<span className="pay" style={{ top: "140px", left: "0px" }}>
									Payment Mode
								</span>
								<span
									className="pay-value"
									style={{ top: "140px", right: "0px" }}
								>
									Credit/Debit Card
								</span>
							</div>
						</div>
						<span
							className="side-headding"
							style={{ top: "709px", left: "32px" }}
						>
							Delivery Details
						</span>
						<div className="box-3">
							<div className="to-delivary">
								<div className="delivary-location">
									<span className="span-1">Delivary location</span>
									<span className="span-2">
										Downtown Burj Khalifa, Dubai, UAE
									</span>
								</div>
								<hr className="line" style={{ top: "50px", left: "-10px" }} />
								<div className="pickup-location">
									<span className="span-1">Date & Time</span>
									<span className="span-2">Today at 11:30AM</span>
								</div>
							</div>
						</div>
						<div className="rectangle-7">
							<span className="rate-your-delivery ">Rate your Delivery</span>
							<div className="ratings">
								<div className="group-2" onClick={handlerating} type="button">
									<img
										src={active ? icn_star_green : icn_star_gray}
										alt="star"
										className="star"
									/>
									<span className="num">1</span>
								</div>
								<div className="group-2">
									<img
										src={active ? icn_star_green : icn_star_gray}
										alt="star"
										className="star"
									/>
									<span className="num">2</span>
								</div>
								<div className="group-2">
									<img
										src={active ? icn_star_green : icn_star_gray}
										alt="star"
										className="star"
									/>
									<span className="num">3</span>
								</div>
								<div className="group-2">
									<img
										src={active ? icn_star_green : icn_star_gray}
										alt="star"
										className="star"
									/>
									<span className="num">4</span>
								</div>
								<div className="group-2">
									<img
										src={active ? icn_star_green : icn_star_gray}
										alt="star"
										className="star"
									/>
									<span className="num">5</span>
								</div>
							</div>
							<div className="field">
								<label htmlFor="comment" className="write-a-review">
									Write a review
								</label>
								<input
									type="text"
									className="review"
									placeholder="Start writing your review"
								/>
							</div>
							<div className="submit-button">
								<span className="submit">SUBMIT</span>
							</div>
						</div>
					</div>
				</div>
			</div>
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
	overflow-y: initial;
	.modal-dialog {
		overflow-y: initial;
		border-radius: 8px;
		background-color: #ffffff;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
		height: 1211px;
		width: 501px;
		display: flex;
		justify-content: center;
	}
	.line {
		box-sizing: border-box;
		width: 422px;
		border-top: 1px solid #e3e3e3;
		//margin: 15px auto;
		position: absolute;
		left: 5px;
	}
	.modal-content {
		height: 1211px;
		width: 501px;
		display: flex;
		justify-content: center;
		flex-direction: row;
		align=items: center;
		position: relative;
	}
	.dismiss-button {
		height: 12px;
		width: 12px;
		position: absolute;
		right: 10px;
		top: 10px;
	}
	.order-details {
		height: 33px;
		width: 150px;
		color: #4c4c4c;
		font-family: "Open Sans";
		font-size: 24px;
		font-weight: 600;
		letter-spacing: -0.34px;
		line-height: 33px;
		position: absolute;
		top: 43px;
		left: 176px;
	}
	.side-headding {
		position: absolute;
		height: 22px;
		color: #565454;
		font-family: "Open Sans";
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 0;
		line-height: 22px;
	}
	.box-1 {
		box-sizing: border-box;
		width: 441px;
		border: 1px solid #e3e3e3;
		border-radius: 5px;
		position: absolute;
		top: 127px;
		left: 30px;
	}
	.order-1 {
		width: 400px;
		margin: 21px 0 0 20px;
		display: flex;
		flex-direction: column;
		align-items: start;
		position: relative;
	}

	.food {
		height: 19px;
		color: #2d2d2d;
		font-family: "Open Sans";
		font-size: 14px;
		font-weight: 600;
		letter-spacing: 0;
		line-height: 19px;
	}
	.dot {
		height: 8px;
		width: 8px;
		margin-right: 7px;
	}
	.AED {
		//height: 27px;
		width: 213px;
		color: #2d2d2d;
		font-family: "Open Sans";
		font-size: 12px;
		letter-spacing: 0;
		line-height: 27px;
	}
	.add-on {
		//height: 30px;
		width: 183px;
		color: #9b9b9b;
		font-family: "Open Sans";
		font-size: 11px;
		letter-spacing: 0;
		line-height: 15px;
	}
	.AED-1 {
		height: 17px;
		color: #2d2d2d;
		font-family: "Open Sans";
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 0;
		line-height: 17px;
		text-align: center;
		position: absolute;
		top: 45px;
		left: 345px;
	}
	.box-2 {
		box-sizing: border-box;
		height: 206px;
		width: 441px;
		border: 1px solid #e3e3e3;
		border-radius: 5px;
		position: absolute;
		top: 479px;
		left: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.to-pay {
		height: 164px;
		width: 403px;
		position: relative;
	}
	.pay {
		height: 22px;
		//width: 33px;
		color: #223136;
		font-family: "Open Sans";
		font-size: 16px;
		letter-spacing: 0;
		line-height: 22px;
		position: absolute;
	}
	.pay-value {
		height: 22px;
		//width: 73px;
		color: #223136;
		font-family: "Open Sans";
		font-size: 16px;
		font-weight: bold;
		letter-spacing: 0;
		line-height: 22px;
		text-align: right;
		position: absolute;
	}
	.pay-items {
		height: 17px;
		//width: 60px;
		color: #9b9b9b;
		font-family: "Open Sans";
		font-size: 12px;
		letter-spacing: 0;
		line-height: 17px;
		position: absolute;
	}
	.box-3 {
		box-sizing: border-box;
		height: 157px;
		width: 441px;
		border: 1px solid #e3e3e3;
		border-radius: 5px;
		position: absolute;
		top: 741px;
		left: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.to-delivary {
		height: 120px;
		width: 403px;
		position: relative;
	}
	.delivary-location {
		height: 37px;
		width: 222px;
		display: flex;
		flex-direction: column;
		align-items: start;
		position: absolute;
	}
	.pickup-location {
		height: 37px;
		width: 120px;
		display: flex;
		flex-direction: column;
		align-items: start;
		position: absolute;
		top: 80px;
	}

	.span-1 {
		height: 17px;
		//width: 67px;
		color: #6a6a6a;
		font-family: "Open Sans";
		font-size: 12px;
		letter-spacing: -0.24px;
		line-height: 17px;
	}
	.span-2 {
		height: 19px;
		//width: 116px;
		color: #2d2d2d;
		font-family: "Open Sans";
		font-size: 14px;
		letter-spacing: -0.24px;
		line-height: 19px;
	}

	.rectangle-7 {
		height: 285px;
		width: 501px;
		border-radius: 0 0 8px 8px;
		background-color: #ffffff;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
		position: relative;
		top: 926px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.rate-your-delivery {
		height: 22px;
		width: 138px;
		color: #565454;
		font-family: "Open Sans";
		font-size: 16px;
		font-weight: 600;
		letter-spacing: -0.24px;
		line-height: 22px;
		position: absolute;
		top: 14px;
		left: 33px;
	}
	.ratings {
		height: 21px;
		width: 245px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		position: absolute;
		top: 51px;
		left: 31px;
	}
	.group-2 {
		box-sizing: border-box;
		height: 21px;
		width: 42.35px;
		border: ${({ active }) =>
			active ? "1px solid #5fb700" : "1px solid #C2C2C2"};
		border-radius: 4px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.star {
		height: 11px;
		width: 12.1px;
	}
	.num {
		color: ${({ active }) => (active ? " #5fb700" : "#C2C2C2")};
	}
	.field {
		height: 67px;
		width: 432px;
		position: absolute;
		top: 98px;
		left: 32px;
	}
	.review[type="text"] {
		width: 100%;
		padding: 20px 20px;
		margin: 8px 0;
		box-sizing: border-box;
		border: none;
		border-bottom: 1px solid #a4a4a4;
		opacity: 0.53;
	}
	.rectangle-copy {
		height: 50px;
		width: 217px;
		border-radius: 4px;
		background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
		box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
	}

	.ratings {
		height: 21px;
		width: 245px;
	}
	.write-a-review {
		height: 17px;
		width: 76px;
		color: #858585;
		font-family: "Open Sans";
		font-size: 12px;
		letter-spacing: -0.24px;
		line-height: 17px;
	}
	.submit-button {
		height: 50px;
		width: 217px;
		border-radius: 4px;
		background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
		box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
		position: absolute;
		top: 205px;
		left: 142px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.submit {
		height: 19px;
		width: 54px;
		color: #ffffff;
		font-family: "Open Sans";
		font-size: 14px;
		font-weight: bold;
		letter-spacing: 0;
		line-height: 19px;
		text-align: center;
	}
`;
