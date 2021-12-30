/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import banner from '../../assets/images/Profilebackground.png';
import phoneicn from '../../assets/icons/phone_icn.png';
import mailicn from '../../assets/icons/mail_icn.png';
import icnInfo from '../../assets/icons/icn_info_small.png';
import profilePic from '../../assets/images/profile_pic.png';
import Profileroute from '../../components/Profilerouter/index';

const Profile = ({ setOpen }) => {
  return (
    <>
      <Profilediv>
        <div className='align'>
          <div className='mask'>
            <img src={profilePic} alt='pic' className='profile_img' />
          </div>
          <div className='name-section'>
            <span className='username'>Abdulla</span>
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
            <span className='name'>Abdulla Mohammad</span>
            <span className='num'>
              <img className='phone-icn' src={phoneicn} alt='icn' />
              +971 876561234
            </span>
            <br className='line-3 ' />
            <span className='abdulla-foodie-com '>
              <img className='mail-icn' src={mailicn} alt='icn' />
              abdulla@foodie.com
            </span>
            <br className='line-3 ' />
            <span className='credits-earned'>Credits earned-</span>
            <span className='credits-num'>256</span>
            <img className='icn-info-small' src={icnInfo} alt='icn' />
          </div>

          <ul className='list-container'>
            <Link to='/profile' className='Link'>
              <li className='span'>Order</li>
            </Link>
            <Link to='/profile/profile-address' className='Link'>
              <li className='span'>Address</li>
            </Link>
            <Link to='/profile/profile-Pay' className='Link'>
              <li className='span'>Payment Methods</li>
            </Link>
            <Link to='/profile-reviews' className='Link'>
              <li className='span'>Reviews</li>
            </Link>
            <Link to='/profile-gallary' className='Link'>
              <li className='span'>Gallary</li>
            </Link>
          </ul>
        </div>
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
  //weidth:100vw;
  height: 262px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${banner});

  .align {
    height: 261px;
    width: 940px;
    display: flex;
    position: relative;
  }
  .list-container {
    display: flex;
    height: 35px;
    list-style-type: none;
    padding-left: 0;
    position: absolute;
    top: 209px;
    .list-item {
      list-style: none;
      //height: 40px;
      &:hover {
        margin-right: 50px;
        height: 4px;
        width: 38px;
        border-radius: 2px;
        background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
        box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
      }
    }
  }
  .Link {
    display: inline-block;
    position: relative;
    text-decoration: none;
    text-align: center;
    color: #ffffff;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 24px;
    margin-right: 35px;
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
  .mask {
    height: 109px;
    width: 109px;
    border: 3px solid #ffffff;
    box-sizing: border-box;
    border-radius: 50%;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 38px;
    left: 0px;
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
  .name-section {
    height: 113px;
    width: 663px;
    position: absolute;
    top: 38px;
    left: 164px;
    padding: 1px;
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
  }
  .phone-icn {
    height: 22px;
    width: 16.5px;
    padding-right: 10px;
  }
  .mail-icn {
    height: 18px;
    width: 25px;
    padding-right: 10px;
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
    left: 213px;
  }
  .credits-earned {
    height: 22px;
    color: #ffffff;
    font-family: 'Open Sans';
    font-size: 16px;
    letter-spacing: 0;
    line-height: 22px;
    top: 86px;
    left: 443px;
    position: absolute;
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
    left: 565px;
    position: absolute;
  }
  .icn-info-small {
    height: 19px;
    width: 19px;
    top: 89px;
    left: 620px;
    position: absolute;
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
    left: 148px;
  }
  .line-3 {
    box-sizing: border-box;
    height: 21px;
    width: 3px;
    border: 1px solid #ffffff;
    opacity: 0.37;
  }
`;
