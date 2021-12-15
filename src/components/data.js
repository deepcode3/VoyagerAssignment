import React from "react";
import non_veg from "../assets/icons/non_veg.png";
import veg from "../assets/icons/veg.png";
import visa from "../assets/icons/visa.png";
import mastercard from "../assets/icons/mastercard.png";

export const Data = [
	{
		id: 1,
		orderId: 1234567890,
		status: "Out for delivary",
		kitchen: "The Boutique Kitchen",
		address: "Shiekh Zayed Road, Dubai, UAE",
		fulladdress:
			"Downtown Burj Khalifa, Sheikh Mohammed bin Rashid Blvd - Dubai - United Arab EmiratesDubai, UAE",
		items: 3,
		cost: 85.75,
		time: 11.3,
		details: [
			{
				items: [
					{
						foodname: "Chili Cheese Meal",
						cost: 27.0,
						addon: "Avacado, Seasoned Grilled Chicken, Grilled Salmon",
						quantity: 1,
						totalcost: 54.0,
						icon: <img src={non_veg} alt="food" />,
					},
					{
						foodname: "Canapes and Crostini",
						cost: 22.0,
						addon: "",
						quantity: 2,
						totalcost: 44.0,
						icon: <img src={veg} alt="food" />,
					},
					{
						foodname: "Chicken Tortilla",
						cost: 20.0,
						addon: "",
						quantity: 1,
						totalcost: 20.0,
						icon: <img src={non_veg} alt="food" />,
					},
				],
			},
			{
				amount: [
					{
						paid: 85.0,
						itemstotal: 118.0,
						charges: 10.0,
						discount: 43.24,
					},
				],
			},
		],
		payment: {
			pay1: {
				type: "American Experess",
				account: 2345222233336574,
				icon: <img src={visa} alt="food" />,
			},
		},
	},
	{
		id: 2,
		orderId: 1234567890,
		status: "In kitchen",
		kitchen: "The Boutique Kitchen",
		address: "Shiekh Zayed Road, , Dubai, UAE",
		items: 3,
		cost: 85.75,
	},
	{
		id: 3,
		orderId: 1234567890,
		status: "Out for delivary",
		kitchen: "The Boutique Kitchen",
		address: "Shiekh Zayed Road, , Dubai, UAE",
		items: 3,
		cost: 85.75,
	},
];
