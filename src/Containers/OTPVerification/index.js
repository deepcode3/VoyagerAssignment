import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import StyledButton from '../../Components/CommonButton/index';
import verifyIcon from '../../Assets/Icons/icn_verify_icon.png';
import InputField from '../../Components/LoginComponents/InputField';
import BackIcon from '../../Assets/Icons/back_icon.png';

// eslint-disable-next-line object-curly-newline
const OTPVerification = ({ setPageStatus, purpose }) => {
  const schema = yup.object().shape({
    otp: yup.string('Invalid OTP').required('Please enter OTP'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log(data);
    if (purpose === 'password-change') setPageStatus('new-password');
    else setPageStatus('get-details');
  };
  return (
    <Wrapper>
      <BackButton
        onClick={() => {
          if (purpose === 'password-change') setPageStatus('forgot-password');
          else setPageStatus('signup');
        }}
      >
        <img className='backArrow' src={BackIcon} alt='back' />
      </BackButton>
      <StyledImg src={verifyIcon} alt='icon' />
      <BlackText>Verification </BlackText>
      <Description>
        We just sent you the OTP via SMS to your email address/mobile no. You should get it soon!
      </Description>
      <Container onSubmit={handleSubmit(submitForm)}>
        <InputField name='otp' register={register} msg={errors.otp?.message} label='Enter OTP' />
        <StyledButton type='submit'>VERIFY</StyledButton>
      </Container>
    </Wrapper>
  );
};
export default OTPVerification;
OTPVerification.propTypes = {
  setPageStatus: PropTypes.func,
  purpose: PropTypes.string,
};
OTPVerification.defaultProps = {
  purpose: null,
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
  margin-top: 2%;
  cursor: pointer;
  .backArrow {
    height: 17px;
    width: 17px;
    @media (max-width: 850px) {
      position: relative;
      top: -260px;
    }
    @media (max-width: 550px) {
      width: 15px;
      height: 13px;
      position: relative;
      top: -220px;
    }
  }
`;

const StyledImg = styled.img`
  height: 17%;
  width: 24%;
  padding-top: 6%;
  padding-bottom: 6%;
  padding-left: 2%;
  @media (max-width: 550px) {
    height: 15%;
    width: 23%;
    padding-top: 4%;
  }
`;
const BlackText = styled.p`
  height: 5%;
  width: 60%;
  color: #2a2c30;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.375rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding-top: 5%;
  text-shadow: 1px 0 #2a2c30;
  letter-spacing: 0.5px;
  @media (max-width: 550px) {
    padding-top: 0;
  }
`;
const Description = styled.p`
  height: 38px;
  width: 50%;
  color: #4a4a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  letter-spacing: -0.24px;
  line-height: 19px;
  text-align: center;
  font-weight: 100;
  margin-top: 7%;
  margin-bottom: 20%;
  transform: scaleX(1.02);
  @media (max-width: 550px) {
    margin-bottom: 12%;
    margin-top: 9%;
    line-height: 15px;
  }
`;
const Container = styled.form`
  width: 100%;
  height: 30.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 550px) {
    height: 40%;
  }
`;
