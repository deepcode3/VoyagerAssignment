import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import StyledButton from '../../Components/CommonButton/index';
import forgotPasswordIcon from '../../Assets/Icons/icn_forgot_password.png';
import BackIcon from '../../Assets/Icons/back_icon.png';
import InputField from '../../Components/LoginComponents/InputField';
import border from '../../Assets/Icons/border.png';
import TelephonePicker from '../../Components/TelephonePicker/index';
import { checkIfAccountExists, checkIfNumberExists } from '../../Utils';

const ForgotPassword = ({
  setPageStatus,
  setEmail,
  setMobile,
  inputType,
  setInputType,
  selectedCode,
  setSelectedCode,
}) => {
  const emailSchema = yup.object().shape({
    email: yup.string().required('Email id is required ').email('Invalid email address'),
  });
  const mobileSchema = yup.object().shape({
    mobile: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(10, 'Invalid mobile number')
      .max(10, 'Invalid mobile number'),
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailSchema),
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    setError: setError2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: yupResolver(mobileSchema),
  });
  const submitForm = (data) => {
    if (inputType === 'email') {
      const result = checkIfAccountExists(data);
      if (result === 'Email id is not registered') {
        setError('email', { type: 'manual', message: result });
      } else {
        setEmail(data.email);
        setPageStatus('otp-verification-for-password-change');
      }
    } else {
      const result = checkIfNumberExists({ mobile: data.mobile, countrycode: selectedCode });
      if (result === 'Mobile number is not registered') {
        setError2('mobile', { type: 'manual', message: 'Mobile number is not registered' });
      } else {
        setSelectedCode(selectedCode);
        setMobile(data.mobile);
        setPageStatus('otp-verification-for-password-change');
      }
    }
  };

  return (
    <Wrapper>
      <BackButton
        onClick={() => {
          return setPageStatus('login');
        }}
      >
        <img className='backArrow' src={BackIcon} alt='back' />
      </BackButton>
      <StyledImg src={forgotPasswordIcon} alt='icon' />
      <BlackText>Forgot Password! </BlackText>
      <Description>
        Share your registered either email address or mobile number to send you the OTP to reset
        your password
      </Description>
      <Container>
        <Navbar>
          <TypeContainer>
            <InputTypeButton
              type='button'
              onClick={() => {
                return setInputType('email');
              }}
              className={inputType === 'email' ? 'boldButton' : null}
            >
              Email
            </InputTypeButton>
            {inputType === 'email' ? <Border src={border} alt='border' /> : null}
          </TypeContainer>
          <TypeContainer>
            <InputTypeButton
              type='button'
              onClick={() => {
                return setInputType('mobile');
              }}
              className={inputType === 'mobile' ? 'boldButton' : null}
            >
              Mobile No.
            </InputTypeButton>
            {inputType === 'mobile' ? <Border src={border} alt='border' /> : null}
          </TypeContainer>
        </Navbar>

        {inputType === 'email' ? (
          <Form onSubmit={handleSubmit(submitForm)}>
            <InputField
              name='email'
              register={register}
              msg={errors.email?.message}
              label='Email'
            />
            <StyledButton type='submit'>SEND OTP</StyledButton>
          </Form>
        ) : (
          <Form onSubmit={handleSubmit2(submitForm)}>
            <TelephonePicker
              name='mobile'
              register={register2}
              msg={errors2.mobile?.message}
              label='Mobile no.'
              selectedCode={selectedCode}
              setSelectedCode={setSelectedCode}
            />
            <StyledButton type='submit'>SEND OTP</StyledButton>
          </Form>
        )}
      </Container>
    </Wrapper>
  );
};
export default ForgotPassword;
ForgotPassword.propTypes = {
  setPageStatus: PropTypes.func,
  setEmail: PropTypes.func.isRequired,
  setMobile: PropTypes.func.isRequired,
  inputType: PropTypes.string.isRequired,
  setInputType: PropTypes.func.isRequired,
  selectedCode: PropTypes.string.isRequired,
  setSelectedCode: PropTypes.func.isRequired,
};
ForgotPassword.defaultProps = {
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
  .boldButton {
    color: #000000;
    font-weight: 600;
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
  padding-bottom: 10%;
  padding-left: 2%;
  @media (max-width: 550px) {
    padding-top: 0;
    padding-bottom: 4%;
  }
`;
const BlackText = styled.p`
  height: 5%;
  width: 60%;
  color: #2a2c30;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.375rem;
  font-weight: 600;
  letter-spacing: -0.37px;
  text-align: center;
  text-shadow: 0 0 9px 0 #ffffff;
  margin: 0;
  text-shadow: 1px 0 #2a2c30;
  letter-spacing: 0.5px;
`;
const Description = styled.p`
  height: 38px;
  width: 60%;
  color: #4a4a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  letter-spacing: -0.24px;
  line-height: 19px;
  text-align: center;
  font-weight: 100;
  margin-top: 7%;
  margin-bottom: 6%;
  transform: scaleX(1.02);
  @media (max-width: 550px) {
    line-height: 15px;
    margin-bottom: 5%;
    margin-top: 5%;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 550px) {
    height: 85%;
  }
`;
const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  margin-left: 10.5%;
  width: 40%;
  justify-content: space-between;
  @media (max-width: 550px) {
    margin-left: 8%;
    width: 43%;
  }
`;
const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20px;
`;
const InputTypeButton = styled.button`
  height: 24px;
  opacity: 0.66;
  color: #4a4a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  letter-spacing: -0.43px;
  line-height: 24px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
const Form = styled.form`
  height: 58%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 550px) {
    height: 57%;
  }
`;
const Border = styled.img`
  height: 4px;
  width: 38px;
  padding-left: 1px;
`;
