import React, { createContext } from 'react';
import './Description.css';
import Items from './Items';
//import {itemData} from './itemData';
//import ContextCart from './ContextCart';
import ContextCart from './ContextCart';
import { itemData } from './itemData';
import Menu from '../../containers/menu';

const CartContext = createContext();
export { CartContext };

const CartContextProvider = (props) => {
	// const [item,setItem]=useState(itemData)
	return (
		<CartContext.Provider value={itemData}>
			<ContextCart />
			<Menu />
		</CartContext.Provider>
	);
};
export default CartContextProvider;
