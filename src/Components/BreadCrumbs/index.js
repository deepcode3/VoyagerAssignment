/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import './BreadCrumbs.css';

const BreadCrumb = ({ BreadCrumbdata }) => {
  const theme = createTheme({
    palette: {
      primary: { main: '#FFA500' },
      ßsecondary: {
        main: '#FFA500',
      },
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <Breadcrumbs separator='›' aria-label='breadcrumb'>
        {BreadCrumbdata.map((element) => {
          return (
            <div className='breadCrumsDiv'>
              <Link to={element.path} className='linkInfo' key={element.name}>
                {element.data}
              </Link>
            </div>
          );
        })}
      </Breadcrumbs>
    </MuiThemeProvider>
  );
};
export default BreadCrumb;

BreadCrumb.propType = {
  BreadCrumbdata: PropTypes.instanceOf(Object).isRequired,
};
