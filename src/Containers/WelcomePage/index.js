import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StyledButton from '../../Components/CommonButton/index';
import closeButton from '../../Assets/Icons/close_button.png';
import icnRegisterSuccess from '../../Assets/Icons/icn_register_success.png';

const WelcomePage = ({ setModalIsOpen, setPageStatus, name, email }) => {
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
      <StyledImg src={icnRegisterSuccess} alt='icon' />
      <BlackText>{`Hi ${name},`}</BlackText>
      <BlackText> Welcome to Zadoh </BlackText>
      <Description>
        {`We’ve sent you an email on ${email.split('@')[0]} for verification.`}
      </Description>
      <StyledButton
        onClick={() => {
          setPageStatus('login');
        }}
      >
        BROWSE TO START ORDERING
      </StyledButton>
    </Wrapper>
  );
};
export default WelcomePage;
WelcomePage.propTypes = {
  setModalIsOpen: PropTypes.func,
  setPageStatus: PropTypes.func,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
WelcomePage.defaultProps = {
  setPageStatus: () => {},
  setModalIsOpen: () => {},
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
const StyledImg = styled.img`
  height: 30%;
  width: 35%;
  padding-top: 20%;
  padding-bottom: 5%;
  @media (max-width: 550px) {
    height: 20%;
    width: 25%;
    padding-top: 10%;
  }
`;
const BlackText = styled.p`
  height: 5%;
  width: 50%;
  color: #2a2c30;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.375rem;
  font-weight: bold;
  letter-spacing: -0.37px;
  text-align: center;
  text-shadow: 1px 0 #2a2c30;
  letter-spacing: 0.5px;
  margin: 0;
 
`;
const Description = styled.p`
  height: 38px;
  width: 227px;
  color: #4a4a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  letter-spacing: -0.24px;
  line-height: 19px;
  text-align: center;
  font-weight: 100;
  margin-top: 7%;
  margin-bottom: 18.5%;
  @media (max-width: 550px) {
    line-height: 15px;
    margin-bottom: 19.25%;
    margin-top: 10%;
  }
`;
