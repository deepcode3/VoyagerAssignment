import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

export const UseForm = (initialFormValues) => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
  };
};

const useStyle = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

/* eslint-disable  react/jsx-props-no-spreading */
export const Forms = (props) => {
  const { children, ...other } = props;
  const classes = useStyle();
  return (
    <form className={classes.root} autoComplete='off' {...other}>
      {children}
    </form>
  );
};

Forms.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};
