/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './logo.css';

const Logo = ({ afterLogin }) => {
  const history = useHistory();
  return (
    <div
      className={afterLogin ? 'logosmalllorem' : 'logolorem'}
      onClick={() => {
        history.push('/');
      }}
      onKeyDown={null}
      role='button'
    >
      LOREM
    </div>
  );
};

export default Logo;
Logo.propTypes = {
  afterLogin: PropTypes.bool,
};
Logo.defaultProps = { afterLogin: false };
