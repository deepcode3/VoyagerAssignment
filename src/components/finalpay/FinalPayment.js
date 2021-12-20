import React from "react";
import '../payment/Payment.css'
import './FinalPayment.css'
import PaymentOption from "../payment/PaymentOption";
import PaymentPoints from '../payment/PaymentPoints';
import PaymentDeliveryDetails from '../payment/PaymentDeliveryDetails'
import PaymentresDetails from '../payment/PaymentresDetails';
import payback from '../../assets/images/payback.png'
import paynow from '../../assets/images/paynow.png'
import mastercardicon from '../../assets/icons/mastercard_icon.png'

import pvisaicon from '../../assets/icons/Visa_icon.png';
import { useHistory} from "react-router-dom"
import CommonHeader from "../headercommon/CommonHeader";
const FinalPayment=()=>{

    const history=useHistory()
    const prepay=()=>{
        history.goBack('/payment')
    }
    return(
        <>
        <CommonHeader/>
        <p className="paytext">Payment</p>
        <div className="finalpaycontainer">
            <PaymentOption/>
            <p className="mycards">My Card</p>
            <div className="payaddnew"><p className="payaddnewtext">ADD NEW</p></div>
            <div className="cardsdiv">
                <div className="mask1">
                  
                    <img src={pvisaicon} alt="" className="vicon"></img>
                    <p className="vcardnums">54XX XXXX XXXX 1267</p>
                    <p className="vcardname">Abdullah</p>
                    <p className="vexpdate">Expiry:03/22</p>
                    <input type="text" className="ventercode" placeholder="Enter CVV"></input>
                    <div className="vcardline"></div>

                </div>
                
                <div className="mask">
                    <img src={mastercardicon} alt="" className="mcardicon"></img>
                    <p className="cardnums">54XX XXXX XXXX 1267</p>
                    <p className="mcardname">Abdullah</p>
                    <p className="mexpdate">Expiry:03/22</p>
                    <input type="text" className="entercode" placeholder="Enter security code"></input>
                    <div className="mcardline"></div>

                </div>


            </div>
            <div className="Fpaypoints"><PaymentPoints></PaymentPoints></div>
           
            <p className="Fpaymentdeliverydetails">Delivery Details</p>
            <div className="Fpaydeldetails">
            
            <PaymentDeliveryDetails/>
            </div>
            <div className="fpayres">
                <PaymentresDetails/>
            </div>
            <div className="fpayback" onClick={prepay}><img src={payback} alt=""></img></div>
            <div className="fpaynow"><img src={paynow} alt=""></img></div>

        </div>
        </>
    )
}
export default FinalPayment