/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import icnPin from '../../assets/icons/icn_pin.png';
import icnGpsIndicator from '../../assets/icons/icn_gps_indicator.png';

const Model = ({ setOpen }) => {
  return (
    <ModalBack>
      <ModalContainer>
        <span
          onClick={() => {
            setOpen(false);
          }}
          className='dismiss-button'
          role='button'
          onKeyDown={null}
        >
          X
        </span>
        <div className='navbar'>
          <h1 className='add-new-address '>Add new address</h1>
        </div>
        <form>
          <div className='location_settter '>
            <img src={icnPin} alt='location' className='icn_pin' />
            <input
              type=''
              id=''
              name=''
              className='location-1'
              placeholder='Downtown Burj Khalifa, Dubai.'
            />
            <img src={icnGpsIndicator} alt='gps' className='icn_gps' />
          </div>
          <div className='field'>
            <label className='label'>City</label>
            <input type='text' value='' placeholder='' className='input' />
          </div>
          <div className='field-1'>
            <label className='label'>Area</label>
            <input type='text' className='input' placeholder='' />
          </div>
          <div className='field-2'>
            <label className='label'>Address</label>
            <input type='text' className='input' />
          </div>
          <div className='field-3'>
            <label className='label'>Address label</label>
            <input type='text' className='input' />
          </div>
        </form>
        <div className='rectangle-copy'>
          <span className='save-address' type='button'>
            SAVE ADDRESS
          </span>
        </div>
      </ModalContainer>
    </ModalBack>
  );
};
export default Model;
Model.propTypes = {
  setOpen: PropTypes.bool.isRequired,
};

const ModalBack = styled.div`
  height: 100%;
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
`;

const ModalContainer = styled.div`
  height: 650px;
  width: 530px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  position: relative;
  .dismiss-button {
    height: 12px;
    width: 12px;
    position: absolute;
    right: 13px;
    top: 13px;
  }
  .navbar {
    height: 33px;
    width: 193px;
    position: absolute;
    text-align: center;
    top: 43px;
    left: 183px;
  }
  .add-new-address {
    height: 33px;
    width: 193px;
    color: #4c4c4c;
    font-family: 'Open Sans';
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.34px;
    line-height: 33px;
    margin: 0 auto;
  }
  .location_settter {
    height: 70px;
    width: 502px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    position: absolute;
    top: 121px;
    left: 42px;
  }
  .icn_pin {
    padding: 10px;
  }
  .location-1 {
    height: 19px;
    width: 230px;
    color: #4c4c4c;
    font-family: 'Open Sans';
    font-size: 14px;
    letter-spacing: -0.24px;
    line-height: 19px;
    border: none;
  }
  .icn_gps {
    height: 20px;
    width: 20px;
    margin-left: 200px;
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
  .label {
    height: 17px;
    width: 20px;
    color: #858585;
    font-family: 'Open Sans';
    font-size: 12px;
    letter-spacing: -0.24px;
    line-height: 17px;
  }
  .field {
    height: 67px;
    width: 502px;
    position: absolute;
    top: 219px;
  }
  .field-1 {
    height: 67px;
    width: 502px;
    position: absolute;
    top: 310px;
  }
  .field-2 {
    height: 67px;
    width: 502px;
    position: absolute;
    top: 401px;
  }
  .field-3 {
    height: 67px;
    width: 502px;
    position: absolute;
    top: 492px;
  }
  .line {
    box-sizing: border-box;
    height: 2px;
    width: 498px;
    border: 1px solid #4a4a4a;
    opacity: 0.53;
  }
  .rectangle-copy {
    height: 50px;
    width: 335px;
    border-radius: 4px;
    background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
    box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
    text-align: center;
    position: absolute;
    left: 118px;
    bottom: 50px;
  }
  .save-address {
    height: 19px;
    width: 101px;
    color: #ffffff;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 50px;
    text-align: center;
  }
`;
