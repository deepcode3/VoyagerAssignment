/* eslint-disable jsx-a11y/interactive-supports-focus */
import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import CommonHeader from '../headercommon/CommonHeader';
import TelephonePicker from '../TelephonePicker/index';
import delivericon from '../../assets/icons/delivericon.png';
import pickupicon from '../../assets/icons/pickupicon.png';
import addnewbtn from '../../assets/icons/button.png';
import './Address.css';

const CartAddress = () => {
  const mobileSchema = yup.object().shape({
    mobile: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(10, 'Invalid mobile number')
      .max(10, 'Invalid mobile number'),
  });
  const [selectedCode, setSelectedCode] = useState('91');
  const {
    register: register2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: yupResolver(mobileSchema),
  });
  const usecheck = () => {
    return null;
  };

  const history = useHistory();

  return (
    <div className='addressbody'>
      <CommonHeader />
      <div className='adress'>
        <p className='addressheading'>Choose Address</p>
      </div>
      <div className='addresscontainer'>
        <div className='preferencetext'>
          <p className='preference'>How would you like us to get your meal to you?</p>
        </div>
        <div className='deliveryoptiondiv'>
          <div className='deliverdiv'>
            <div className='deliver'>
              <img src={delivericon} className='scootericon' alt='deliveryicon' />
            </div>

            <input
              type='radio'
              value='delivertome'
              name='deliveryoption'
              className='delivertomebtn'
            />
            <p className='delivertometxt'>Deliver to me</p>
          </div>
          <div className='pickupdiv'>
            <div className='pickup'>
              <img src={pickupicon} className='pickupicon' alt='pickupicon' />
            </div>
            <input type='radio' value='pickup' name='deliveryoption' className='pickupbtn' />
            <p className='pickuptext'>Pick up</p>
          </div>
        </div>
        <div className='myadd'>
          <p className='myaddtxt'>
            My Addresses
            <span>(2)</span>
          </p>
        </div>
        <div className='addnew'>
          <img src={addnewbtn} className='addnewbtn' alt='adnewbtn' />
          <p className='addnewtext'>ADD NEW</p>
          <div className='homeaddressdiv' onClick={usecheck} role='button' onKeyDown={null}>
            <p className='home'>Home</p>

            <div className='checkeraddress'>
              <input type='checkbox' className='officeradio' name='addcheck' />
            </div>
            <p className='addressline'>Downtown Burj Khalifa, Dubai, UAE</p>
            <div className='editbtn'>Edit</div>
            <div className='deletebtn'>Delete</div>
          </div>

          <div className='officeaddressdiv'>
            <p className='office'>Office</p>
            <input type='checkbox' name='addcheck' className='homecheck' />

            <p className='addressline'>Downtown Burj Khalifa, Dubai, UAE</p>
            <div className='editbtn1'>Edit</div>
            <div className='deletebtn1'>Delete</div>
          </div>
        </div>
        <form className='contactdetailsdiv'>
          <p className='contactdetails'>Contact Details</p>
          <div className='namediv'>
            <p className='name'>Name</p>
            <input name='name' type='text' className='personname' />
            <div className='blackline' />
          </div>
          <div className='mobnumdiv'>
            <TelephonePicker
              name='mobile'
              register={register2}
              msg={errors2.mobile.message}
              label='Mobile no.'
              selectedCode={selectedCode}
              setSelectedCode={setSelectedCode}
            />
          </div>
        </form>
        <div className='delins'>
          <p className='deliveryins'>Delivery Instructions?</p>
        </div>
        <div className='mention'>
          <textarea type='text' placeholder='Mention it here...' className='mntn' />
          <div className='mentiongreyline1' />
        </div>
        <div
          className='aBackbuttondiv'
          onClick={() => {
            return history.goBack('/description');
          }}
          role='button'
          onKeyDown={null}
        >
          <p className='aBACKtext'>BACK</p>
        </div>
        <div
          className='aChoosepayment'
          onClick={() => {
            return history.push('/payment');
          }}
          role='button'
          onKeyDown={null}
        >
          <p className='aChoosepaymenttext'>CHOOSE PAYMENT</p>
        </div>
      </div>
    </div>
  );
};

export default CartAddress;
