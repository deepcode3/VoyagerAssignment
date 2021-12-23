import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import LogoWithText from '../../components/loginComponents/logoWithText/index';
import StyledButton from '../../components/commonButton/index';
import icnVerified from '../../assets/icons/icn_verified_icon.png';
import InputField from '../../components/loginComponents/InputField';
import BackIcon from '../../assets/icons/back_icon.png';

Modal.setAppElement('#root');
const PasswordChange = ({ modalIsOpen, setModalIsOpen, setPageStatus }) => {
  const schema = yup.object().shape({
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
    console.log(data);
    setPageStatus('password-change-success');
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
              return setPageStatus('otp-verification-for-password-change');
            }}
          >
            <img className='backArrow' src={BackIcon} alt='back' />
          </BackButton>
          <StyledImg src={icnVerified} alt='icon' />
          <BlackText>Verified! </BlackText>
          <Description>Your mobile no. is verified.</Description>
          <Description>Enter the new password to reset you account.</Description>
          <DataContainer onSubmit={handleSubmit(submitForm)}>
            <InputField
              name='password'
              // eslint-disable-next-line react/jsx-boolean-value
              isPassword={true}
              register={register}
              msg={errors.password?.message}
              label='Enter New Password'
            />
            <StyledButton type='submit'>CHANGE PASSWORD</StyledButton>
          </DataContainer>
        </RightWrapper>
      </Wrapper>
    </Modal>
  );
};
export default PasswordChange;
PasswordChange.propTypes = {
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
  width: 25%;
  padding-top: 6%;
  padding-bottom: 10%;
  padding-left: 5%;
`;
const BlackText = styled.p`
  height: 5%;
  width: 50%;
  color: #2a2c30;
  font-family: 'Open Sans', sans-serif;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.37px;
  text-align: center;
  text-shadow: 0 0 9px 0 #ffffff;
  margin: 0;
  padding-bottom: 3%;
`;
const Description = styled.p`
  color: #4a4a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  letter-spacing: -0.24px;
  line-height: 19px;
  text-align: center;
  font-weight: 100;
  margin: 0;
`;
const DataContainer = styled.form`
  margin-top: 24%;
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
