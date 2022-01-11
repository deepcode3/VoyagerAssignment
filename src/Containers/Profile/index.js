import React, { useState, Suspense } from 'react';
import styled from 'styled-components';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Profile from './Profile';
import EditModal from '../../Components/Editmodel';

// const Profile = React.lazy(() => {
//   import('./Profile');
// });
// const EditModal = React.lazy(() => {
//   import('../../Components/Editmodel/index');
// });

const ProfileMain = () => {
  const [open, setOpen] = useState(false);
  return (
    <Div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <>
          <Profile open={open} setOpen={setOpen} />
          {open && <EditModal setOpen={setOpen} />}
        </>
      </Suspense>
      <Footer />
    </Div>
  );
};
export default ProfileMain;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-right: auto;
  margin-left: auto;
`;
