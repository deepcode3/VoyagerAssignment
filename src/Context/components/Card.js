import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../CartContext';

const Card = ({ name, price }) => {
  const { addItem } = useContext(CartContext);

  return (
    <div
      role='button'
      tabIndex={0}
      onKeyPress={null}
      onClick={() => {
        addItem(name, price);
      }}
    >
      <span>oUTline</span>
      <h1>{name}</h1>
      <span>{price}</span>
    </div>
  );
};
export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
