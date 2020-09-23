import React, { createContext, useState } from "react";
import { Resources } from "../Resources/Resources";

export const Brim = createContext();

export const Control = (props) => {
	const [control, setcontrol] = useState({
		//GLOBALS.................................................................
		dp: Resources.dp,

		cart: [
			{
				name: "Nike Roshe G",
				image: Resources.shoe5,
				previousPrice: 2547,
				price: 1200,
				liked: false,
				added: false,
			},
			{
				name: "Nike Tour Premiere",
				image: Resources.shoe6,
				previousPrice: 1439,
				price: 900,
				liked: true,
				added: false,
			},
			{
				name: "Arm 60",
				image: Resources.shoe1,
				previousPrice: 999,
				price: 749,
				liked: false,
				added: false,
			},
			{
				name: " Nike Air Max 1 Golf",
				image: Resources.shoe3,
				previousPrice: 1150,
				price: 590,
				liked: false,
				added: false,
			},
		],

		favorites: [],

		feed: [
			{
				name: " Air Jordan XI Low Golf",
				image: Resources.shoe8,
				previousPrice: 3000,
				price: 800,
				liked: false,
				added: false,
			},
			{
				name: "Arm 60",
				image: Resources.shoe1,
				previousPrice: 999,
				price: 749,
				liked: false,
				added: false,
			},

			{
				name: " Nike Air Max 1 Golf",
				image: Resources.shoe3,
				previousPrice: 1150,
				price: 590,
				liked: false,
				added: false,
			},
			{
				name: " Nike React Vapor 2",
				image: Resources.shoe4,
				previousPrice: 1678,
				price: 678,
				liked: true,
				added: false,
			},
			{
				name: "Floyd Bronx",
				image: Resources.shoe2,
				previousPrice: 3345,
				price: 2438,
				liked: false,
				added: false,
			},
			{
				name: "Nike Roshe G",
				image: Resources.shoe5,
				previousPrice: 2547,
				price: 1200,
				liked: false,
				added: false,
			},
			{
				name: "Nike Tour Premiere",
				image: Resources.shoe6,
				previousPrice: 1439,
				price: 900,
				liked: true,
				added: false,
			},
			{
				name: "Nike Air Zoom Victory Tour",
				image: Resources.shoe7,
				previousPrice: 2908,
				price: 2200,
				liked: false,
				added: false,
			},
		],
	});

	return (
		<Brim.Provider value={[control, setcontrol]}>
			{props.children}
		</Brim.Provider>
	);
};
