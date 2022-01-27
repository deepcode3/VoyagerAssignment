/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable  no-alert */
import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import AddressCard from './AddressCard';
import TelephonePicker from '../TelephonePicker/index';
import delivericon from '../../Assets/Icons/delivericon.png';
import pickupicon from '../../Assets/Icons/pickupicon.png';
import addnewbtn from '../../Assets/Icons/button.png';
import cactive from '../../Assets/Icons/Active state.png';
import activeline from '../../Assets/Icons/Activeline.png';
import partialActive from '../../Assets/Icons/partialactive.png';
import deactive from '../../Assets/Icons/deactive state.png';
import './Address.css';
import InputField from '../LoginComponents/InputField';

const CartAddress = () => {
  const location = useLocation();
  const currentUser = useSelector((state) => {
    return state.currentUser;
  });
  const addressItems = [...currentUser.address];
  const [selectedAddress, setSelectedAddress] = useState(addressItems[0]);
  const Schema = yup.object().shape({
    mobile: yup
      .string()
      .required('phone number is required')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(10, 'Invalid mobile number')
      .max(10, 'Invalid mobile number')
      .matches(/^[0-9]+$/, {
        message: 'Phone not valid',
        excludeEmptyString: true,
      })
      .matches(/^\d{10}$/, {
        message: 'Phone not valid',
        excludeEmptyString: true,
      }),
    name: yup.string().required('name is required'),
  });
  const [selectedCode, setSelectedCode] = useState('91');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const history = useHistory();
  const [displayAddress, setDisplayAddress] = useState(true);
  const formSubmit = (data) => {
    console.log(data);

    history.push({
      pathname: '/finalpay',
      state: {
        restaurant: location.state.restaurant,
        selectedAddress,
        deliveryType: displayAddress ? 'deliverToMe' : 'pickUp',
      },
    });
  };
  return (
    <div className='addressbg'>
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
              defaultChecked
              onClick={() => {
                setDisplayAddress(true);
              }}
            />
            <p className='delivertometxt'>Deliver to me</p>
          </div>
          <div className='pickupdiv'>
            <div className='pickup'>
              <img src={pickupicon} className='pickupicon' alt='pickupicon' />
            </div>
            <input
              type='radio'
              value='pickup'
              name='deliveryoption'
              className='pickupbtn'
              onClick={() => {
                setDisplayAddress(false);
              }}
            />
            <p className='pickuptext'>Pick up</p>
          </div>
        </div>
        {displayAddress ? (
          // eslint-disable-next-line react/jsx-wrap-multilines
          <>
            <div className='myadd'>
              <p className='myaddtxt'>
                My Addresses
                <span>{`(${addressItems.length})`}</span>
              </p>
            </div>
            <div className='addnew'>
              <img src={addnewbtn} className='addnewbtn' alt='adnewbtn' />
              <p
                onKeyDown={null}
                className='addnewtext'
                onClick={() => {
                  history.push('/profile/profile-address');
                }}
              >
                ADD NEW
              </p>
              <div className='address_container'>
                <div className='address_scroller'>
                  <ul className='list'>
                    {addressItems.map((item, index) => {
                      return (
                        <li key={index.toString()}>
                          <AddressCard
                            item={item}
                            index={index}
                            setSelectedAddress={setSelectedAddress}
                            selectedAddress={selectedAddress}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <form className='contactdetailsdiv' onSubmit={handleSubmit(formSubmit)}>
          <p className='contactdetails'>Contact Details</p>
          <div className='inputname'>
            <div className='namediv'>
              {/* {/ <p className='name'>Name</p> /} */}
              <InputField name='name' register={register} msg={errors.name?.message} label='Name' />
              {/* {/ <div className='blackline' /> /} */}
            </div>
          </div>
          <div className='mobnumdiv'>
            <TelephonePicker
              name='mobile'
              register={register}
              msg={errors.mobile?.message}
              label='Mobile no.'
              selectedCode={selectedCode}
              setSelectedCode={setSelectedCode}
            />
          </div>

          {/* <div className='delins'>
            <p className='deliveryins'>Delivery Instructions?</p>
          </div>
          <div className='mention'>
            <textarea type='text' placeholder='Mention it here...' className='mntn' />
            <div className='mentiongreyline1' />
          </div> */}
          <div
            className='aBackbuttondiv'
            onClick={() => {
              history.goBack('/description');
            }}
            role='button'
            onKeyDown={null}
          >
            <p className='aBACKtext'>BACK</p>
          </div>

          <button className='aChoosepayment' type='submit' onKeyDown={null}>
            <p className='aChoosepaymenttext'>CHOOSE PAYMENT</p>
          </button>
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
            history.goBack('/description');
          }}
          role='button'
          onKeyDown={null}
        >
          <p className='aBACKtext'>BACK</p>
        </div>
        <div
          className='aChoosepayment'
          onClick={() => {
            if (addressItems.length === 0) alert('Please select/add address to deliver');
            else {
              history.push({
                pathname: '/finalpay',
                state: {
                  restaurant: location.state.restaurant,
                  selectedAddress,
                  deliveryType: displayAddress ? 'deliverToMe' : 'pickUp',
                },
              });
            }
          }}
          role='button'
          onKeyDown={null}
        >
          <p className='aChoosepaymenttext'>CHOOSE PAYMENT</p>
        </div>
      </div>
      <div className='addressprogressbar'>
        <div className='cartactive'>
          <img src={cactive} alt='' className='Cactive' />
          <p className='acart'>Cart</p>
        </div>
        <div className='Activeeline'>
          <img src={activeline} alt='' className='cactiveline' />
        </div>
        <div className='cartactive2'>
          <img src={cactive} alt='' className='Cactive2' />
          <p className='cadresstext'>Address Details</p>
        </div>
        <div className='Paratialactiveline'>
          <img src={partialActive} alt='' className='cpartialactiveline' />
        </div>
        <div className='Deactive'>
          <img src={deactive} alt='' className='deactivestate' />
          <p className='cpaymenttext'>Payment</p>
        </div>
      </div>
    </div>
  );
};

export default CartAddress;
