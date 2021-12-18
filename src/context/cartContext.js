import { createContext, useEffect, useState } from 'react';
export const cartContext = createContext({
	cartItems: [],
	addItem: () => {},
	deleteItem: () => {},
	clearCartContext: () => {},
	increaseItemQuantity: () => {},
	decreaseItemQuantity: () => {},
});

const CartContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(
		JSON.parse(localStorage.getItem('cartItems'))
	);
	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);
	const addItem = (item) => {
		if (cartItems === null) setCartItems([item]);
		if (cartItems) {
			setCartItems((cartItems) => [...cartItems, item]);
		}
	};
	const deleteItem = (id) => {
		setCartItems(cartItems.filter((item) => item.item !== id));
	};
	const clearCartContext = () => {
		localStorage.clear('cartItems');
		window.location.reload();
	};
	const increaseItemQuantity = (id) => {
		let updatedArray = [...cartItems];
		var index = updatedArray.findIndex((item) => item.item === id);
		updatedArray[index].quantity += 1;
		setCartItems(updatedArray);
	};
	const decreaseItemQuantity = (id) => {
		let updatedArray = [...cartItems];
		var index = updatedArray.findIndex((item) => item.item === id);
		updatedArray[index].quantity -= 1;
		setCartItems(updatedArray);
	};
	const value = {
		cartItems,
		addItem,
		deleteItem,
		clearCartContext,
		increaseItemQuantity,
		decreaseItemQuantity,
	};
	return (
		<cartContext.Provider value={value}>{props.children}</cartContext.Provider>
	);
};

export default CartContextProvider;
