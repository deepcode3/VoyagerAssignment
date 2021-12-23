import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Nav>
      <span> LOREM</span>
    </Nav>
  );
};
export default NavBar;

const Nav = styled.nav`
  height: 70px;
  width: 100vw;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  .span {
    height: 43px;
    width: 72.97px;
    font-family: 'Bebas Neue';
    font-size: 35px;
    letter-spacing: 0;
    line-height: 43px;
    text-align: center;
    color: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
  }
`;
