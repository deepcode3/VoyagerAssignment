import React from "react";
import './CartHome.css'

import { useHistory } from "react-router-dom"

const Cartlist=( {Hotelname,hoteladdress, totalproduct,productcost})=>{
    const history=useHistory()
    return(
        <>

<p className='mycarttext'>My Cart<span> (3)</span></p>
            <div className='cartdiv'>
                <p className='cartresname'>{Hotelname}</p>
                <p className='cartremovebtn'>Remove</p>
                <p  className='cartresaddress'>{hoteladdress}</p>
                <div className='itemandcostdiv'>
                    <p className='totalresitems'><span>{totalproduct}</span> Items</p>
                    <div className='cartvertical'>|</div>
                    <p className='Carthometotal'>AED<span>{productcost}</span></p>

                </div>
                <div className='cartproceedbtn' onClick={()=>history.push('/description')}><p className='cartproceedtext'>PROCEED</p></div>

            </div>
        </>
    )
}

export default Cartlist