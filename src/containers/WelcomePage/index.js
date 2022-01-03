import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import LogoWithText from '../../components/LoginComponents/LogoWithText/index';
import StyledButton from '../../components/CommonButton/index';
import closeButton from '../../assets/icons/close_button.png';
import icnRegisterSuccess from '../../assets/icons/icn_register_success.png';

const WelcomePage = ({ modalIsOpen, setModalIsOpen, setPageStatus }) => {
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
          <StyledImg src={icnRegisterSuccess} alt='icon' />
          <BlackText>Hi Abdulla, </BlackText>
          <BlackText> Welcome to Zadoh </BlackText>
          <Description>We’ve sent you an email on abdulla.mohammad for verification.</Description>
          <StyledButton
            onClick={() => {
              setPageStatus('login');
            }}
          >
            BROWSE TO START ORDERING
          </StyledButton>
        </RightWrapper>
      </Wrapper>
    </Modal>
  );
};
export default WelcomePage;
WelcomePage.propTypes = {
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
const Button = styled.button`
  width: 5%;
  padding: 0;
  background-color: transparent;
  border: none;
  right: 0px;
  position: absolute;
  top: 3%;
`;
const StyledImg = styled.img`
  height: 30%;
  width: 35%;
  padding-top: 20%;
  padding-bottom: 5%;
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
`;
const Description = styled.p`
  height: 38px;
  width: 227px;
  color: #4a4a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  letter-spacing: -0.24px;
  line-height: 19px;
  text-align: center;
  font-weight: 100;
  margin-top: 7%;
  margin-bottom: 18%;
`;
