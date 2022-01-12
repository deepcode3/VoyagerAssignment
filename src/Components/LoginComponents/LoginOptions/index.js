import React from 'react';
import styled from 'styled-components';

const LoginOptions = () => {
  return (
    <LoginOptionsLinkContainer>
      <Facebook target='_blank' rel='noreferrer' href='http://facebook.com'>
        Facebook
      </Facebook>
      <Google target='_blank' rel='noreferrer' href='http://google.com'>
        Google+
      </Google>
    </LoginOptionsLinkContainer>
  );
};
export default LoginOptions;
const LoginOptionsLinkContainer = styled.div`
  margin-top: 6%;
  margin-bottom: 6%;
  display: flex;
  width: 79.5%;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 550px) {
    width: 83%;
  }
`;
const Facebook = styled.a`
  height: 50px;
  width: 180px;
  padding: 3%;
  box-sizing: border-box;
  border: 1px solid #02a7fd;
  border-radius: 6px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  color: #2c79bd;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 550px) {
    height: 20px;
    padding: 0;
    width: 110px;
  }
`;
const Google = styled.a`
  height: 50px;
  width: 180px;
  padding: 3%;
  box-sizing: border-box;
  border: 1px solid #ff8c7d;
  border-radius: 6px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  color: #d34836;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 550px) {
    height: 20px;
    padding: 0;
    width: 110px;
  }
`;
