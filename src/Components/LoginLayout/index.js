import React, { cloneElement } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LogoWithText from '../LoginComponents/LogoWithText';

Modal.setAppElement('#root');
const LoginLayout = ({ modalIsOpen, setModalIsOpen, setPageStatus, children }) => {
  const result = cloneElement(children, { modalIsOpen, setModalIsOpen, setPageStatus });
  return (
    <Modal
      className='wrapper'
      isOpen={modalIsOpen}
      onRequestClose={() => {
        setPageStatus('login');
        setModalIsOpen(false);
      }}
      style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1 } }}
    >
      <Wrapper>
        <LogoWithText />
        {result}
      </Wrapper>
    </Modal>
  );
};
export default LoginLayout;
LoginLayout.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  setPageStatus: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
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
  @media (max-width: 550px) {
    flex-direction: column;
    width: 300px;
    height: 600px;
  }
`;
