import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import Modal from 'react-modal';
import { yupResolver } from '@hookform/resolvers/yup';
import LogoWithText from '../../components/LoginComponents/LogoWithText/index';
import InputField from '../../components/LoginComponents/InputField/index';
import StyledButton from '../../components/CommonButton/index';
import TextWithButton from '../../components/LoginComponents/TextWithButton';
import LoginOptions from '../../components/LoginComponents/LoginOptions';
import closeButton from '../../assets/icons/close_button.png';
import { AccountsContext } from '../../context/AccountsContext';

Modal.setAppElement('#root');
const Signup = ({
  modalIsOpen, setModalIsOpen, setPageStatus, setEmail
}) => {
  const { checkIfAccountExists } = useContext(AccountsContext);
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email address').required(),
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const handleTermsClick = () => {
    history.push('/terms-and-conditions');
  };
  const handleLoginClick = () => {
    setPageStatus('login');
  };
  const submitForm = (data) => {
    const result = checkIfAccountExists(data);
    if (result === null || result.length === 0) {
      setEmail(data.email);
      setPageStatus('otp-verification');
    } else {
      setError('email', { type: 'manual', message: 'You already have an account' });
    }
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
          <Button
            onClick={() => {
              setPageStatus('login');
              setModalIsOpen(false);
            }}
          >
            <img src={closeButton} alt='cut' />
          </Button>
          <BlackText>Create your account</BlackText>
          <Description>
            Share your email address to send you the OTP to get yourself registered!
          </Description>
          <DataContainer onSubmit={handleSubmit(submitForm)}>
            <InputField
              name='email'
              register={register}
              msg={errors.email?.message}
              label='Email'
            />
            <StyledButton type='submit'>CREATE ACCOUNT</StyledButton>
          </DataContainer>
          <TextWithButton
            text='By registering you agree to the'
            buttonName='Terms & Conditions'
            handleClick={handleTermsClick}
          />
          <LoginOptions />
          <TextWithButton
            text='Already havean account?'
            buttonName='Login'
            handleClick={handleLoginClick}
          />
        </RightWrapper>
      </Wrapper>
    </Modal>
  );
};
export default Signup;
Signup.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  setPageStatus: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
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
const Button = styled.button`
  width: 5%;
  padding: 0;
  background-color: transparent;
  border: none;
  right: 0px;
  position: absolute;
  top: 3%;
`;
const BlackText = styled.p`
  color: #2a2c30;
  font-family: 'Open Sans', sans-serif;
  font-size: 28px;
  font-weight: bold;
  line-height: 38px;
  text-shadow: 0 0 9px 0 #ffffff;
  margin-bottom: 3%;
  margin-top: 10%;
`;
const Description = styled.p`
  height: 10%;
  width: 53%;
  color: #4a4a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  letter-spacing: -0.24px;
  line-height: 20px;
  text-align: center;
  font-weight: 100;
  padding: 0;
`;
const DataContainer = styled.form`
  width: 100%;
  height: 27.6%;
  margin-bottom: 9%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
