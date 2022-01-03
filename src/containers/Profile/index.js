import styled from 'styled-components';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Profile from './Profile';
import EditModal from '../../components/Editmodel/index';

const ProfileMain = () => {
  const [open, setOpen] = useState(false);
  return (
    <Div>
      <Header />
      <Profile open={open} setOpen={setOpen} />
      {open && <EditModal setOpen={setOpen} />}
      <Footer />
    </Div>
  );
};
export default ProfileMain;

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;