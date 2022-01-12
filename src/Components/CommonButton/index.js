import styled from 'styled-components';

const CommonButton = styled.button`
  cursor: pointer;
  height: 50px;
  width: 380px;
  border-radius: 6px;
  background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
  box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
  border: none;
  display: flex;
  justify-content: space-around;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.3px;
  line-height: 22px;
  text-align: center;
  text-shadow: 0 0 9px 0 #ffffff;
  padding-top: 15px;
  @media (max-width: 550px) {
    width: 250px;
    height: 30px;
    padding-top: 1.5%;
  }
`;
export default CommonButton;
