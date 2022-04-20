import React, { useState } from 'react';
import '../Styles/Main.css';
import Modal from './Modal';

const Brand = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='MainDiv'>
      <h1>BrandPage</h1>
      <button
        type='button'
        onClick={() => {
          setShow(true);
        }}
        className='showbutton'
      >
        Show Model
      </button>
      <Modal
        show={show}
        onClose={() => {
          setShow(false);
        }}
      />
    </div>
  );
};
export default Brand;
