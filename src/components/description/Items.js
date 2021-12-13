import React,{useState} from "react";
import './Description.css';
import { itemData} from "./itemData";
//  import {itemData} from './itemData';

const Items=({ itemm,price,amount,id,icon}) => {
     const [count,setCount]=useState(amount)

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
     
     const [list,Setlist]=useState(itemData)
     const handleRemove = (id) =>{
         const newitem=list.filter((item)=>item.id !==id)
         Setlist(newitem)

        //  console.log("clicked")
        // {itemData.filter(id)}
     }
    

    return(
        <>

<div className="orderitems">
       
        <div className="item"><p className="itemname">{itemm} </p>
         <div className="symbol">{icon}</div>
        </div>
        <div classname="cost"><p className="icost">AED{price}</p></div>
        <div className="addon"><p className="addons">Add On : Avacado, Seasoned Grilled Chicken, Grilled Salmon</p></div>
        <div className="incdeccount">
            <div className="decbutton" onClick={decnum}>_</div>
            <div className="number">{count}</div>
            <div className="incbutton" onClick={incnum} >+</div>

        </div>
        <div className="itemtotalcost">AED{price*count}</div>
        <div className="remove" onClick={() => handleRemove(id)}>Remove</div>
        <div className="greyline"></div>
    </div>
    
        </>
    )
}

export default Items