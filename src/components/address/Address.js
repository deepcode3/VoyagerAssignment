import React from "react";
import './Address.css';
import delivericon from '../../assets/icons/delivericon.png'
import pickupicon from '../../assets/icons/pickupicon.png'
import addnewbtn  from '../../assets/icons/button.png'
// import paymentbutton from '../../assets/icons/choosepayment.png'
import check from '../../assets/icons/check.png'
import { useHistory} from "react-router-dom"


const Address=()=>{

    const usecheck=()=>{
        return(
            <>
                        
            </>
        )
    }
    
    const history=useHistory()
    // const loadPayment=()=>{
    //     history.push('/payment')
    // }
    console.log(history)



    
    return(
        <>
        <div className="adress"><p className="addressheading">Choose Address</p></div>
        <div className="addresscontainer">
            <div className="preferencetext"><p className="preference">How would you like us to get your meal to you?</p></div>
            <div className="deliveryoptiondiv">
                <div className="deliverdiv">
                    <div className="deliver"><img src={delivericon} className="scootericon" alt="deliveryicon"></img></div>
                    
                        <input type="radio" value="delivertome" name="deliveryoption" className="delivertomebtn"  />
                        <p className="delivertometxt">Deliver to me</p>
                    
                </div>
                <div className="pickupdiv">
                <div className="pickup"><img src={pickupicon} className="pickupicon" alt="pickupicon"></img></div>
                <input type="radio"value="pickup"  name="deliveryoption" className="pickupbtn"   />
                <p className="pickuptext">Pick up</p>

                </div>
            
        </div>
        <div className="myadd"><p className="myaddtxt">My Addresses <span>(2)</span></p></div>
        <div className="addnew"><img src={addnewbtn} className="addnewbtn" alt="adnewbtn"/>
        <p className="addnewtext">ADD NEW</p>
        <div className="homeaddressdiv" onClick={usecheck}>
            <p className="home">Home</p>
            {/* <input type="radio" name="address" value="office" className="officeradio"/> */}
            <div className="checkimg" ><img src={check} className="officeradio" alt=""></img></div>
            <p className="addressline">Downtown Burj Khalifa, Dubai, UAE</p>
            <div className="editbtn">Edit</div>
            <div className="deletebtn">Delete</div>
        </div>

        <div className="officeaddressdiv">
            <p className="office">Office</p>
            {/* <input type="radio" name="address" value="office" className="officeradio"/> */}
            <p className="addressline">Downtown Burj Khalifa, Dubai, UAE</p>
            <div className="editbtn1">Edit</div>
            <div className="deletebtn1">Delete</div>
        </div>
        </div>
        <div className="contactdetailsdiv">
            <p className="contactdetails">Contact Details</p>
            <div className="namediv">
                <p className="name">Name</p>
                <input name="name" type="text" className="personname"></input>
                <div className="blackline"></div>
            </div>
            <div className="mobnumdiv">
            <div className="mobnum"><p className="mobilenum">Mobile Number</p></div>
            <input type="number" className="mbnumber"></input>
            <div className="bline1"></div>
            <div className="bline2"></div>
            </div>
        </div>
        <div className="delins"><p className="deliveryins">Delivery Instructions?</p></div>
        <div className="mention">
            <textarea type="text" placeholder="Mention it here..." className="mntn"></textarea>
            <div className="mentiongreyline1"></div>
        </div>
        <div className="aBackbuttondiv" onClick={()=>history.push('/contextcart')}><p className="aBACKtext">BACK</p></div>
        <div className="aChoosepayment" onClick={()=>history.push('/payment')}><p className="aChoosepaymenttext">CHOOSE PAYMENT</p></div>
        </div>
        
        </>
        
        )
}

export default Address