import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import data from './data';

const Footer = () => {
  return (
    <FooterContainer>
      <FlexRow>
        <Logo />
        <Number> 24</Number>
        <Text>CITIES</Text>
        <VerticalLine />
        <Number>4</Number>
        <Text>COUNTRIES</Text>
      </FlexRow>
      <FlexRowLinks>
        {data.map((element) => {
          return (
            <FooterLink key={element} to={element.toLowerCase().replaceAll(' ', '-')}>
              {element}
            </FooterLink>
          );
        })}
      </FlexRowLinks>
    </FooterContainer>
  );
};
export default Footer;
const FooterContainer = styled.div`
  height: 227px;
  width: 1895px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 960px;
  height: 50%;
  justify-content: flex-start;
  align-items: center;
`;
const FlexRowLinks = styled.div`
  display: flex;
  flex-direction: row;
  width: 960px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(151, 151, 151, 0.19);
  padding-top: 2%;
`;
const FooterLink = styled(NavLink)`
  color: #636364;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 19px;
  text-decoration: none;
`;
const Number = styled.p`
  margin-left: 5%;
  padding: 0;
  height: 33px;
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 33px;
  text-align: center;
  background-clip: text;
  background: -webkit-linear-gradient(138.33deg, #feb456 0%, #ee4e78 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 1%;
`;
const Text = styled.p`
  color: #636364;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 19px;
`;
const VerticalLine = styled.div`
  height: 30px;
  border-right: 1px solid #000000;
  opacity: 0.1;
  margin-left: 5%;
`;
