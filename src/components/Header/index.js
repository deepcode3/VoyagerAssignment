import { React, useState } from 'react';
import styled from 'styled-components';
import Logo from '../logo';
import ForgotPassword from '../../containers/ForgotPassword';
import Login from '../../containers/Login';
import PasswordChange from '../../containers/PasswordChange';
import Signup from '../../containers/Signup';
import OTPVerification from '../../containers/OTPVerification';
import GetDetails from '../../containers/GetDetails';
import WelcomePage from '../../containers/WelcomePage';
import PasswordChangeSuccess from '../../containers/PasswordChangeSuccess';
import { NavLink } from 'react-router-dom';
import icon_cart from '../../assets/icons/icn_cart.png';
import icn_profile from '../../assets/icons/icn_profile.svg';
const Header = ({ afterLogin }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [pageStatus, setPageStatus] = useState('login');
	return (
		<HeaderWrapper>
			{afterLogin ? <Logo afterLogin /> : <Logo />}
			<LinkContainer>
				{afterLogin ? (
					<>
						<ProfileConatiner>
							<ProfileIcon src={icn_profile} alt="icon"></ProfileIcon>
						</ProfileConatiner>
						<User>ASHLEY</User>
						<VerticalLine className="smallLine" />
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
				{afterLogin ? (
					<Button>LOGOUT</Button>
				) : (
					<Button
						onClick={() => {
							setPageStatus('signup');
							setModalIsOpen(true);
						}}
					>
						CREATE AN ACCOUNT
					</Button>
				)}
				{afterLogin ? (
					<>
						<CartIconOrange src={icon_cart} alt="icon" />
						<CartLinkOrange to="/cart">CART</CartLinkOrange>
					</>
				) : (
					<>
						<VerticalLine />
						<CartIcon src={icon_cart} alt="icon" />
						<CartLink to="/cart">CART</CartLink>
					</>
				)}
			</LinkContainer>
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
		</HeaderWrapper>
	);
};
export default Header;
const HeaderWrapper = styled.div`
	background-color: transparent;
	height: 70px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	.smallLine {
		height: 30px;
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
const User = styled.p`
	height: 19px;
	color: #303134;
	font-family: 'Open Sans', sans-serif;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.5px;
	line-height: 19px;
	margin-right: 8%;
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
	margin-left: 15%;
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
