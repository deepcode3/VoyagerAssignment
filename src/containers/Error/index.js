import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Image404 from '../../assets/images/404.png';
import CommonHeader from '../../components/headercommon/CommonHeader';
import takeHome from '../../assets/images/takeHome.png';
import Footer from '../../components/Footer';

const Error404 = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <CommonHeader />
      <ErrorStatus src={Image404} alt='Error' />
      <ErrorMessage>That page doesnot exist on our website</ErrorMessage>
      <TakeHomeButton
        onClick={() => {
          history.push('/');
        }}
      >
        <ButtonImage src={takeHome} alt='takeHomeButton' />
      </TakeHomeButton>
      <Footer />
    </Wrapper>
  );
};
export default Error404;

const Wrapper = styled.div`
  width: 100%;
  height: 1714px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ErrorStatus = styled.img`
  height: 317px;
  width: 479px;
  opacity: 0.92;
  margin-top: 10%;
`;
const ErrorMessage = styled.p`
  height: 27px;
  width: 367px;
  color: #3e3e3e;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 27px;
`;
const TakeHomeButton = styled.button`
  margin-bottom: 40%;
  height: 56px;
  width: 156px;
  padding: 0;
  background-color: transparent;
  border: none;
`;
const ButtonImage = styled.img`
  height: 56px;
  width: 156px;
`;
