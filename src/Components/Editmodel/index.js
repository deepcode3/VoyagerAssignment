/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
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

const EditModal = ({ setOpen }) => {
  const { editProfile } = useContext(AccountsContext);
  const { currentUser, setUser } = useContext(UserContext);

  const initialFormData = Object.freeze({
    username: '',
    fullname: '',
    mobilenumber: '',
  });
  const [values, setValues] = useState(initialFormData);
  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editProfile({
      email: currentUser.email,
      username: values.username,
      firstname: currentUser.firstname,
      lastname: currentUser.lastname,
      mobilenumber: `${currentUser.countrycode}-${values.mobilenumber}`,
    });
    setUser({
      countrycode: '991',
      email: currentUser.email,
      firstname: values.username,
      lastname: currentUser.lastname,
      mobile: `${currentUser.countrycode}-${values.mobilenumber}`,
      password: '123',
      username: 'username',
    });
    setValues({
      username: '',
      fullname: '',
      mobilenumber: '',
    });
  };
  return (
    <ModalBack>
      <div className='ModalContainer'>
        <span className='edit'> Edit Profile</span>

        <div className='card'>
          <div className='rectangle-3 '>
            <div className='mask'>
              <img src={profilePic} alt='pic' className='profile_img' />
              <img src={icnAddPhoto} alt='add_photo' className='pic' />
            </div>
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <div className='field'>
              <label className='label'>Username</label>
              <input
                type='text'
                className='input'
                placeholder='Abdulla'
                name='username'
                value={values.username}
                required
                onChange={handleChange}
              />
            </div>
            <div className='field'>
              <label className='label'>Name</label>
              <input
                type='text'
                className='input'
                placeholder='Abdulla Mohammad'
                name='fullname'
                value={values.fullname}
                required
                onChange={handleChange}
              />
            </div>
            <div className='field'>
              <label className='label'>Phone Number</label>
              <input
                type='text'
                className='input'
                placeholder='7975312513'
                name='mobilenumber'
                value={values.mobilenumber}
                required
                onChange={handleChange}
              />
            </div>
            <div className='save-button'>
              <button
                className='save'
                type='submit'
                onKeyDown={null}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Save
              </button>
            </div>
          </form>
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
            <button
              className='save'
              type='submit'
              onKeyDown={null}
              onClick={() => {
                setOpen(false);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </ModalBack>
  );
};
export default EditModal;
EditModal.propTypes = {
  setOpen: PropTypes.func.isRequired,
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
    position: absolute;
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
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid #4a4a4a;
    opacity: 0.53;
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
