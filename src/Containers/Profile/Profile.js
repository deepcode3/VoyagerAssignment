/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaBars, FaTimes } from 'react-icons/fa';
import banner from '../../Assets/Images/Profilebackground.png';
import phoneicn from '../../Assets/Icons/phone_icn.png';
import mailicn from '../../Assets/Icons/mail_icn.png';
import icnInfo from '../../Assets/Icons/icn_info_small.png';
import profilePic from '../../Assets/Images/profile_pic.png';
import Profileroute from '../../Components/Profilerouter/index';
import { UserContext } from '../../Context/UserContext/index';
// import Device from '../../DeviceSize';

const Profile = ({ setOpen }) => {
  const { currentUser } = useContext(UserContext);
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
        <Container>
          <MobileProfile onClick={handleClick1} click1={click1}>
            <img src={profilePic} alt='pic' className='profile_img' />
          </MobileProfile>
          <MobileIcon onClick={handleClick} click={click}>
            {click ? <FaTimes /> : <FaBars style={{ color: '#fda200' }} />}
          </MobileIcon>
          <ProfileList click1={click1}>
            <div>
              {click1 ? (
                <FaTimes
                  className='close'
                  onClick={handleClick1}
                  style={{ color: 'white', position: 'absolute', left: '600px', top: '20px' }}
                />
              ) : null}
            </div>
            <div className='profile'>
              <img src={profilePic} alt='pic' className='profile_img' />
            </div>
            <span className='username'>{currentUser.username}</span>
            <span
              className='edit'
              type='button'
              onClick={() => {
                setOpen(true);
              }}
              role='button'
              onKeyDown={null}
            >
              Edit
            </span>
            <span className='username'>{currentUser.firstname}</span>
            <span className='name'>{`${currentUser.firstname} ${currentUser.lastname}`}</span>
            <span className='num'>
              <img className='phone-icn' src={phoneicn} alt='icn' />
              {`+${currentUser.countrycode} ${currentUser.mobile}`}
            </span>
            <hr className='line-1 ' />
            <span className='abdulla-foodie-com '>
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
            <NavLinks to='/profile-reviews'>
              <NavItem>Reviews</NavItem>
            </NavLinks>
            <NavLinks to='/profile-gallary'>
              <NavItem>Gallary</NavItem>
            </NavLinks>
          </NavMenu>
        </Container>
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
  //width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${banner});
  background-color: white;
  @media screen and (max-width: 393px) {
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
  @media screen and (max-width: 393px) {
    height: 29px;
    width: 29px;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 50%;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 110px;
    left: 300px;
  }
`;
const MobileIcon = styled.div`
  display: none;
  backround-color: red;
  @media screen and (max-width: 393px) {
    display: block;
    position: absolute;
    top: 100px;
    right: 290px;
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
  @media screen and (max-width: 393px) {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
    height: 90vh;
    top: -16px;
    left: ${({ click }) => {
      return click ? 0 : '-100%';
    }};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
    z-index: 1;
  }
`;
const NavItem = styled.li`
  list-style: none;
  @media screen and (max-width: 393px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;
const NavLinks = styled(Link)`
    color: #ffffff;
    display: flex;
    align-items:center;
    text-decoration: none;
    text-align: center; 
    position: relative;
    font-family: 'Open Sans';
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1.5rem;
    margin-right: 2.2rem;
    &:hover:before {
      content: '';
      height: 4px;
      width: 38px;
      position: absolute;
      left: 0;
      bottom: 0;
      border-radius: 2px;
      background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
      box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
    }
    @media screen and (max-width: 954px) {
      text-align:center;
      padding:2rem;
      width:100%;
      display:table;
      &:hover{
        color: #ffffff;
        transition:all 0.3s ease;
      }
   }

  }

  .Link:hover:before {
    content: '';
    height: 4px;
    width: 38px;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 2px;
    background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
    box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
  }
  .Link span {
    display: block;
    width: 100px;
    height: 40px;
    padding-top: 20px;
  }
`;
const Container = styled.div`
  height: 261px;
  width: 940px;
  display: flex;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 954px) {
    // display: none;
    position: absolute;
    cursor: pointer;
  }
  .profile_img {
    height: 100%;
    width: 100%;
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
  @media screen and (max-width: 954px) {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 80%;
    overflow-y: auto;
    height: 90vh;
    top: -2px;
    left: ${({ click1 }) => {
      return click1 ? 0 : '-100%';
    }};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
    z-index: 1;
  }
  .clsoe {
    display: none;
    @media screen and (max-width: 954px) {
      display: block;
    }
  }
  .profile {
    display: none;
    @media screen and (max-width: 393px) {
      display: block;
      height: 109px;
      width: 109px;
      border: 3px solid #ffffff;
      box-sizing: border-box;
      border-radius: 50%;
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
      position: absolute;
      top: 50px;
      left: 409px;
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
    @media screen and (max-width: 393px) {
      display: flex;
      left: 330px;
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
    @media screen and (max-width: 393px) {
      display: flex;
      left: 330px;
      top: 260px;
    }
  }
  .num {
    height: 22px;
    color: #ffffff;
    font-family: 'Open Sans';
    font-size: 16px;
    letter-spacing: 0;
    line-height: 22px;
    display: flex;
    position: absolute;
    top: 86px;
    @media screen and (max-width: 393px) {
      display: flex;
      left: 330px;
      top: 320px;
    }
  }
  .line-1 {
    box-sizing: border-box;
    height: 21px;
    width: 0.5px;
    color: 1px solid #ffffff;
    opacity: 0.37;
    position: absolute;
    top: 77px;
    left: 173px;
    @media screen and (max-width: 393px) {
      display: none;
    }
  }
  .phone-icn {
    height: 22px;
    width: 16.5px;
    padding-right: 10px;
    @media screen and (max-width: 393px) {
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
    top: 77px;
    left: 487px;
    @media screen and (max-width: 393px) {
      display: none;
    }
  }
  .abdulla-foodie-com {
    height: 22px;
    color: #ffffff;
    font-family: 'Open Sans';
    font-size: 16px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    top: 86px;
    left: 200px;
    @media screen and (max-width: 393px) {
      display: flex;
      left: 330px;
      top: 380px;
    }
  }

  .mail-icn {
    height: 18px;
    width: 25px;
    padding-right: 10px;
    @media screen and (max-width: 393px) {
      display: flex;
      left: 330px;
      top: 260px;
    }
  }
  .credits-earned {
    height: 22px;
    color: #ffffff;
    font-family: 'Open Sans';
    font-size: 16px;
    letter-spacing: 0;
    line-height: 22px;
    top: 86px;
    left: 510px;
    position: absolute;
    @media screen and (max-width: 393px) {
      display: flex;
      left: 330px;
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
    top: 79px;
    left: 630px;
    position: absolute;
    @media screen and (max-width: 393px) {
      display: flex;
      left: 450px;
      top: 435px;
    }
  }
  .icn-info-small {
    height: 19px;
    width: 19px;
    top: 89px;
    left: 680px;
    position: absolute;
    @media screen and (max-width: 393px) {
      display: flex;
      left: 330px;
      top: 17px;
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
    @media screen and (max-width: 393px) {
      display: flex;
      left: 330px;
      top: 500px;
    }
  }
  .line-3 {
    box-sizing: border-box;
    height: 21px;
    width: 0.5px;
    color: 1px solid #ffffff;
    opacity: 0.37;
    @media screen and (max-width: 393px) {
      display: none;
    }
  }
`;
