import React, { useContext } from 'react';
import { cartContext } from '../context/cartContext';
const Test = () => {
	const cart = useContext(cartContext);
	return <>{console.log(cart)}</>;
};

export default Test;
