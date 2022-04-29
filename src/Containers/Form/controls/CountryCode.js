import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiFormLabel-root': {
      color: 'rgb(61, 115, 166)',
    },
  },
}));

/* eslint-disable  react/jsx-props-no-spreading */
const CountryCode = () => {
  const classes = useStyles();
  const countries = [
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
  ];

  return (
    <Autocomplete
      className={classes.root}
      sx={{ width: 150 }}
      variant='standard'
      options={countries}
      getOptionLabel={(option) => option.phone}
      renderOption={(props, option) => (
        <Box component='li' {...props}>
          {`+ ${option.phone}`}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant='standard'
          label='Country code'
          InputLabelProps={{
            shrink: true,
            style: { fontSize: 20 },
          }}
          inputProps={{
            ...params.inputProps,
            // autoComplete: 'new-password',
          }}
        />
      )}
    />
  );
};
export default CountryCode;
