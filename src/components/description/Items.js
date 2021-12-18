<<<<<<< HEAD
import React, { useState } from 'react';
import './Description.css';
//import { itemData } from "./itemData";
//  import {itemData} from './itemData';

const Items = ({ itemm, price, amount, id, icon }) => {
	const [count, setCount] = useState(1);

	const incnum = () => {
		setCount(count + 1);
	};

	const decnum = () => {
		if (count > 1) {
			setCount(count - 1);
		} else {
			setCount(1);
		}
	};

	const [list, Setlist] = useState([]);
	const handleRemove = (id) => {
		const newitem = list.filter((item) => item.id !== id);
		Setlist(newitem);

		//  console.log("clicked")
		// {itemData.filter(id)}
	};

	return (
		<>
			<div className="orderitems">
				<div className="item">
					<p className="itemname">{itemm} </p>
					<div className="symbol">{icon}</div>
=======
import React, { useContext} from 'react';
import './Description.css';
import { cartContext } from '../../context/cartContext';
import vegicon from '../../assets/icons/vegicon.png'
import nonveg from '../../assets/icons/nonveg.png'



const Items=({ item,price,quantity,isVeg}) => {
    
const {deleteItem,increaseItemQuantity,decreaseItemQuantity}=useContext(cartContext)

	
	

	return (
		<>
		
			<div className="orderitems">
				<div className="item">
					<p className="itemname">{item} </p>
					{isVeg?(<div><img src={vegicon} className="symbol" alt=""></img></div>):(<div><img src={nonveg} className="symbol" alt=""></img></div>)}
>>>>>>> a4a2ddd5506842111d5a61ab142a588c34a1b8a4
				</div>
				<div classname="cost">
					<p className="icost">AED{price}</p>
				</div>
				<div className="addon">
					<p className="addons">
						Add On : Avacado, Seasoned Grilled Chicken, Grilled Salmon
					</p>
				</div>
				<div className="incdeccount">
<<<<<<< HEAD
					<div className="decbutton" onClick={decnum}>
						_
					</div>
					<div className="number">{count}</div>
					<div className="incbutton" onClick={incnum}>
						+
					</div>
				</div>
				<div className="itemtotalcost">AED{price * count}</div>
				<div className="remove" onClick={() => handleRemove(id)}>
=======
					<div className="decbutton" onClick={()=>decreaseItemQuantity(item)}>
						_
					</div>
					<div className="number">{quantity}</div>
					<div className="incbutton" onClick={()=>increaseItemQuantity(item)}>
						+
					</div>
				</div>
				<div className="itemtotalcost">AED{price * quantity}</div>
				<div className="remove" onClick={() => deleteItem(item)}>
>>>>>>> a4a2ddd5506842111d5a61ab142a588c34a1b8a4
					Remove
				</div>
				<div className="greyline"></div>
			</div>
		</>
	);
};

export default Items;
