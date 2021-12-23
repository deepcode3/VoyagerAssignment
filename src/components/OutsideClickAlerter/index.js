import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function useOutsideAlerter(ref, handlePress) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handlePress();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handlePress]);
}

const OutsideAlerter = ({ handlePress, children }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, handlePress);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideAlerter;
OutsideAlerter.propTypes = {
  handlePress: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
