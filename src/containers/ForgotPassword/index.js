import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import LogoWithText from '../../components/LoginComponents/LogoWithText/index';
import StyledButton from '../../components/CommonButton/index';
import forgotPasswordIcon from '../../assets/icons/icn_forgot_password.png';
import BackIcon from '../../assets/icons/back_icon.png';
import InputField from '../../components/LoginComponents/InputField';
import border from '../../assets/icons/border.png';
import TelephonePicker from '../../components/TelephonePicker/index';

Modal.setAppElement('#root');
const ForgotPassword = ({ modalIsOpen, setModalIsOpen, setPageStatus }) => {
  const [inputType, setInputType] = useState('email');
  const [selectedCode, setSelectedCode] = useState('91');
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailSchema),
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: yupResolver(mobileSchema),
  });
  const submitForm = (data) => {
    if (inputType === 'mobile') data.code = selectedCode;
    console.log(data);
    setPageStatus('otp-verification-for-password-change');
  };

  return (
    <Modal
      className='wrapper'
      isOpen={modalIsOpen}
      onRequestClose={() => {
        setPageStatus('login');
        setModalIsOpen(false);
      }}
      style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.7)' } }}
    >
      <Wrapper>
        <LogoWithText />
        <RightWrapper>
          <BackButton
            onClick={() => {
              return setPageStatus('login');
            }}
          >
            <img className='backArrow' src={BackIcon} alt='back' />
          </BackButton>
          <StyledImg src={forgotPasswordIcon} alt='icon' />
          <BlackText>ForgotPassword! </BlackText>
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
        </RightWrapper>
      </Wrapper>
    </Modal>
  );
};
export default ForgotPassword;
ForgotPassword.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  setPageStatus: PropTypes.func.isRequired,
};
const Wrapper = styled.div`
  height: 588px;
  width: 960px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  .boldButton {
    color: #000000;
    font-weight: 600;
  }
`;

const RightWrapper = styled.div`
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
  margin-top: 2%;
  .backArrow {
    height: 17px;
    width: 17px;
  }
`;

const StyledImg = styled.img`
  height: 17%;
  width: 24%;
  padding-top: 6%;
  padding-bottom: 10%;
  padding-left: 2%;
`;
const BlackText = styled.p`
  height: 5%;
  width: 60%;
  color: #2a2c30;
  font-family: 'Open Sans', sans-serif;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.37px;
  text-align: center;
  text-shadow: 0 0 9px 0 #ffffff;
  margin: 0;
`;
const Description = styled.p`
  height: 38px;
  width: 60%;
  color: #4a4a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  letter-spacing: -0.24px;
  line-height: 19px;
  text-align: center;
  font-weight: 100;
  margin-top: 7%;
  margin-bottom: 6%;
  transform: scaleX(1.02);
`;
const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  margin-left: 10.5%;
  width: 40%;
  justify-content: space-between;
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
  font-size: 18px;
  letter-spacing: -0.43px;
  line-height: 24px;
  background-color: transparent;
  border: none;
  padding: 0;
`;
const Form = styled.form`
  height: 57%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Border = styled.img`
  height: 4px;
  width: 38px;
  padding-left: 1px;
`;
