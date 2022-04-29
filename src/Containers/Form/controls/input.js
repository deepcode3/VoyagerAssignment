import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiFormLabel-root': {
      color: 'rgb(61, 115, 166)',
    },
  },
}));

/* eslint-disable  react/jsx-props-no-spreading */

const Input = (props) => {
  const classes = useStyles();
  const { label, name, value, onChange, error = null } = props;
  return (
    <TextField
      className={classes.root}
      type='text '
      variant='standard'
      InputLabelProps={{
        shrink: true,
        style: { fontSize: 20 },
      }}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
};
export default Input;
Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  // helperText: PropTypes.string.isRequired,
};
