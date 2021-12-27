import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import LogoWithText from '../../components/LoginComponents/LogoWithText/index';
import StyledButton from '../../components/CommonButton/index';
import verifyIcon from '../../assets/icons/icn_verify_icon.png';
import InputField from '../../components/LoginComponents/InputField';
import BackIcon from '../../assets/icons/back_icon.png';

Modal.setAppElement('#root');
// eslint-disable-next-line object-curly-newline
const OTPVerification = ({ modalIsOpen, setModalIsOpen, setPageStatus, purpose }) => {
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
              if (purpose === 'password-change') setPageStatus('forgot-password');
              else setPageStatus('signup');
            }}
          >
            <img className='backArrow' src={BackIcon} alt='back' />
          </BackButton>
          <StyledImg src={verifyIcon} alt='icon' />
          <BlackText>Verification </BlackText>
          <Description>
            We just sent you the OTP via SMS to your email address/mobile no. You should get it
            soon!
          </Description>
          <Container onSubmit={handleSubmit(submitForm)}>
            <InputField name='otp' register={register} msg={errors.otp?.message} label='Enter OTP' />
            <StyledButton type='submit'>VERIFY</StyledButton>
          </Container>
        </RightWrapper>
      </Wrapper>
    </Modal>
  );
};
export default OTPVerification;
OTPVerification.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  setPageStatus: PropTypes.func.isRequired,
  purpose: PropTypes.string,
};
OTPVerification.defaultProps = {
  purpose: null
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
  padding-bottom: 6%;
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
  padding-top: 5%;
`;
const Description = styled.p`
  height: 38px;
  width: 50%;
  color: #4a4a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  letter-spacing: -0.24px;
  line-height: 19px;
  text-align: center;
  font-weight: 100;
  margin-top: 7%;
  margin-bottom: 20%;
  transform: scaleX(1.02);
`;
const Container = styled.form`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
