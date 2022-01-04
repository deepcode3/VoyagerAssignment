import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Image404 from '../../Assets/Images/404.png';
import CommonHeader from '../../Components/Headercommon/CommonHeader';
import takeHome from '../../Assets/Images/takeHome.png';
import Footer from '../../Components/Footer';

const Error404 = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <CommonHeader />
      <ErrorContainer>
        <ErrorStatus src={Image404} alt='Error' />
        <ErrorMessage>That page doesnot exist on our website</ErrorMessage>
        <TakeHomeButton
          onClick={() => {
            history.push('/');
          }}
        >
          <ButtonImage src={takeHome} alt='takeHomeButton' />
        </TakeHomeButton>
      </ErrorContainer>
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
  height: 175px;
  width: 450px;
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
const ErrorContainer = styled.div`
  background-color: #e3e6f0;
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 0.92;
  align-items: center;
  padding-top: 14%;
  padding-bottom: 34%;
  margin-top: -80px;
`;
