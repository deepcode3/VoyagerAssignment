import React, { useContext } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import StyledButton from '../../Components/CommonButton/index';
import icnVerified from '../../Assets/Icons/icn_verified_icon.png';
import InputField from '../../Components/LoginComponents/InputField';
import BackIcon from '../../Assets/Icons/back_icon.png';
import { AccountsContext } from '../../Context/AccountsContext';

const PasswordChange = ({ setPageStatus, email, mobile, selectedCode, inputType }) => {
  const { changePassword } = useContext(AccountsContext);
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
    if (inputType === 'email') {
      changePassword({ email, password: data.password, type: 'email' });
    } else {
      changePassword({
        countrycode: selectedCode,
        mobile,
        password: data.password,
        type: 'mobile',
      });
    }
    setPageStatus('password-change-success');
  };
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
export default PasswordChange;
PasswordChange.propTypes = {
  setPageStatus: PropTypes.func,
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  selectedCode: PropTypes.string.isRequired,
};
PasswordChange.defaultProps = {
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
  margin-top: 2%;
  cursor: pointer;
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
  text-align: center;
  margin: 0;
  padding-bottom: 3%;
  text-shadow: 1px 0 #2a2c30;
  letter-spacing: 0.5px;
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
  margin-top: 23%;
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
