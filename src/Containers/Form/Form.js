import React from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from '@mui/material';
import { makeStyles } from '@material-ui/core';

import './formstyles/Form.css';
import { UseForm, Forms } from './useForm';
import Controls from './controls/Controls';
import CountryCode from './controls/CountryCode';

const useStyles = makeStyles(() => ({
  root: {
    color: 'rgb(61, 115, 166)',
  },
}));

const initialFormValues = {
  policyNum: '',
  Installment: '',
  date: null,
  CountryCode: 91, // Drop down list
  Mobile: '',
  email: '',
  passportNum: '',
  Pan: '',
  gender: '',
  isConfirmed: false,
};
// $|.+@.+..+/.test(values.email)
const Form = () => {
  const classes = useStyles();
  const { values, handleInputChange, errors, setErrors } = UseForm(initialFormValues);

  const validate = () => {
    const temp = {};
    temp.policyNum = values.policyNum
      ? ''
      : 'Please enter your registered Policy Number to proceed';
    temp.date = values.date ? '' : 'Please enter your date of birth';
    temp.email = values.email ? '' : 'Please enter a valid email';
    temp.Installment = values.Installment
      ? ''
      : 'Please enter the premium for the above policy to proceed';
    temp.Mobile = values.Mobile.length > 9 ? '' : 'Please enter your Mobile number';
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('submitted');
    } else console.log('not submitted');
  };

  return (
    <div className='formDiv'>
      <h1 className='head'>Enrollement of a Individual Policy Holder </h1>
      <Forms onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              label='Policy Number'
              name='policyNum'
              value={values.policyNum}
              onChange={handleInputChange}
              error={errors.policyNum}
              // helperText='Please enter your registered Policy Number to proceed'
            />
            <Controls.DatePicker
              label='Date of Birth'
              name='date'
              value={values.date}
              onChange={handleInputChange}
              error={errors.date}
              // helperText='Please enter your date of birth'
            />
            <Controls.Input
              label='Email:'
              name='email'
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
              // helperText='Please enter your email'
            />
            <Controls.Input
              label='PAN:'
              name='Pan'
              value={values.Pan}
              onChange={handleInputChange}
              error={errors.Pan}
            />
            <FormControl>
              <FormLabel className={classes.root}>Gender</FormLabel>
              <RadioGroup row name='gender' value={values.gender} onChange={handleInputChange}>
                <FormControlLabel value='male' control={<Radio />} label='Male' />
                <FormControlLabel value='female' control={<Radio />} label='Female' />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Controls.Input
              label='Instalment Premium ($) Without tax'
              name='Installment'
              value={values.Installment}
              onChange={handleInputChange}
              error={errors.Installment}
              // helperText='Please enter the premium for the above policy tp proceed'
            />
            <Grid container>
              <Grid item xs={3}>
                <CountryCode />
              </Grid>
              <Grid item xs={6}>
                <Controls.Input
                  label='Mobile*'
                  name='Mobile'
                  value={values.Mobile}
                  onChange={handleInputChange}
                  error={errors.Mobile}
                  // helperText='Please enter your Mobile Number'
                />
              </Grid>
            </Grid>
            <Controls.Input
              label='Passport Number:'
              name='passportNum'
              value={values.passportNum}
              onChange={handleInputChange}
              error={errors.passportNum}
            />
          </Grid>
          <Controls.Checkbox
            name='isConfirmed'
            label='I confirm that the mobile number mentioned above is registered under my name being used by me.I hearby authorize LIC to use the mobile number for any communation.'
            value={values.isConfirmed}
            onChange={handleInputChange}
          />
        </Grid>
        <Button
          className='Proceedbutton'
          style={{ borderRadius: '0%', margin: '20px 45%', backgroundColor: 'rgb(24, 47, 67)' }}
          variant='contained'
          type='submit'
        >
          Proceed
        </Button>
      </Forms>
    </div>
  );
};
export default Form;
