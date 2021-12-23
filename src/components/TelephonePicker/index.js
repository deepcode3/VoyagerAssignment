/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import iconDropdown from '../../assets/icons/icon_dropdown.png';
import array from './data';
import OutsideAlerter from '../OutsideClickAlerter';

// eslint-disable-next-line object-curly-newline
const TelephonePicker = ({ name, register, msg, label, selectedCode, setSelectedCode }) => {
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('india');
  const handleSelection = (e) => {
    setSelectedCountry(e.currentTarget.id);
    setSelectedCode(
      array.find((element) => {
        return element.country === e.currentTarget.id;
      }).code
    );
    setDropDownStatus(false);
  };

  return (
    <FormContainerTel>
      <Label>{label}</Label>
      <MobileNumberContainer>
        <OptionSelected>
          <OptionWrapper>
            <Flag src={`/assets/images/${selectedCountry}.png`} />
            <Code>{`+${selectedCode}`}</Code>
          </OptionWrapper>
          <DropDown
            src={iconDropdown}
            onClick={() => {
              setDropDownStatus(true);
            }}
          />
        </OptionSelected>
        {dropDownStatus ? (
          <OutsideAlerter
            handlePress={() => {
              return setDropDownStatus(false);
            }}
          >
            <DropDownContainer>
              <DropDownWindow>
                {array.map((element) => {
                  return (
                    <OptionWrapper
                      key={element.country}
                      id={element.country}
                      onClick={(e) => {
                        return handleSelection(e);
                      }}
                    >
                      <Flag src={`/assets/images/${element.country}.png`} />
                      <Code>{`+${element.code}`}</Code>
                    </OptionWrapper>
                  );
                })}
              </DropDownWindow>
            </DropDownContainer>
          </OutsideAlerter>
        ) : null}
        <MobileNumber name={name} {...register(name)} />
      </MobileNumberContainer>
      {msg !== undefined ? <p className='error'>{msg}</p> : null}
    </FormContainerTel>
  );
};
export default TelephonePicker;
TelephonePicker.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  msg: PropTypes.string,
  label: PropTypes.string.isRequired,
  selectedCode: PropTypes.string.isRequired,
  setSelectedCode: PropTypes.func.isRequired,
};
TelephonePicker.defaultProps = {
  msg: undefined
};
const FormContainerTel = styled.div`
  position: relative;
  height: 53px;
  width: 380px;

  .error {
    margin-top: 3px;
    margin-left: 34%;
    color: #ed1b2e;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.2px;
  }
`;
const MobileNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const DropDown = styled.img`
  height: 7px;
  width: 11px;
  margin-top: 8px;
  margin-left: 10px;
`;
const MobileNumber = styled.input`
  top: 0;
  height: 90%;
  width: 65%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #a4a4a4;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: -0.27px;
  line-height: 22px;
  outline: none;
  pointer-events: all;
  padding-bottom: 5%;
  :focus {
    border-bottom: 1px solid black;
  }
`;
const Label = styled.label`
  width: 86.36px;
  color: #858585;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.8rem;
  letter-spacing: -0.27px;
  line-height: 22px;
  cursor: text;
  pointer-events: none;
  top: -0.5rem;
  position: relative;
`;
const DropDownWindow = styled.div`
  overflow-y: scroll;
  top: 0;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: white;
    margin-top: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #808087;
  }
`;
const OptionWrapper = styled.div`
  height: 20px;
  width: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const Flag = styled.img`
  height: 20px;
  width: 29px;
`;
const Code = styled.p`
  color: #000000;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: -0.27px;
  line-height: 22px;
  font-weight: 100;
  margin-top: 0;
`;
const OptionSelected = styled.div`
  border-bottom: 1px solid #a4a4a4;
  width: 90px;
  display: flex;
  flex-direction: row;
`;
const DropDownContainer = styled.div`
  z-index: 99;
  position: absolute;
  background-color: rgb(210, 210, 210);
  width: 80px;
  padding: 10px;
  display: flex;
  height: 100px;
  justify-content: space-around;
  flex-direction: column;
  top: 0;
  margin-top: -5px;
`;
