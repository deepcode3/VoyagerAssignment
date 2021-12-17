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
					Remove
				</div>
				<div className="greyline"></div>
			</div>
		</>
	);
};

export default Items;
