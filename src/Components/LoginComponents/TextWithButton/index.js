import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextWithButton = ({ text, buttonName, handleClick }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Button onClick={handleClick}>{buttonName}</Button>
    </Container>
  );
};

export default TextWithButton;
TextWithButton.propTypes = {
  text: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 6%;
  justify-content: center;
`;
const Text = styled.p`
  height: 15px;
  color: #4a4a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 100;
  letter-spacing: -0.24px;
  line-height: 19px;
  text-align: center;
  margin-top: 0;
  padding-right: 5px;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 0;
  padding-bottom: 2px;
  height: 20px;
  color: #f67e03;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: -0.24px;
  text-align: center;
  background-color: transparent;
  border: none;
`;
