import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../Components/LoginComponents/InputField/index';
import StyledButton from '../../Components/CommonButton/index';
import TextWithButton from '../../Components/LoginComponents/TextWithButton';
import LoginOptions from '../../Components/LoginComponents/LoginOptions';
import closeButton from '../../Assets/Icons/close_button.png';
import { checkIfAccountExists } from '../../Utils';

const Signup = ({ setModalIsOpen, setPageStatus, setEmail }) => {
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
    history.push('/terms-&-conditions');
  };
  const handleLoginClick = () => {
    setPageStatus('login');
  };
  const submitForm = (data) => {
    const result = checkIfAccountExists(data);
    if (result === 'Email id is not registered') {
      setEmail(data.email);
      setPageStatus('otp-verification');
    } else {
      setError('email', { type: 'manual', message: 'You already have an account' });
    }
  };
  return (
    <Wrapper>
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
        <InputField name='email' register={register} msg={errors.email?.message} label='Email' />
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
    </Wrapper>
  );
};
export default Signup;
Signup.propTypes = {
  setModalIsOpen: PropTypes.func,
  setPageStatus: PropTypes.func,
  setEmail: PropTypes.func.isRequired,
};
Signup.defaultProps = {
  setModalIsOpen: () => {},
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
const Button = styled.button`
  width: 5%;
  padding: 0;
  background-color: transparent;
  border: none;
  right: 0px;
  position: absolute;
  top: 3%;
  cursor: pointer;
  @media (max-width: 550px) {
    right: 2%;
    top: 1%;
  }
`;
const BlackText = styled.p`
  color: #2a2c30;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.375rem;
  font-weight: bold;
  line-height: 38px;
  margin-bottom: 3%;
  margin-top: 10%;
  text-shadow: 1px 0 #2a2c30;
  letter-spacing: 0.5px;
  @media (max-width: 550px) {
    line-height: 25px;
  }
`;
const Description = styled.p`
  height: 10%;
  width: 53%;
  color: #4a4a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  letter-spacing: -0.24px;
  line-height: 20px;
  text-align: center;
  font-weight: 100;
  padding: 0;
  @media (max-width: 550px) {
    line-height: 15px;
  }
`;
const DataContainer = styled.form`
  width: 100%;
  height: 27.6%;
  margin-bottom: 9%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 550px) {
    margin-bottom: 3.5%;
    margin-top: 4.5%;
  }
`;
