import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Main.css';

const Modal = (props) => {
  const { show, onClose } = props;
  if (!show) {
    return null;
  }

  console.log('anything happening', show);

  return (
    <div className=' ModalDiv' onClick={onClose} onKeyPress={null} role='button' tabIndex='0'>
      <div
        className='ModalContent'
        onKeyPress={null}
        role='button'
        tabIndex='0'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button type='button' onClick={onClose} className='close'>
          <h2>X</h2>
        </button>
        <div className='Content '>
          Hello world.Income Tax Declaration submission for FY 2022-23. The employee are required to
          note the following and comply with any necessary circumstances.
        </div>
      </div>
    </div>
  );
};
export default Modal;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
