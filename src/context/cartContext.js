import { createContext, useState } from 'react';
import { itemData } from '../components/description/itemData';
export const cartContext = createContext({
	cartItems: [],
	addItem: () => {},
	deleteItem: () => {},
	clearCartContext: () => {},
	increaseItemQuantity: () => {},
	decreaseItemQuantity: () => {},
});

const CartContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(itemData);
	const addItem = (item) => {
		setCartItems((cartItems) => [...cartItems, item]);
	};
	const deleteItem = (id) => {
		setCartItems(cartItems.filter((item) => item.item !== id));
	};
	const clearCartContext = () => {
		setCartItems([]);
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
