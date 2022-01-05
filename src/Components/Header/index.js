/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-nested-ternary */
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
import LoginLayout from '../LoginLayout';

const Header = ({ isHome }) => {
  const { currentUser, signOut } = useContext(UserContext);
  const history = useHistory();
  const [state, trigger] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pageStatus, setPageStatus] = useState('login');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [inputType, setInputType] = useState('email');
  const [selectedCode, setSelectedCode] = useState('91');
  const handleLogout = () => {
    signOut();
    trigger(!state);
    history.push('/');
  };
  useEffect(() => {}, [trigger]);
  return (
    <HeaderWrapper>
      {isHome ? <Logo /> : <Logo afterLogin />}
      <LinkContainer>
        {currentUser !== null ? (
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
        {currentUser !== null ? (
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
            <CartLink to='/cart-home'>CART</CartLink>
          </>
        ) : (
          <>
            <CartIconOrange src={iconCart} alt='icon' />
            <CartLinkOrange to='/cart-home'>CART</CartLinkOrange>
          </>
        )}
      </LinkContainer>
      <LoginLayout
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        setPageStatus={setPageStatus}
      >
        {pageStatus === 'login' ? (
          <Login />
        ) : pageStatus === 'signup' ? (
          <Signup setEmail={setEmail} />
        ) : pageStatus === 'otp-verification' ? (
          <OTPVerification />
        ) : pageStatus === 'otp-verification-for-password-change' ? (
          <OTPVerification purpose='password-change' />
        ) : pageStatus === 'get-details' ? (
          <GetDetails email={email} setName={setName} />
        ) : pageStatus === 'welcome-page' ? (
          <WelcomePage name={name} email={email} />
        ) : pageStatus === 'forgot-password' ? (
          <ForgotPassword
            setInputType={setInputType}
            inputType={inputType}
            selectedCode={selectedCode}
            setSelectedCode={setSelectedCode}
            setEmail={setEmail}
            setMobile={setMobile}
          />
        ) : pageStatus === 'new-password' ? (
          <PasswordChange
            email={email}
            mobile={mobile}
            inputType={inputType}
            selectedCode={selectedCode}
          />
        ) : pageStatus === 'password-change-success' ? (
          <PasswordChangeSuccess />
        ) : null}
      </LoginLayout>
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
  width: 97%;
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
  width: 30%;
  margin-right: -2%;
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
  cursor: pointer;
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
  cursor: pointer;
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
