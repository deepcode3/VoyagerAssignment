import React from 'react';
import PropTypes from 'prop-types';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { name, changeStateData } = this.props;

    return (
      <div className='col-12'>
        <h2 className='bg-primary text-white text-center '>{`${name}: TOdo list`}</h2>
        <button type='button' className='btn btn-secondary m-2' onClick={changeStateData}>
          Change Headdding Name
        </button>
      </div>
    );
  }
}
export default Navbar;

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  changeStateData: PropTypes.func.isRequired,
};
