import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const { show, onClose } = props;
  if (!show) {
    return null;
  }

  console.log('anything happening', show);

  return (
    <ModalDiv onClick={onClose}>
      <div
        className='modal-content'
        onKeyPress={null}
        role='button'
        tabIndex='0'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button type='button' onClick={onClose} className='close'>
          x
        </button>
        content hello world
      </div>
    </ModalDiv>
  );
};
export default Modal;

const ModalDiv = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  .modal-content {
    width: 500px;
    height: 300px;
    background-color: rgb(253, 255, 254);
  }
  .close {
    width: 20px;
    height: 20px;
    background-color: white;
  }
`;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
