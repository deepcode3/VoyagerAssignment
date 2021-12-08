import React,{createContext} from 'react';
import './Description.css';
import Items from './Items';
import {itemData} from './itemData';
//import ContextCart from './ContextCart';
import  ContextCart from './ContextCart';

export  const CartContext=createContext();

const Description=()=>{
    

    // const [item,setItem]=useState(itemData)

    return(

    
    <CartContext.Provider value={itemData}>
    <ContextCart/>
    </CartContext.Provider>
   
    

    );
}
export default Description
