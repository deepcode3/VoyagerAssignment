import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiFormLabel-root': {
      color: 'rgb(61, 115, 166)',
    },
  },
}));

/* eslint-disable  react/jsx-props-no-spreading */
const DatePicker = (props) => {
  const classes = useStyles();
  const { name, label, value, onChange, error = null } = props;
  const convertToDefPara = (names, values) => ({
    target: {
      name: names,
      value: values,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={classes.root}
        disableToolbar
        variant='standard'
        label={label}
        format='dd/MM/yyyy'
        name={name}
        value={value ? new Date() : null}
        onChange={(date) => {
          onChange(convertToDefPara(name, date));
        }}
        {...(error && { error: true, helperText: error })}
        InputLabelProps={{
          shrink: true,
          style: { fontSize: 20 },
        }}
        disableFuture
        placeholder='-dd/mm/yyyy'
      />
    </MuiPickersUtilsProvider>
  );
};
export default DatePicker;

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  //  helperText: PropTypes.string.isRequired,
};
