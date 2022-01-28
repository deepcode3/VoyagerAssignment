/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable indent */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FaBars, FaTimes } from 'react-icons/fa';
import banner from '../../Assets/Images/Profilebackground.png';
import phoneicn from '../../Assets/Icons/phone_icn.png';
import mailicn from '../../Assets/Icons/mail_icn.png';
import icnInfo from '../../Assets/Icons/icn_info_small.png';
import profilePic from '../../Assets/Images/profile_pic.png';
import Profileroute from '../../Components/Profilerouter/index';
// import Device from '../../DeviceSize';

const Profile = ({ setOpen }) => {
  const currentUser = useSelector((state) => {
    return state.currentUser;
  });
  console.log(currentUser);
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const handleClick1 = () => {
    setClick1(!click1);
  };
  return (
    <>
      <Profilediv>
        <ProfileDivCenter>
          <MobileProfile onClick={handleClick1} click1={click1}>
            <img src={profilePic} alt='pic' className='profile_img' />
          </MobileProfile>
          <MobileIcon onClick={handleClick} click={click}>
            {click ? (
              <FaTimes />
            ) : (
              <FaBars style={{ color: '#fda200', height: '20px', width: '20px' }} />
            )}
          </MobileIcon>
          <ProfileList click1={click1}>
            <div>
              {click1 ? (
                <FaTimes
                  className='close'
                  onClick={handleClick1}
                  style={{
                    color: 'white',
                    position: 'absolute',
                    left: '350px',
                    top: '60px',
                    width: '20px',
                    height: '20px',
                  }}
                />
              ) : null}
            </div>
            <div className='profile'>
              <img src={profilePic} alt='pic' className='profile_img' />
            </div>

            <span
              className='edit'
              type='button'
              onClick={() => {
                setOpen(true);
                setClick1(!click1);
              }}
              role='button'
              onKeyDown={null}
            >
              Edit
            </span>
            <span className='username' onClick={handleClick1} role='button' onKeyDown={null}>
              {currentUser.username}
            </span>
            <span className='name'>{`${currentUser.firstname} ${currentUser.lastname}`}</span>

            {currentUser.mobile !== undefined ? (
              <span className='num'>
                <img className='phone-icn' src={phoneicn} alt='icn' />
                {`+${currentUser.countrycode} ${currentUser.mobile}`}
              </span>
            ) : null}

            <hr className='line-1 ' />
            <span className='email'>
              <img className='mail-icn' src={mailicn} alt='icn' />
              {currentUser.email}
            </span>
            <hr className='line-2 ' />
            <span className='credits-earned'>Credits earned-</span>
            <span className='credits-num'>256</span>
            <img className='icn-info-small' src={icnInfo} alt='icn' />
          </ProfileList>
          <NavMenu onClick={handleClick} click={click}>
            <NavLinks to='/profile'>
              <NavItem>Order</NavItem>
            </NavLinks>
            <NavLinks to='/profile/profile-address'>
              <NavItem>Address</NavItem>
            </NavLinks>
            <NavLinks to='/profile/profile-Pay'>
              <NavItem> Payment Methods</NavItem>
            </NavLinks>
            <NavLinks to='/profile/profile-Review'>
              <NavItem>Reviews</NavItem>
            </NavLinks>
            <NavLinks to='/profile/profile-Gallary'>
              <NavItem>Gallary</NavItem>
            </NavLinks>
          </NavMenu>
        </ProfileDivCenter>
      </Profilediv>
      <Profileroute />
    </>
  );
};
export default Profile;
Profile.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

