import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Address from './components/address/Address';
import Description from './components/description/Description';
//import Address from './components/address/Address'
import Payment from './components/payment/Payment';
import FinalPayment from './components/finalpay/FinalPayment';
import CommonHeader from './components/headercommon/CommonHeader';
import Address from './components/address/Address';
import CartHome from './components/carthome/CartHome';



ReactDOM.render(
  <React.StrictMode>
     <App/> 
    {/* <Description/> */}
    {/* <Payment/> */}
    {/* <CommonHeader/> */}
    {/* <Address/> */}
    {/* <FinalPayment/> */}
    {/* <CartHome/> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);
