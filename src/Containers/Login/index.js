import { React, useContext } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import InputField from '../../Components/LoginComponents/InputField/index';
import StyledButton from '../../Components/CommonButton/index';
import LoginOptions from '../../Components/LoginComponents/LoginOptions/index';
import TextWithButton from '../../Components/LoginComponents/TextWithButton/index';
import closeButton from '../../Assets/Icons/close_button.png';
import { AccountsContext } from '../../Context/AccountsContext';
import { UserContext } from '../../Context/UserContext';

Modal.setAppElement('#root');
const Login = ({ setModalIsOpen, setPageStatus }) => {
  const { checkIfAccountExists } = useContext(AccountsContext);
  const { signIn } = useContext(UserContext);
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email id is required'),
    password: yup.string().required('Password is required'),
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleSignupClick = () => {
    setPageStatus('signup');
  };
  const submitForm = (data) => {
    const result = checkIfAccountExists(data);
    if (result === 'Email id is not registered') {
      setError('email', { type: 'manual', message: result });
    } else if (result === 'Incorrect password entered') {
      setError('password', { type: 'manual', message: result });
    } else {
      signIn(result);
      setModalIsOpen(false);
    }
  };
  const handleForgotClick = () => {
    setPageStatus('forgot-password');
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
      <BlackText>Lets get started!</BlackText>
      <Form onSubmit={handleSubmit(submitForm)}>
        <InputField name='email' register={register} msg={errors.email?.message} label='Email' />
        <InputField
          name='password'
          register={register}
          // eslint-disable-next-line react/jsx-boolean-value
          isPassword={true}
          msg={errors.password?.message}
          label='Password'
        />

        <ForgotButton onClick={handleForgotClick} type='button'>
          Forgot Password?
        </ForgotButton>
        <StyledButton type='submit'>LOGIN</StyledButton>
      </Form>
      <LoginOptions />
      <TextWithButton
        text="Don't have an account?"
        buttonName='Get one now!'
        handleClick={handleSignupClick}
      />
    </Wrapper>
  );
};
export default Login;
Login.propTypes = {
  setModalIsOpen: PropTypes.func,
  setPageStatus: PropTypes.func,
};
Login.defaultProps = {
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
  @media (max-width: 550px) {
    width: 300px;
    height: 300px;
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
  height: 38px;
  width: 220px;
  color: #2a2c30;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 38px;
  text-shadow: 0 0 9px 0 #ffffff;
  margin-bottom: 10%;
  margin-top: 10%;
  margin-right: 35%;
  text-shadow: 1px 0 #2a2c30;
  letter-spacing: 0.5px;
  @media (max-width: 550px) {
    margin-top: 5%;
    margin-right: 12%;
    margin-bottom: 5%;
  }
`;
const Form = styled.form`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ForgotButton = styled.button`
  height: 19px;
  width: 135px;
  color: #4a4a4a;
  background-color: transparent;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: -0.24px;
  line-height: 19px;
  text-align: right;
  border: none;
  outline: none;
  margin-left: 60%;
  margin-top: -8%;
  cursor: pointer;
  @media (max-width: 550px) {
    margin-left: 40%;
    margin-top: -4%;
    margin-bottom: 3%;
  }
`;
