import { React, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';

import StyledButton from '../../Components/CommonButton/index';
import InputField from '../../Components/LoginComponents/InputField';
import TelephonePicker from '../../Components/TelephonePicker/index';
import BackIcon from '../../Assets/Icons/back_icon.png';
import { AccountsContext } from '../../Context/AccountsContext';

Modal.setAppElement('#root');
const GetDetails = ({ setPageStatus, email, setName }) => {
  const { addAccount } = useContext(AccountsContext);
  const [selectedCode, setSelectedCode] = useState('91');
  const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    mobile: yup
      .string()
      .matches(/^[0-9]+$/, {
        message: 'Phone not valid',
        excludeEmptyString: true,
      })
      .matches(/^\d{10}$/, {
        message: 'Phone not valid',
        excludeEmptyString: true,
      }),
    password: yup.string().required('Password is required'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    setName(data.firstName);
    if (data.mobile === '') {
      addAccount({
        firstname: data.firstName,
        lastname: data.lastName,
        email,
        password: data.password,
      });
    } else {
      addAccount({
        firstname: data.firstName,
        lastname: data.lastName,
        email,
        password: data.password,
        countrycode: selectedCode,
        mobile: data.mobile,
      });
    }
    setPageStatus('welcome-page');
  };
  return (
    <Wrapper>
      <BackButton
        onClick={() => {
          return setPageStatus('otp-verification');
        }}
      >
        <img className='backArrow' src={BackIcon} alt='back' />
      </BackButton>
      <BlackText>Verified! </BlackText>
      <Description>Your Email is verified.</Description>
      <Description>Finally enter details below to create account.</Description>
      <DataContainer onSubmit={handleSubmit(submitForm)}>
        <InputField
          name='firstName'
          register={register}
          msg={errors.firstName?.message}
          label='First Name'
        />
        <InputField
          name='lastName'
          register={register}
          msg={errors.lastName?.message}
          label='Last Name'
        />
        <TelephonePicker
          name='mobile'
          register={register}
          msg={errors.mobile?.message}
          label='Enter mobile number (optional)'
          selectedCode={selectedCode}
          setSelectedCode={setSelectedCode}
        />
        <InputField
          name='password'
          register={register}
          msg={errors.password?.message}
          label='Create Password'
        />
        <StyledButton type='submit'>DONE</StyledButton>
      </DataContainer>
    </Wrapper>
  );
};
export default GetDetails;
GetDetails.propTypes = {
  setPageStatus: PropTypes.func,
  email: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};
GetDetails.defaultProps = {
  setPageStatus: () => {},
};

const Wrapper = styled.div`
  background-color: white;
  height: 588px;
  width: 480px;
  display: flex;
  flex-direction: column;
  border-radius: 0 7px 7px 0;
  align-items: center;
`;
const BackButton = styled.button`
  height: 17px;
  width: 17px;
  background-color: transparent;
  border: none;
  margin-right: 95%;
  margin-top: 1%;
  cursor: pointer;
  .backArrow {
    height: 17px;
    width: 17px;
  }
`;
const DataContainer = styled.form`
  height: 77%;
  width: 100%;
  margin-bottom: 1%;
  margin-top: 1.5%;
  margin-left: 21%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const BlackText = styled.p`
  height: 1%;
  width: 100%;
  color: #2a2c30;
  font-family: 'Open Sans', sans-serif;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10%;
  text-shadow: 1px 0 #2a2c30;
  letter-spacing: 0.5px;
`;
const Description = styled.p`
  width: 100%;
  color: #4a4a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  letter-spacing: -0.24px;
  line-height: 19px;
  text-align: center;
  font-weight: 100;
  padding: 0;
  margin: 0;
`;
