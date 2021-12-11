import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Address from './components/address/Address';
import Description from './components/description/Description';
//import Address from './components/address/Address'
import Payment from './components/payment/Payment';
import FinalPayment from './components/finalpay/FinalPayment';



ReactDOM.render(
  <React.StrictMode>
     <App/> 
    {/* <Description/> */}
    {/* <Payment/> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);
