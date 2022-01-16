import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Image404 from '../../Assets/Images/404.png';
import SearchRestaurantView from '../../Components/SearchRestaurant/SearchRestaurantView';
import takeHome from '../../Assets/Images/takeHome.png';
import Footer from '../../Components/Footer';

const Error404 = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <SearchRestaurantView />
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
      <div className='footerDivError'>
        <Footer />
      </div>
    </Wrapper>
  );
};
export default Error404;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .footerDivError {
    width: 100%;
    @media (max-width: 550px) {
      display: none;
    }
  }
`;

const ErrorStatus = styled.img`
  height: 10%;
  width: 20%;
`;
const ErrorMessage = styled.p`
  color: #3e3e3e;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0;
  line-height: 27px;
  text-align: center;
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
  @media (max-width: 550px) {
    height: 36px;
    width: 100px;
  }
`;
const ErrorContainer = styled.div`
  height: 100%;
  background-color: #e3e6f0;
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 0.92;
  align-items: center;
  padding-top: 14%;
  padding-bottom: 34%;
  margin-top: -80px;
  justify-content: center;
  @media (max-width: 550px) {
    margin-top: 0;
    height: 500px;
  }
`;
