import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';

const Checkbox = (props) => {
  const { name, label, value, onChange } = props;
  const convertToDefPara = (names, values) => ({
    target: {
      name: names,
      value: values,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color='primary'
            checked={value}
            onChange={(e) => {
              console.log('checked', e.target.checked);
              onChange(convertToDefPara(name, e.target.checked));
            }}
          />
        }
        label={label}
      />
    </FormControl>
  );
};
export default Checkbox;

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
