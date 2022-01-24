import React from 'react';
import styled from 'styled-components';

const LogoWithText = () => {
  return (
    <Wrapper>
      <Lorem>LOREM</Lorem>
      <Text>Experience the </Text>
      <Text>easiest a way to get</Text>
      <Line>
        <BoldText>great food</BoldText>
        <Text className='noLeftMargin'>Delivered</Text>
      </Line>
    </Wrapper>
  );
};

export default LogoWithText;
const Wrapper = styled.div`
  background-image: url('../assets/images/login-background.png');
  height: 588px;
  width: 480px;
  text-align: left;
  .noLeftMargin {
    margin-left: -4%;
    padding-top: 0.5%;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    width: 300px;
    height: 40%;
    border-radius: 0 8px 0px 0px;
    .noLeftMargin {
      margin-left: 0%;
    }
  }
`;

const Lorem = styled.p`
  height: 3.75rem;
  width: 6.4375rem;
  color: #ffffff;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3.125rem;
  margin-bottom: 10.5%;
  margin-top: 35%;
  font-weight: 400;
  transform: scaleY(1.1);
  margin-left: 6%;
  @media (max-width: 550px) {
    margin-top: 8%;
    margin-left: 10%;
  }
`;
const Text = styled.p`
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;
  letter-spacing: -0.57px;
  text-shadow: 0 0 9px 0 #ffffff;
  font-weight: 100;
  margin-bottom: 1%;
  margin-top: 0;
  margin-left: 6%;
  @media (max-width: 550px) {
    margin-left: 10%;
  }
`;
const BoldText = styled.p`
  width: 40%;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 2.125rem;
  letter-spacing: -0.57px;
  text-shadow: 0 0 9px 0 #ffffff;
  font-weight: 600;
  margin-bottom: 1%;
  margin-top: 0;
  margin-left: 6%;
  @media (max-width: 960px) {
    margin-right: 5%;
    margin-left: 6%;
  }
  @media (max-width: 550px) {
    margin-right: 2%;
    margin-left: 10%;
  }
`;
const Line = styled.div`
  display: flex;
  flex-direction: row;
`;
