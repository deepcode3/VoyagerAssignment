import React,{useState} from 'react';
import './Description.css';
import Items from './Items';
import {itemData} from './itemData';

const Description=()=>{

    const [item,setItem]=useState(itemData)

    return(

    <>
    <div className="firstmain">
    <div className="restaurent">
        <p className="restaurentname" >The Botique Kitchen</p>
    </div>
    <div className="estimated-delivery-t"><p className="edtime">Estimated Delivery time - 60 - 80 min</p></div>
    <div className="orderdisplay_rectangle">
    
<div className="dispitemsdiv">
    {
        item.map((curritem)=>{
            return  <Items key={curritem.id}{...curritem}/>
        })
    }
     
</div>

    <div className="cookinginsdiv">
        <div className="cookins"><p className="cookinginstext">Cooking instructions?</p></div>
        <div className="mentioninput">
            <textarea className="mention" placeholder="mention here..."></textarea>
        </div>
    </div>
    <div className="backbutton"><p className="back">BACK</p></div>
    <div className="choseaddbtn"><p className="chooseadd">CHOOSE ADDRESS</p></div>
    </div>
    </div>
    </>

    );
}
export default Description
