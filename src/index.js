import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Description from './components/description/Description';
import Address from './components/address/Address'
//import Payment from './components/payment/Payment';
//import FinalPayment from './components/finalpay/FinalPayment';


ReactDOM.render(
  <React.StrictMode>
    <Description/>
    
  </React.StrictMode>,
  document.getElementById('root')
);
