import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import StyledButton from '../../Components/CommonButton/index';
import InputField from '../../Components/LoginComponents/InputField';
import TelephonePicker from '../../Components/TelephonePicker/index';
import BackIcon from '../../Assets/Icons/back_icon.png';
import { addAccount } from '../../Actions/AccountActions';

const GetDetails = ({ setPageStatus, email, setName }) => {
  const dispatch = useDispatch();
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
      dispatch(
        addAccount({
          firstname: data.firstName,
          username: data.firstName,
          lastname: data.lastName,
          email,
          password: data.password,
          cart: [],
          address: [],
          cards: [],
        })
      );
    } else {
      dispatch(
        addAccount({
          firstname: data.firstName,
          username: data.firstName,
          lastname: data.lastName,
          email,
          password: data.password,
          countrycode: selectedCode,
          mobile: data.mobile,
          cart: [],
          address: [],
          cards: [],
        })
      );
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
  @media (max-width: 850px) {
    width: 480px;
    height: 588px;
    border-radius: 0px 0px 8px 8px;
  }
  @media (max-width: 550px) {
    width: 300px;
    height: 70%;
    border-radius: 0px 0px 8px 8px;
  }
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
    @media (max-width: 550px) {
      width: 15px;
      height: 13px;
      position: relative;
      top: -220px;
    }
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
  @media (max-width: 990px) {
    margin-left: 6%;
  }
  @media (max-width: 550px) {
    height: 75%;
    margin-left: 17%;
    justify-content: space-between;
    margin-top: 10px;
  }
`;
const BlackText = styled.p`
  height: 1%;
  width: 100%;
  color: #2a2c30;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.375rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10%;
  text-shadow: 1px 0 #2a2c30;
  letter-spacing: 0.5px;
  @media (max-width: 550px) {
    margin-bottom: 8%;
    margin-top: -3%;
  }
`;
const Description = styled.p`
  width: 100%;
  color: #4a4a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  letter-spacing: -0.24px;
  line-height: 19px;
  text-align: center;
  font-weight: 100;
  padding: 0;
  margin: 0;
  @media (max-width: 550px) {
    line-height: 15px;
  }
`;
