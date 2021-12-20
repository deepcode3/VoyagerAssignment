import React, { useState } from 'react';
import styled from 'styled-components';
import ForgotPassword from '../ForgotPassword';
import Login from '../Login';
import PasswordChange from '../PasswordChange';
import Signup from '../Signup';
import OTPVerification from '../OTPVerification';
import GetDetails from '../GetDetails';
import WelcomePage from '../WelcomePage';
import PasswordChangeSuccess from '../PasswordChangeSuccess';
const HomeTobeDeleted = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [pageStatus, setPageStatus] = useState('login');
	return (
		<Wrapper>
			<button
				onClick={() => {
					setModalIsOpen(true);
				}}
			>
				login
			</button>
			{pageStatus === 'login' ? (
				<Login
					modalIsOpen={modalIsOpen}
					setModalIsOpen={setModalIsOpen}
					setPageStatus={setPageStatus}
				></Login>
			) : null}
			{pageStatus === 'signup' ? (
				<Signup
					modalIsOpen={modalIsOpen}
					setModalIsOpen={setModalIsOpen}
					setPageStatus={setPageStatus}
				></Signup>
			) : null}
			{pageStatus === 'otp-verification' ? (
				<OTPVerification
					modalIsOpen={modalIsOpen}
					setModalIsOpen={setModalIsOpen}
					setPageStatus={setPageStatus}
				></OTPVerification>
			) : null}
			{pageStatus === 'otp-verification-for-password-change' ? (
				<OTPVerification
					purpose="password-change"
					modalIsOpen={modalIsOpen}
					setModalIsOpen={setModalIsOpen}
					setPageStatus={setPageStatus}
				></OTPVerification>
			) : null}
			{pageStatus === 'get-details' ? (
				<GetDetails
					modalIsOpen={modalIsOpen}
					setModalIsOpen={setModalIsOpen}
					setPageStatus={setPageStatus}
				></GetDetails>
			) : null}
			{pageStatus === 'welcome-page' ? (
				<WelcomePage
					modalIsOpen={modalIsOpen}
					setModalIsOpen={setModalIsOpen}
					setPageStatus={setPageStatus}
				></WelcomePage>
			) : null}
			{pageStatus === 'forgot-password' ? (
				<ForgotPassword
					modalIsOpen={modalIsOpen}
					setModalIsOpen={setModalIsOpen}
					setPageStatus={setPageStatus}
				></ForgotPassword>
			) : null}
			{pageStatus === 'new-password' ? (
				<PasswordChange
					modalIsOpen={modalIsOpen}
					setModalIsOpen={setModalIsOpen}
					setPageStatus={setPageStatus}
				></PasswordChange>
			) : null}
			{pageStatus === 'password-change-success' ? (
				<PasswordChangeSuccess
					modalIsOpen={modalIsOpen}
					setModalIsOpen={setModalIsOpen}
					setPageStatus={setPageStatus}
				></PasswordChangeSuccess>
			) : null}
		</Wrapper>
	);
};
export default HomeTobeDeleted;
const Wrapper = styled.div`
	background-image: url('../../assets/images/home-loginBg.jpg');
	width: 1920px;
	height: 900px;
	position: relative;
	left: 00px;
	top: -10px;
	padding-left: 50%;
`;
