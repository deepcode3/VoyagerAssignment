import React from "react";
import '../payment/Payment.css'
import './FinalPayment.css'
import PaymentOption from "../payment/PaymentOption";
import PaymentPoints from '../payment/PaymentPoints';
import PaymentDeliveryDetails from '../payment/PaymentDeliveryDetails'
import PaymentresDetails from '../payment/PaymentresDetails';
import visacard from '../../assets/images/visacard.png'
import mastercard from '../../assets/images/mastercard.png'
import payback from '../../assets/images/payback.png'
import paynow from '../../assets/images/paynow.png'
const FinalPayment=()=>{
    return(
        <>
        <p className="paytext">Payment</p>
        <div className="finalpaycontainer">
            <PaymentOption/>
            <p className="mycards">My Card</p>
            <div className="payaddnew"><p className="payaddnewtext">ADD NEW</p></div>
            <div className="cardsdiv">
                <img src={visacard} alt="" className="visaimg"></img>
                <img src={mastercard} alt="" className="masterimg"></img>


            </div>
            <div className="fpaypoints">
            <PaymentPoints/>
            </div>
            <div className="fpaydeldetails">
            <PaymentDeliveryDetails/>
            </div>
            <div className="fpayres">
                <PaymentresDetails/>
            </div>
            <div className="fpayback"><img src={payback} alt=""></img></div>
            <div className="fpaynow"><img src={paynow} alt=""></img></div>

        </div>
        </>
    )
}
export default FinalPayment