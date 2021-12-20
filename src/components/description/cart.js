import React, { useContext } from "react";
import Items from "./Items";
import { cartContext } from "../../context/cartContext";
import empty from "../../assets/images/empty.png";
import { useHistory } from "react-router-dom";
import "./Description.css";
import CommonHeader from "../headercommon/CommonHeader";

const Cart = () => {
	const history = useHistory();
	const { cartItems } = useContext(cartContext);

	return (
		<>
			<div className="dbgbody">
				{cartItems === null ? (
					<div className="emptyimgcart">
						<img src={empty} alt=""></img>
						<p className="emptytext">Cart is empty</p>
					</div>
				) : (
					<>
						<CommonHeader />
						<div className="firstmain">
							<div className="restaurent">
								<p className="restaurentname">The Botique Kitchen</p>
							</div>
							<div className="estimated-delivery-t">
								<p className="edtime">Estimated Delivery time - 60 - 80 min</p>
							</div>
							<div className="orderdisplay_rectangle"></div>
							<div className="dispitemsdiv">
								{cartItems.map((curritem) => {
									return <Items key={curritem.id} {...curritem} />;
								})}
							</div>

							<div className="cookinginsdiv">
								<div className="cookins">
									<p className="cookinginstext">Cooking instructions?</p>
								</div>
								<div className="mentioninput">
									<input
										type="text"
										className="mention"
										placeholder="Mention it here..."
									></input>
									<div className="mentiongreyline"></div>
								</div>
								<div className="cfinalgreyline"></div>
							</div>
							<div
								className="backbutton"
								onClick={() => {
									history.goBack("/carthome");
								}}
							>
								{" "}
								<p className="back">BACK</p>
							</div>
							<div className="choseaddbtn">
								<p
									className="chooseadd"
									onClick={() => {
										history.push("/address");
									}}
								>
									CHOOSE ADDRESS
								</p>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Cart;
