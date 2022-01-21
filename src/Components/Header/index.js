/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
import icnMenu from '../../Assets/Icons/menu.png';
import { signOut } from '../../Actions/LoginActions';
import LoginLayout from '../LoginLayout';
import closeButton from '../../Assets/Icons/close_button.png';

const Header = ({ isHome }) => {
  const currentUser = useSelector((state) => {
    return state.currentUser;
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pageStatus, setPageStatus] = useState('login');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [inputType, setInputType] = useState('email');
  const [selectedCode, setSelectedCode] = useState('91');
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const handleLogout = () => {
    dispatch(signOut());
    history.push('/');
  };

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
              {currentUser.username.toUpperCase()}
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

      {currentUser === null ? (
        <>
          <MenuIcon
            onClick={() => {
              setDropDownStatus(true);
            }}
          >
            <img className='menuIcon' src={icnMenu} alt='more' />
          </MenuIcon>
          {dropDownStatus ? (
            <DropDowm>
              <Closebutton
                onClick={() => {
                  setDropDownStatus(false);
                }}
              >
                <img src={closeButton} alt='close' />
              </Closebutton>
              <LinkTo
                onClick={() => {
                  setModalIsOpen(true);
                  setDropDownStatus(false);
                }}
              >
                LOGIN
              </LinkTo>
              <LinkTo
                onClick={() => {
                  setPageStatus('signup');
                  setModalIsOpen(true);
                  setDropDownStatus(false);
                }}
              >
                CREATE NEW ACCOUNT
              </LinkTo>
              <LinkTo
                onClick={() => {
                  history.push('/cart-home');
                  setDropDownStatus(false);
                }}
              >
                CART
              </LinkTo>
            </DropDowm>
          ) : null}
        </>
      ) : (
        <>
          <MenuIcon
            onClick={() => {
              setDropDownStatus(true);
            }}
          >
            <img className='menuIcon' src={icnProfile} alt='more' />
          </MenuIcon>
          {dropDownStatus ? (
            <DropDowm>
              <Closebutton
                onClick={() => {
                  setDropDownStatus(false);
                }}
              >
                <img src={closeButton} alt='close' />
              </Closebutton>
              <LinkTo
                onClick={() => {
                  history.push('/profile');
                  setDropDownStatus(false);
                }}
              >
                PROFILE
              </LinkTo>
              <LinkTo
                onClick={() => {
                  history.push('/cart-home');
                  setDropDownStatus(false);
                }}
              >
                CART
              </LinkTo>

              <LinkTo
                onClick={() => {
                  handleLogout();
                  setDropDownStatus(false);
                }}
              >
                LOGOUT
              </LinkTo>
            </DropDowm>
          ) : null}
        </>
      )}
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
  height: 3.75rem;
  width: 97%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start
  align-items: center;
  margin-left: 3%;
  .smallLine {
    height: 30px;
  }
  @media (max-width: 550px) {
    margin-top:5%;
  }
`;
const MenuIcon = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  background-color: transparent;
  margin-right: 20px;
  margin-top: 10px;
  .menuIcon {
    width: 25px;
    height: 25px;
  }
  @media (min-width: 550px) {
    display: none;
  }
`;
const DropDowm = styled.div`
  width: 50%;
  height: auto;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  z-index: 99;
  position: absolute;
  justify-content: space-around;
  top: 20%;
  margin-left: 43%;
  padding: 4px;
`;
const Closebutton = styled.button`
  width: 5%;
  padding: 0;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 3px;
  right: 5%;
`;
const LinkTo = styled.button`
  width: 90%;
  height: 2.7rem;
  background-color: transparent;
  color: #dd5335;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  background-clip: text;
  background: -webkit-linear-gradient(138.33deg, #feb456 0%, #ee4e78 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 30%;
  right: 0px;
  align-items: center;
  margin-left: 70%;
  @media (max-width: 1750px) {
    width: 50%;
    margin-left: 60%;
  }
  @media (max-width: 1400px) {
    width: 60%;
    margin-left: 50%;
  }
  @media (max-width: 1100px) {
    width: 70%;
    margin-left: 40%;
  }
  @media (max-width: 900px) {
    width: 80%;
    margin-left: 30%;
  }
`;
const ProfileConatiner = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  background-color: #d8d8d8;
  margin-right: 3%;
  @media (max-width: 550px) {
    display: none;
  }
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
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 19px;
  margin-right: 8%;
  background-color: transparent;
  border: none;
  @media (max-width: 550px) {
    display: none;
  }
`;
const Button = styled.button`
  height: 19px;
  background-color: transparent;
  border: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 0;
  margin-right: 8%;
  cursor: pointer;
  @media (max-width: 550px) {
    display: none;
  }
`;
const VerticalLine = styled.div`
  height: 54px;
  border-right: 1px solid #000000;
  opacity: 0.1;
  margin-right: 8%;
  @media (max-width: 550px) {
    display: none;
  }
`;
const CartIcon = styled.img`
  height: 27px;
  width: 20px;
  margin-right: 8%;
  @media (max-width: 1450px) {
    background-color: #fda5a3;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
const CartIconOrange = styled.img`
  height: 27px;
  width: 20px;
  margin-right: 8%;
  background-color: #fda5a3;
  @media (max-width: 550px) {
    display: none;
  }
`;
const CartLink = styled(NavLink)`
  height: 19px;
  width: 37px;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 19px;
  text-decoration: none;
  margin-right: 5%;
  @media (max-width: 1400px) {
    color: #fda5a3;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
const CartLinkOrange = styled(NavLink)`
  height: 19px;
  width: 37px;
  color: #fda5a3;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 19px;
  text-decoration: none;
  margin-right: 5%;
  @media (max-width: 550px) {
    display: none;
  }
`;
