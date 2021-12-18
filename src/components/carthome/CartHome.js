import {React,useState} from 'react'
import CommonHeader from '../headercommon/CommonHeader'
import Cartdata from './Cartdata';
import Cartlist from './Cartlist';
import './CartHome.css'

const CartHome=()=>{
    const[cartifo, setCartinfo]=useState(Cartdata)
    return(
        <>
        <CommonHeader/>
        <div className='cartbg'>
            {
                cartifo.map((val)=>{
                    return  <Cartlist key={val.id} {...val}/>
                    
                })
            }
            
           

        </div>
        </>
    )
}

export default CartHome