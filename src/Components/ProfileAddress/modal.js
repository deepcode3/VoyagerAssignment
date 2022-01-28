/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Geocode from 'react-geocode';
import locationImg from '../../Assets/Icons/location.png';
import gps from '../../Assets/Icons/gps.png';
// import { LocationSetter } from '../homeComponents/searchbar';
import { addAddress } from '../../Actions/AddressActions';
import { findIndex } from '../../Utils';

const Model = ({ setOpen, values, setValues }) => {
  const index = findIndex();
  const dispatch = useDispatch();
  console.log(values);
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
    dispatch(addAddress(values, index));
    setValues({
      location: '',
      city: '',
      area: '',
      address: '',
      addressLabel: '',
    });
    setOpen(false);
  };
  const findMyLocation = () => {
    navigator.geolocation.watchPosition((pos) => {
      const Longitude = pos.coords.longitude;
      const Latitude = pos.coords.latitude;
      Geocode.setApiKey('AIzaSyB2LQDL0xgHE_xT-TvAlZ-2Xhil3R8btLo');
      Geocode.setLanguage('en');
      Geocode.setLocationType('ROOFTOP');
      Geocode.fromLatLng(Latitude, Longitude).then(
        (response) => {
          const address = response.results[0].formatted_address;
          console.log(address);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  };
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
        <form onSubmit={handleSubmit}>
          <div className='location_settter'>
            <img src={locationImg} alt='location' className='icn_pin' />
            <input
              className='location-1'
              type='text'
              name='location'
              value={values.location}
              onChange={handleChange}
              placeholder='Downtown Burj Khalifa, Dubai.'
              required
            />
            <img
              src={gps}
              className='icn_gps'
              alt='gpstracker'
              onClick={findMyLocation}
              onKeyDown={null}
            />
          </div>
          <div className='field'>
            <label className='label'>City</label>
            <input
              id='city'
              className='input'
              value={values.city}
              required
              onChange={handleChange}
              name='city'
              type='text'
              placeholder='Dubai'
            />
          </div>
          <div className='field-1'>
            <label className='label'>Area</label>
            <input
              type='text'
              className='input'
              placeholder='52 street'
              value={values.area}
              required
              onChange={handleChange}
              name='area'
            />
          </div>
          <div className='field-2'>
            <label className='label'>Address</label>
            <input
              type='text'
              className='input'
              placeholder='Sheikh Zayed Rd'
              value={values.address}
              required
              onChange={handleChange}
              name='address'
            />
          </div>
          <div className='field-3'>
            <label className='label'>Address label</label>
            <input
              type='text'
              className='input'
              placeholder='home'
              value={values.addressLabel}
              required
              onChange={handleChange}
              name='addressLabel'
            />
          </div>
          <div className='rectangle-copy'>
            <button className='save-address' type='submit'>
              submit
            </button>
          </div>
        </form>
      </ModalContainer>
    </ModalBack>
  );
};
export default Model;
Model.propTypes = {
  setOpen: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
};

const ModalBack = styled.div`
  height: 100%;
  width: 100%;
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
  @media screen and (max-width: 700px) {
    height: 650px;
    width: 380px;
  }
  @media screen and (max-width: 500px) {
    display: block;
    height: 650px;
    width: 300px;
  }
  .dismiss-button {
    height: 12px;
    width: 12px;
    position: absolute;
    right: 13px;
    top: 13px;
    @media screen and (max-width: 700px) {
      height: 28px;
      width: 28px;
      right: 18px;
      top: 18px;
    }
    @media screen and (max-width: 500px) {
      height: 20px;
      width: 20px;
    }
  }
  .navbar {
    height: 33px;
    width: 193px;
    position: absolute;
    text-align: center;
    top: 43px;
    left: 183px;
    @media screen and (max-width: 700px) {
      left: 143px;
    }
    @media screen and (max-width: 500px) {
      position: absolute;
      top: 43px;
      left: 93px;
    }
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
    @media screen and (max-width: 500px) {
      font-size: 20px;
    }
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
    @media screen and (max-width: 700px) {
      left: 40px;
      width: 390px;
    }
    @media screen and (max-width: 500px) {
      left: 40px;
      width: 290px;
    }
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
    @media screen and (max-width: 500px) {
      width: 200px;
    }
  }
  .icn_gps {
    height: 20px;
    width: 20px;
    margin-left: 200px;
    @media screen and (max-width: 700px) {
      margin-left: 70px;
    }
    @media screen and (max-width: 500px) {
      margin-left: 55px;
    }
  }
  .input[type='text'] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid #4a4a4a;
    opacity: 0.53;}
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
    @media screen and (max-width: 700px) {
      width: 380px;
    }
    @media screen and (max-width: 500px) {
      width: 300px;
    }
  }
  .field-1 {
    height: 67px;
    width: 502px;
    position: absolute;
    top: 310px;
    @media screen and (max-width: 700px) {
      width: 380px;
    }
    @media screen and (max-width: 500px) {
      width: 300px;
    }
  }
  .field-2 {
    height: 67px;
    width: 502px;
    position: absolute;
    top: 401px;
    @media screen and (max-width: 700px) {
      width: 380px;
    }
    @media screen and (max-width: 500px) {
      width: 300px;
    }
  }
  .field-3 {
    height: 67px;
    width: 502px;
    position: absolute;
    top: 492px;
    @media screen and (max-width: 700px) {
      width: 380px;
    }
    @media screen and (max-width: 500px) {
      width: 300px;
    }
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
    @media screen and (max-width: 700px) {
      width: 260px;
      left: 95px;
    }
    @media screen and (max-width: 500px) {
      width: 205px;
      position: absolute;
      left: 95px;
    }
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
    padding: 0;
    border: none;
    background: none;
  }
`;
