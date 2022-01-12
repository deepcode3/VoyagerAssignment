/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import icnAddPhoto from '../../Assets/Icons/icn_add_photo.png';
import profilePic from '../../Assets/Images/profile_pic.png';
import icnBeer from '../../Assets/Icons/icn_beer.png';
import icnBread from '../../Assets/Icons/icn_bread.png';
import icnBurger from '../../Assets/Icons/icn_burger.png';
import icnChicken from '../../Assets/Icons/icn_chicken.png';
import icnCupcake from '../../Assets/Icons/icn_cupcake.png';
import icnDonut from '../../Assets/Icons/icn_donut.png';
import icnFrenchfries from '../../Assets/Icons/icn_frenchfries.png';
import icnIcecream from '../../Assets/Icons/icn_icecream.png';
import icnPizza from '../../Assets/Icons/icn_pizza.png';
import { AccountsContext } from '../../Context/AccountsContext';
import { UserContext } from '../../Context/UserContext';
import InputField from '../LoginComponents/InputField';
import StyledButton from '../CommonButton/index';
import OutsideAlerter from '../OutsideClickAlerter';

const EditModal = ({ setOpen }) => {
  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    mobilenumber: yup.string().required('mobile number is required'),
    fullname: yup.string().required('Name is required'),
  });
  const { editProfile } = useContext(AccountsContext);
  const { currentUser, setUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log(data);
    editProfile({
      email: currentUser.email,
      username: data.username,
      fullname: data.fullname,
      mobilenumber: data.mobilenumber,
    });
    setUser({
      countrycode: data.mobilenumber.split(' ')[0],
      email: currentUser.email,
      firstname: data.fullname.split(' ')[0],
      lastname: data.fullname.split(' ')[1],
      mobile: data.mobilenumber.split(' ')[1],
      password: currentUser.password,
      username: data.username,
    });
    setOpen(false);
  };
  return (
    <ModalBack>
      <div className='ModalContainer'>
        <span className='edit'> Edit Profile</span>
        <OutsideAlerter
          handlePress={() => {
            return setOpen(false);
          }}
        >
          <form className='card' onSubmit={handleSubmit(submitForm)}>
            <div className='left'>
              <div className='rectangle-3 '>
                <div className='mask'>
                  <img src={profilePic} alt='pic' className='profile_img' />
                  <img src={icnAddPhoto} alt='add_photo' className='pic' />
                </div>
              </div>
              <div className='data'>
                <InputField
                  name='username'
                  register={register}
                  msg={errors.username?.message}
                  label='Username'
                />
                <InputField
                  name='fullname'
                  register={register}
                  msg={errors.fullname?.message}
                  label='Name'
                />
                <InputField
                  name='mobilenumber'
                  register={register}
                  msg={errors.mobilenumber?.message}
                  label='Phone Number'
                />
              </div>
            </div>
            <div className='right'>
              <hr className='line-3' />
              <span className='avtar_text'>Choose a user avatar</span>
              <div className='avtars'>
                <img src={icnBeer} alt='avtars' />
                <img src={icnBread} alt='avtars' />
                <img src={icnBurger} alt='avtars' />
                <img src={icnChicken} alt='avtars' />
                <img src={icnCupcake} alt='avtars' />
                <img src={icnDonut} alt='avtars' />
                <img src={icnFrenchfries} alt='avtars' />
                <img src={icnIcecream} alt='avtars' />
                <img src={icnPizza} alt='avtars' />
              </div>
              <div className='save-button'>
                <StyledButton type='submit'>SAVE</StyledButton>
              </div>
            </div>
          </form>
        </OutsideAlerter>
      </div>
    </ModalBack>
  );
};
export default EditModal;
EditModal.propTypes = {
  setOpen: PropTypes.bool.isRequired,
};

const ModalBack = styled.div`
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: auto;
  display: ${({ open }) => {
    return open ? 'block' : 'flex';
  }};
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  .ModalContainer {
    height: 666px;
    width: 962px;
  }
  .edit {
    height: 24px;
    color: #ffffff;
    font-family: 'Open Sans';
    font-size: 18px;
    letter-spacing: -0.3px;
    line-height: 24px;
  }
  .dismiss-button {
    height: 12px;
    width: 12px;
    position: absolute;
    right: 13px;
    top: 13px;
  }
  .left {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .data {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 30%;
    margin-top: 35%;
  }
  .card {
    height: 628px;
    width: 961px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: start;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .mask {
    box-sizing: border-box;
    height: 109px;
    width: 109px;
    border: 3px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
    left: 100px;
    top: 50px;
    position: absolute;
    background-color: red;
  }

  .profile_img {
    height: 100%;
    width: 100%;
    display: inline-block;
    //background-image: url("profile_pic ");
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 50%;
    z-index: 1;
    position: absolute;
  }
  .pic {
    height: 39px;
    width: 39px;
    z-index: 2;
    position: absolute;
    top: 75px;
    left: 79px;
  }
  .form {
    display: flex;
    top: 204px;
    left: 84px;
  }
  .field {
    height: 67px;
    width: 335px;
  }
  .label {
    height: 17px;
    width: 20px;
    color: #858585;
    font-family: 'Open Sans';
    font-size: 12px;
    letter-spacing: -0.24px;
    line-height: 17px;
  }
  input[type='text'] {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid #4a4a4a;
    opacity: 0.53;
    margin-bottom: 10px;
  }
  .line-3 {
    box-sizing: border-box;
    height: 346px;
    width: 2px;
    border: 1px solid #a4a4a4;
    opacity: 0.53;
    position: absolute;
    top: 125px;
  }
  .avtar_text {
    height: 24px;
    width: 177px;
    color: #000000;
    font-family: 'Open Sans';
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 118px;
    left: 563px;
  }
  .avtars {
    height: 311px;
    width: 303px;
    position: absolute;
    top: 165px;
    left: 563px;
  }
  .save-button {
    height: 50px;
    width: 158px;
    border-radius: 6px;
    background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
    box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 541px;
    left: 723px;
  }
  .save {
    height: 22px;
    width: 37px;
    color: #ffffff;
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.56px;
    line-height: 22px;
    text-align: center;
    text-shadow: 0 0 9px 0 #ffffff;
  }
`;