const Profilediv = styled.div`
  height: 262px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${banner});
  background-color: white;
  @media screen and (max-width: 500px) {
    margin-top: 20px;
    height: 100px;
  }
`;
const MobileProfile = styled.div`
  height: 109px;
  width: 109px;
  border: 3px solid #ffffff;
  box-sizing: border-box;
  border-radius: 50%;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 38px;
  left: 0px;
  @media screen and (max-width: 500px) {
    height: 29px;
    width: 29px;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 50%;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 35px;
    left: 60px;
  }
`;
const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
    position: absolute;
    top: 25px;
    left: 340px;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  height: 35px;
  list-style-type: none;
  padding-left: 0;
  position: absolute;
  top: 209px;
  text-align: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: table;
    position: absolute;
    overflow-y: auto;
    width: 100%;
    height: 80vh;
    padding-top: 100px;
    top: -10px;
    left: ${({ click }) => {
      return click ? 0 : '110%';
    }};

    opacity: 1;
    transition: all 0.5s ease;
    background: #3e3e3e;
    z-index: 1;
  }
`;
const NavItem = styled.li`
  list-style: none;
  @media screen and (max-width: 500px) {
    width: 100%;
    float: left;
    display: table-cell;
    text-align: center;
    &:hover {
      border: none;
    }
  }
`;
const NavLinks = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-align: center;
  position: relative;
  font-family: 'Open Sans';
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.5rem;
  margin-right: 2.2rem;
  z-index: 1;
  position: relative;
  &:hover:after {
    content: '';
    height: 4px;
    width: 38px;
    position: absolute;
    left: 0;
    bottom: -7px;
    border-radius: 2px;
    background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
    box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
  }
  @media screen and (max-width: 500px) {
    text-align: center;
    padding: 2rem;
    width: 95%;
    display: block;
    font-size: 1.5rem;
    color: #f57c00;
    &:hover:before {
      height: 0px;
      width: 0px;
      transition: all 0.3s ease;
    }
  }
`;

