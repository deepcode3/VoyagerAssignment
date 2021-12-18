import React from "react";
import './Payment.css';
import visaicon from '../../assets/icons/visaicon.png';
import PaymentOption from "./PaymentOption";
import PaymentPoints from "./PaymentPoints";
import PaymentDeliveryDetails from "./PaymentDeliveryDetails";
import PaymentresDetails from "./PaymentresDetails";
import payback from '../../assets/images/payback.png'
import paynow from '../../assets/images/paynow.png'
import { useHistory} from "react-router-dom"
import CommonHeader from "../headercommon/CommonHeader";






const Payment=(props)=>{

    // const history={useHistory}
    const history= useHistory();
    const loadfinalpay=()=>{
        history.push('/finalpay')
    }
    const loadaddress=()=>{
        history.goBack('/address')
    }
    return(

        <>
        <CommonHeader/>
        <div className="paymentheading"><p className="paymenttext">Payment</p></div>
        <div className="paymentcontainer">
            
            <div className="Preferdpaymentdiv"><PaymentOption/></div>
            <div className="carddetailscontainer">
                <p  className="entercarddetailstext">Enter Credit/Debit card details</p>
                <div className="cardnumberdiv">
                    <p className="cardnumbertext">Card number</p>
                    <input type="text" className="cardnumber"></input>
                    <img src={visaicon} className="Visaicon" alt=""></img>
                    <div className="cardnumberline"></div>
                </div>
                <div className="nameoncarddiv">
                    <p className="nameoncard">Name on card</p>
                    <input type="text" className="namecard"></input>
                    <div className="namecardline"></div>

                </div>
                <div className="expirydatediv">
                    <p className="expiry">Expiry</p>
                    <p className="security">Security card</p>
                    <input type="text" className="date"></input>
                    <div className="datelines"></div>
                    <div className="bar">/</div>
                    <input type="text" className="year"></input>
                    <input type="text" className="code"></input>
                   
                    <div className="yearline"></div>
                    <div className="codeline"></div>
                </div>
                <div className="sometext">
                    <input type="radio" className="somename"></input>
                    <p className="addtosave">Add this card to saved cards</p>
                </div>

                </div>

                <PaymentPoints/>
                <p className="paymentdeliverydetails">Delivery Details</p>
                <PaymentDeliveryDetails/>
                <PaymentresDetails/>
                
                <div className="paybackbutton" onClick={loadaddress}><img src={payback} alt=""></img></div>
                <div className="paynowbutton" onClick={loadfinalpay}><img src={paynow} alt=""></img></div>

        </div>
        </>

    )
}
export default Payment;