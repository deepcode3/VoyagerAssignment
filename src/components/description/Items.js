import React,{useState} from "react";
import './Description.css';
//  import {itemData} from './itemData';

const Items=({ itemm,price,amount,id}) => {
     const [count,setCount]=useState(1)

     const incnum=()=>{
         setCount(count+1)
       
     }

     const decnum=()=>{
         if(count>1){
         setCount(count-1)
         }else{
             setCount(1)
         }
     }

    return(
        <>

<div className="orderitems">
        <div className="symbol"></div>
        <div className="item"><p className="itemname">{itemm} </p></div>
        <div classname="cost"><p className="icost">{price}</p></div>
        <div className="addon"><p className="addons">Add On : Avacado, Seasoned Grilled Chicken, Grilled Salmon</p></div>
        <div className="incdeccount">
            <div className="decbutton" onClick={decnum}>_</div>
            <div className="number">{count}</div>
            <div className="incbutton" onClick={incnum} >+</div>

        </div>
        <div className="itemtotalcost">{price*count}</div>
        <div className="remove" >Remove</div>
        <div className="greyline"></div>
    </div>
    
        </>
    )
}

export default Items