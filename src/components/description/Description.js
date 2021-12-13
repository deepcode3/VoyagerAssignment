import React,{createContext} from 'react';
import './Description.css';
import Items from './Items';
import {itemData} from './itemData';
//import ContextCart from './ContextCart';
import  ContextCart from './ContextCart';
import CommonHeader from '../headercommon/CommonHeader';

export  const CartContext=createContext();

const Description=()=>{
    

    // const [item,setItem]=useState(itemData)

    return(
        <>
       
        <CommonHeader/>
        <div className="dBbgbody">

    <CartContext.Provider value={itemData}>
    <ContextCart/>
    </CartContext.Provider>
    {console.log(itemData)}
    <div></div>
    </div>
    
    </>

    );
    

}
export default Description