const ProfileDivCenter = styled.div`
  height: 261px;
  width: 940px;
  display: flex;
  position: relative;
  //background-color: red;
  @media screen and (max-width: 998px) {
    //background-color: purple;
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    //  background-color: green;
    width: 90%;
  }
  @media screen and (max-width: 500px) {
    // background-color: pink;
    width: 90%;
  }
  .profile_img {
    width: 100%;
    height: 100%;
    display: inline-block;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 50%;
    //position: absolute;
  }
`;
const ProfileList = styled.div`
  display: flex;
  height: 113px;
  width: 663px;
  position: absolute;
  top: 38px;
  left: 164px;
  padding: 1px;
  @media screen and (max-width: 500px) {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    top: 1px;
    left: ${({ click1 }) => {
      return click1 ? 0 : '-110%';
    }};
    opacity: 1;
    transition: all 0.5s ease;
    background: #3e3e3e;
    z-index: 1;
  }
  .close {
    display: none;
    @media screen and (max-width: 954px) {
      display: block;
    }
  }
  .profile {
    display: none;
    @media screen and (max-width: 500px) {
      display: block;
      height: 109px;
      width: 109px;
      border: 3px solid #ffffff;
      box-sizing: border-box;
      border-radius: 50%;
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
      position: absolute;
      top: 50px;
      left: 160px;
    }
  }
  .username {
    height: 42px;
    width: 119px;
    color: #ffffff;
    font-family: 'Open Sans';
    font-size: 31px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 42px;
    position: absolute;
    left: 1px;
    @media screen and (max-width: 500px) {
      display: flex;
      left: 100px;
      top: 200px;
    }
  }
  .name {
    height: 22px;
    width: 153px;
    color: #ffffff;
    font-family: 'Open Sans';
    font-size: 16px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    top: 48px;
    justify-content: space-between;
    position: absolute;
    left: 1px;
    @media screen and (max-width: 500px) {
      display: flex;
      left: 100px;
      top: 260px;
    }
  }
  .num {
    color: #ffffff;
    font-family: 'Open Sans';
    letter-spacing: 0;
    font-size: 1rem;
    line-height: 1.375rem;
    display: flex;
    position: absolute;
    top: 80%;
    @media screen and (max-width: 998px) {
      font-size: 0.85rem;
      line-height: 1.275rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.75rem;
      line-height: 1.075rem;
    }
    @media screen and (max-width: 500px) {
      display: flex;
      left: 100px;
      top: 320px;
      font-size: 1.2rem;
      line-height: 2.075rem;
    }
  }
  .line-1 {
    box-sizing: border-box;
    height: 21px;
    width: 0.5px;
    color: 1px solid #ffffff;
    opacity: 0.37;
    position: absolute;
    top: 73%;
    left: 26%;
    @media screen and (max-width: 998px) {
      left: 23%;
    }
    @media screen and (max-width: 768px) {
      left: 19%;
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  .phone-icn {
    height: 22px;
    width: 16.5px;
    padding-right: 10px;
    @media screen and (max-width: 500px) {
      display: flex;
    }
  }
  .line-2 {
    box-sizing: border-box;
    height: 21px;
    width: 0.5px;
    color: 1px solid #ffffff;
    opacity: 0.37;
    position: absolute;
    top: 73%;
    left: 72%;
    @media screen and (max-width: 998px) {
      left: 62%;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  .email {
    height: 22px;
    color: #ffffff;
    font-family: 'Open Sans';
    letter-spacing: 0;
    font-size: 1rem;
    line-height: 1.375;
    position: absolute;
    top: 80%;
    left: 30%;
    @media screen and (max-width: 998px) {
      font-size: 0.85rem;
      line-height: 1.275rem;
      left: 25%;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.75rem;
      line-height: 1.075rem;
      left: 20%;
    }
    @media screen and (max-width: 500px) {
      display: flex;
      left: 100px;
      top: 380px;
      font-size: 1.2rem;
      line-height: 2.075rem;
    }
  }

  .mail-icn {
    height: 18px;
    width: 25px;
    padding-right: 10px;
    @media screen and (max-width: 500px) {
      display: flex;
      left: 330px;
      top: 260px;
    }
  }
  .credits-earned {
    height: 22px;
    color: #ffffff;
    font-family: 'Open Sans';
    letter-spacing: 0;
    font-size: 1rem;
    line-height: 1.375;
    top: 80%;
    left: 75%;
    position: absolute;
    @media screen and (max-width: 998px) {
      font-size: 0.85rem;
      line-height: 1.275rem;
      left: 63%;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.75rem;
      line-height: 1.075rem;
      top: 110%;
      left: 0%;
    }
    @media screen and (max-width: 500px) {
      display: flex;
      font-size: 1.2rem;
      line-height: 2.075rem;
      left: 100px;
      top: 440px;
    }
  }
  .credits-num {
    height: 33px;
    width: 48px;
    color: #ffffff;
    font-family: 'Open Sans';
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 33px;
    top: 75%;
    left: 630px;
    position: absolute;
    @media screen and (max-width: 998px) {
      font-size: 0.85rem;
      line-height: 1.275rem;
      top: 80%;
      left: 78%;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.75rem;
      line-height: 1.075rem;
      top: 110%;
      left: 14%;
    }
    @media screen and (max-width: 500px) {
      display: flex;
      font-size: 1.5rem;
      line-height: 2.075rem;
      left: 230px;
      top: 440px;
    }
  }
  .icn-info-small {
    height: 19px;
    width: 19px;
    top: 80%;
    left: 680px;
    position: absolute;
    @media screen and (max-width: 998px) {
      font-size: 0.85rem;
      line-height: 1.275rem;
      left: 82%;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.75rem;
      line-height: 1.075rem;
      top: 110%;
      left: 20%;
    }
    @media screen and (max-width: 500px) {
      display: flex;
      left: 170px;
      top: 500px;
    }
  }
  .edit {
    height: 19px;
    width: 30px;
    color: #fda200;
    font-family: 'SF UI Text';
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 19px;
    text-align: right;
    position: absolute;
    top: 18px;
    left: 160px;
    @media screen and (max-width: 500px) {
      display: flex;
      left: 100px;
      top: 500px;
    }
  }
  .line-3 {
    box-sizing: border-box;
    height: 21px;
    width: 0.5px;
    color: 1px solid #ffffff;
    opacity: 0.37;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;
