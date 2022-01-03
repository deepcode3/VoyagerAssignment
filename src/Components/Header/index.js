/* eslint-disable import/no-named-as-default-member */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import ForgotPassword from '../../Containers/ForgotPassword/index';
import Login from '../../Containers/Login/index';
import PasswordChange from '../../Containers/PasswordChange/index';
import Signup from '../../Containers/Signup/index';
import OTPVerification from '../../Containers/OTPVerification/index';
import GetDetails from '../../Containers/GetDetails/index';
import WelcomePage from '../../Containers/WelcomePage/index';
import PasswordChangeSuccess from '../../Containers/PasswordChangeSuccess/index';
import iconCart from '../../Assets/Icons/icn_cart.png';
import icnProfile from '../../Assets/Icons/icn_profile.svg';
import { UserContext } from '../../Context/UserContext';

const Header = ({ isHome }) => {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();
  const [state, trigger] = useState(true);
  const loginStatus = localStorage.getItem('accessToken');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pageStatus, setPageStatus] = useState('login');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [inputType, setInputType] = useState('email');
  const [selectedCode, setSelectedCode] = useState('91');
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    trigger(!state);
    history.push('/');
  };
  useEffect(() => {}, [trigger]);
  return (
    <HeaderWrapper>
      {isHome ? <Logo /> : <Logo afterLogin />}
      <LinkContainer>
        {loginStatus && currentUser !== null ? (
          <>
            <ProfileConatiner>
              <ProfileIcon src={icnProfile} alt='icon' />
            </ProfileConatiner>
            <User
              onClick={() => {
                history.push('/profile');
              }}
            >
              {currentUser.firstname.toUpperCase()}
            </User>
            <VerticalLine className={!isHome ? 'smallLine' : null} />
          </>
        ) : (
          <Button
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            LOGIN
          </Button>
        )}
        {loginStatus ? (
          <Button onClick={handleLogout}>LOGOUT</Button>
        ) : (
          <Button
            className='createNew'
            onClick={() => {
              setPageStatus('signup');
              setModalIsOpen(true);
            }}
          >
            CREATE AN ACCOUNT
          </Button>
        )}
        <VerticalLine className={!isHome ? 'smallLine' : null} />
        {isHome ? (
          <>
            <CartIcon src={iconCart} alt='icon' />
            <CartLink to='/cart'>CART</CartLink>
          </>
        ) : (
          <>
            <CartIconOrange src={iconCart} alt='icon' />
            <CartLinkOrange to='/cart'>CART</CartLinkOrange>
          </>
        )}
      </LinkContainer>
      {pageStatus === 'login' ? (
        <Login
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          setPageStatus={setPageStatus}
        />
      ) : null}
      {pageStatus === 'signup' ? (
        <Signup
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          setPageStatus={setPageStatus}
          setEmail={setEmail}
        />
      ) : null}
      {pageStatus === 'otp-verification' ? (
        <OTPVerification
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          setPageStatus={setPageStatus}
        />
      ) : null}
      {pageStatus === 'otp-verification-for-password-change' ? (
        <OTPVerification
          purpose='password-change'
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          setPageStatus={setPageStatus}
        />
      ) : null}
      {pageStatus === 'get-details' ? (
        <GetDetails
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          setPageStatus={setPageStatus}
          email={email}
          setName={setName}
        />
      ) : null}
      {pageStatus === 'welcome-page' ? (
        <WelcomePage
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          setPageStatus={setPageStatus}
          name={name}
          email={email}
        />
      ) : null}
      {pageStatus === 'forgot-password' ? (
        <ForgotPassword
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          setPageStatus={setPageStatus}
          setInputType={setInputType}
          inputType={inputType}
          selectedCode={selectedCode}
          setSelectedCode={setSelectedCode}
          setEmail={setEmail}
          setMobile={setMobile}
        />
      ) : null}
      {pageStatus === 'new-password' ? (
        <PasswordChange
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          setPageStatus={setPageStatus}
          email={email}
          mobile={mobile}
          inputType={inputType}
          selectedCode={selectedCode}
        />
      ) : null}
      {pageStatus === 'password-change-success' ? (
        <PasswordChangeSuccess
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          setPageStatus={setPageStatus}
        />
      ) : null}
    </HeaderWrapper>
  );
};
export default Header;
Header.propTypes = {
  isHome: PropTypes.bool,
};
Header.defaultProps = { isHome: false };
const HeaderWrapper = styled.div`
  background-color: transparent;
  height: 60px;
  width: 1865px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
  .smallLine {
    height: 30px;
  }
  .createNew {
    margin-right: 7.75%;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 21%;
  margin-right: 1%;
  align-items: center;
`;
const ProfileConatiner = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  background-color: #d8d8d8;
  margin-right: 3%;
`;
const ProfileIcon = styled.img`
  height: 19px;
  width: 19px;
  padding: 9px;
`;
const User = styled.button`
  height: 19px;
  color: #303134;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 19px;
  margin-right: 8%;
  background-color: transparent;
  border: none;
`;
const Button = styled.button`
  height: 19px;
  background-color: transparent;
  border: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 0;
  margin-right: 8%;
`;
const VerticalLine = styled.div`
  height: 54px;
  border-right: 1px solid #000000;
  opacity: 0.1;
  margin-right: 8%;
`;
const CartIcon = styled.img`
  height: 27px;
  width: 20px;
  margin-right: 8%;
`;
const CartIconOrange = styled.img`
  height: 27px;
  width: 20px;
  margin-right: 8%;
  background-color: #fda5a3;
`;
const CartLink = styled(NavLink)`
  height: 19px;
  width: 37px;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 19px;
  text-decoration: none;
`;
const CartLinkOrange = styled(NavLink)`
  height: 19px;
  width: 37px;
  color: #fda5a3;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 19px;
  text-decoration: none;
`;
