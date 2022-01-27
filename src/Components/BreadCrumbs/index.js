/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BreadCrumbs from '@material-ui/core';
import './BreadCrumbs.css';

const BreadCrumb = (breadCrumbsData) => {
  rerturn(
    <BreadCrumbs aria-label='breadcrumb'>
      {breadCrumbsData.map((element) => {
        return (
          <Link to='/' className='linkInfo' key={index}>
            {element}
          </Link>
        );
      })}
    </BreadCrumbs>
  );
};
export default BreadCrumb;

BreadCrumbs.propType = {
  breadCrumbsData: PropTypes.array.isRequired,
};
