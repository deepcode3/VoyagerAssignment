import React from "react";
import './Payment.css'


const PaymentPoints=()=>{
    return(
        <>
         <div className="earnedpointsdiv">
                    <p className="credits">Your credits</p>
                    <div className="verticalline"></div>
                    <p className="points">234</p>
                    <p className="earnedcash">AED14.00</p>
                    <input type="checkbox" className="pcheckbox"></input>
                  
                    <p className="redeem">Redeem it now</p>

                </div>
        </>
    )
}
export default PaymentPoints