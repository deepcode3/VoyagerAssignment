/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import visaicon from '../../Assets/Icons/visaicon.png';

const Model = ({ setOpen, values, setValues, addItem }) => {
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
    addItem(values);
    setValues({
      cardDigit: '',
      Name: '',
      expiaryDate: '',
      expiaryYear: '',
      securityNumber: '',
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
          <h1 className='add-new-card '>Add New Card</h1>
        </div>
        <div className='enter-cards'>
          <div className='card-body'>
            <span className='enter-credit'>Enter Credit/Debit card details</span>
            <form onSubmit={handleSubmit}>
              <div className='field'>
                <label className='label'>Card Nvmber</label>
                <input
                  className='input'
                  type='text'
                  name='cardDigit'
                  value={values.cardDigit}
                  onChange={handleChange}
                  placeholder='4022 8888 8888 1881'
                  required
                />
                <img src={visaicon} className='Visaicon' alt='visa' />
                <div className='line' />
              </div>
              <div className='field-1'>
                <label className='label'>Holder Name</label>
                <input
                  type='text'
                  name='Name'
                  value={values.Name}
                  className='input'
                  placeholder='Abdullah'
                  onChange={handleChange}
                  required
                />
                <div className='line' />
              </div>
              <div className='field-2'>
                <div className='extra'>
                  <label className='label-1'>Expiray Date</label>
                  <input
                    type='text'
                    name='expiaryDate'
                    value={values.expiaryDate}
                    className='input-1'
                    placeholder='11'
                    maxLength='2'
                    size='2'
                    onChange={handleChange}
                    required
                  />
                  <span className='dash'>/</span>
                  <input
                    type='text'
                    name='expiaryYear'
                    value={values.expiaryYear}
                    className='input-1'
                    placeholder='2021'
                    maxLength='4'
                    size='4'
                    onChange={handleChange}
                    required
                    style={{ marginLeft: '60px' }}
                  />
                  <label className='label-2'>Security card</label>
                  <input
                    type='text'
                    name='securityNumber'
                    value={values.securityNumber}
                    className='input-2'
                    placeholder='XXX'
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='add-this-card-to-sav'>
                {/* <img
                  src={icnSaveCardUnchecked}
                  alt='checked_icn'
                  style={{ paddingRight: '10px', color: '#5fb700' }}
                /> */}
                <input type='radio' className='save-check' />
                <span> Add this card to saved cards</span>
              </div>
              <div className='rectangle-copy'>
                <button className='save-address' type='submit'>
                  SAVE Card
                </button>
              </div>
            </form>
          </div>
        </div>
      </ModalContainer>
    </ModalBack>
  );
};
export default Model;

Model.propTypes = {
  setOpen: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  addItem: PropTypes.func.isRequired,
};

const ModalBack = styled.div`
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
  height: 592px;
  width: 580px;
  //height: 552px;
  //width: 530px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  //padding: 40px;
  @media screen and (max-width: 500px) {
    display: block;
    width: 350px;
  }
  .dismiss-button {
    height: 12px;
    width: 12px;
    position: absolute;
    right: 13px;
    top: 13px;
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
    @media screen and (max-width: 500px) {
      left: 83px;
    }
  }
  .add-new-card {
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
  .card-body {
    position: relative;
    @media screen and (max-width: 500px) {
    }
  }
  .enter-cards {
    height: 459px;
    width: 560px;
    position: absolute;
    padding-left: 30px;
    top: 100px;
    @media screen and (max-width: 500px) {
      width: 300px;
      margin-left: 10px;
    }
  }

  .enter-credit {
    height: 23px;
    width: 227px;
    color: #000000;
    font-family: 'Open Sans';
    font-size: 17px;
    letter-spacing: -0.41px;
    line-height: 23px;
    @media screen and (max-width: 500px) {
    }
  }

  .input {
    height: 22px;
    width: 154px;
    color: #4a4a4a;
    font-family: 'Open Sans';
    font-size: 16px;
    letter-spacing: -0.27px;
    line-height: 22px;
    position: absolute;
    top: 28px;
    left: 0px;
    margin: 0px;
    border: 0px;
    outline: none;
    @media screen and (max-width: 500px) {
    }
  }
  .line {
    box-sizing: border-box;
    height: 2px;
    width: 334px;
    border: 1px solid #000000;
    opacity: 0.53;
    position: absolute;
    bottom: 0px;
    @media screen and (max-width: 500px) {
    }
  }
  .input-image {
    height: 12px;
    width: 40px;
    padding: 41px 0 0 200px;
    @media screen and (max-width: 500px) {
      padding: 20px 0 0 100px;
    }
  }
  .label {
    height: 17px;
    width: 20px;
    color: #858585;
    font-family: 'Open Sans';
    font-size: 12px;
    letter-spacing: -0.24px;
    line-height: 17px;
    @media screen and (max-width: 500px) {
    }
  }
  .field {
    height: 67px;
    width: 502px;
    position: absolute;
    top: 39px;
    @media screen and (max-width: 500px) {
      width: 300px;
    }
  }
  .field-1 {
    height: 67px;
    width: 502px;
    position: absolute;
    top: 130px;
    @media screen and (max-width: 500px) {
      width: 300px;
    }
  }
  .field-2 {
    height: 67px;
    width: 502px;
    position: absolute;
    top: 221px;
    @media screen and (max-width: 500px) {
      width: 300px;
    }
  }
  .extra {
    height: 67px;
    width: 502px;
    position: relative;
    @media screen and (max-width: 500px) {
    }
  }
  .label-1 {
    height: 17px;
    //width: 20px;
    color: #858585;
    font-family: 'Open Sans';
    font-size: 12px;
    letter-spacing: -0.24px;
    line-height: 17px;
    position: absolute;
    top: 0px;
    @media screen and (max-width: 500px) {
    }
  }
  .label-2 {
    height: 17px;
    //width: 20px;
    color: #858585;
    font-family: 'Open Sans';
    font-size: 12px;
    letter-spacing: -0.24px;
    line-height: 17px;
    position: absolute;
    top: 0px;
    left: 160px;
    @media screen and (max-width: 500px) {
    }
  }
  .input-1[type='text'] {
    width: 8%;
    padding: 12px 0;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid #4a4a4a;
    opacity: 0.53;
    position: absolute;
    top: 18px;
    @media screen and (max-width: 500px) {
    }
  }
  .input-2[type='text'] {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid #4a4a4a;
    opacity: 0.53;
    position: absolute;
    top: 18px;
    left: 160px;
    @media screen and (max-width: 500px) {
      width: 28%;
    }
  }
  .dash {
    position: absolute;
    top: 35px;
    left: 47px;
    @media screen and (max-width: 500px) {
    }
  }
  .line {
    box-sizing: border-box;
    height: 2px;
    width: 498px;
    border: 1px solid #4a4a4a;
    opacity: 0.53;
    @media screen and (max-width: 500px) {
      width: 300px;
    }
  }
  .add-this-card-to-sav {
    height: 22px;
    width: 260px;
    color: #070707;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 19px;
    position: absolute;
    top: 320px;
    left: 0px;
    @media screen and (max-width: 500px) {
    }
  }
  .save-check {
    border: 2px solid white;
    box-shadow: 0 0 0 1px #5fb700;
    appearance: none;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    transition: all ease-in 0.2s;
  }
  .save-check:checked {
    background-color: #5fb700;
  }
  .green {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #5fb700;
  }
  .rectangle-copy {
    height: 50px;
    width: 335px;
    border-radius: 4px;
    background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
    box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
    text-align: center;
    position: absolute;
    left: 97px;
    top: 370px;
    @media screen and (max-width: 500px) {
      width: 235px;
      left: 27px;
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
