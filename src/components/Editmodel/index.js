/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import icnAddPhoto from '../../assets/icons/icn_add_photo.png';
import profilePic from '../../assets/images/profile_pic.png';
import icnBeer from '../../assets/icons/icn_beer.png';
import icnBread from '../../assets/icons/icn_bread.png';
import icnBurger from '../../assets/icons/icn_burger.png';
import icnChicken from '../../assets/icons/icn_chicken.png';
import icnCupcake from '../../assets/icons/icn_cupcake.png';
import icnDonut from '../../assets/icons/icn_donut.png';
import icnFrenchfries from '../../assets/icons/icn_frenchfries.png';
import icnIcecream from '../../assets/icons/icn_icecream.png';
import icnPizza from '../../assets/icons/icn_pizza.png';

const EditModal = ({ setOpen }) => {
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
          <form className='form'>
            <div className='field'>
              <label className='label'>Username</label>
              <input type='text' className='input' placeholder='Abdulla' />
            </div>
            <div className='field'>
              <label className='label'>Name</label>
              <input type='text' className='input' placeholder='Abdulla Mohammad' />
            </div>
            <div className='field'>
              <label className='label'>Phone Number</label>
              <input type='text' className='input' placeholder='7975312513' />
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
            <span
              className='save'
              onClick={() => {
                setOpen(false);
              }}
              role='button'
              onKeyDown={null}
            >
              Save
            </span>
          </div>
        </div>
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