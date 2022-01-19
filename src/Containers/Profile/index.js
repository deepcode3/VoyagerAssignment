import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Profile from './Profile';
import EditModal from '../../Components/Editmodel';

const ProfileMain = () => {
  const [open, setOpen] = useState(false);
  return (
    <Div>
      <div className='headerDivProfile'>
        <Header />
      </div>
      <Profile open={open} setOpen={setOpen} />
      {open && <EditModal setOpen={setOpen} />}
      <div className='footerDivProfile'>
        <Footer />
      </div>
    </Div>
  );
};
export default ProfileMain;

const Div = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0px;
  left: 00px;
  padding-top: 2%;
  .headerDivProfile {
    width: 100%;
    position: relative;
    align-items: center;
    right: 0;
    left: auto;
  }
  .footerDivProfile {
    position: relative;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    @media all and (max-width: 550px) {
      display: none;
    }
  }
`;
