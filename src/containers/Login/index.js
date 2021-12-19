import React from 'react';
import Modal from 'react-modal';
import closeButton from '../../assets/icons/close_button.png';
import styled from 'styled-components';
import LogoWithText from '../../components/loginComponents/logoWithText/index';
import InputField from '../../components/loginComponents/InputField/index';
import StyledButton from '../../components/commonButton/index';
import LoginOptions from '../../components/loginComponents/LoginOptions';
import TextWithButton from '../../components/loginComponents/TextWithButton';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
Modal.setAppElement('#root');
const Login = ({ modalIsOpen, setModalIsOpen, setPageStatus }) => {
	const schema = yup.object().shape({
		email: yup
			.string()
			.email('Invalid email address')
			.required('Email id is required'),
		password: yup.string().required('Password is required'),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const handleSignupClick = () => {
		setPageStatus('signup');
	};
	const submitForm = (data) => {
		console.log(data);
		setModalIsOpen(false);
	};

	return (
		<Modal
			className="wrapper"
			isOpen={modalIsOpen}
			onRequestClose={() => {
				setPageStatus('login');
				setModalIsOpen(false);
			}}
			style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.7)' } }}
		>
			<Wrapper>
				<LogoWithText />
				<RightWrapper>
					<Button
						onClick={() => {
							setPageStatus('login');
							setModalIsOpen(false);
						}}
					>
						<img src={closeButton} alt="cut"></img>
					</Button>
					<BlackText>Lets get started!</BlackText>
					<Form onSubmit={handleSubmit(submitForm)}>
						<InputField
							name="email"
							register={register}
							msg={errors.email?.message}
							label="Email"
						/>

						<InputField
							name="password"
							register={register}
							isPassword={true}
							msg={errors.password?.message}
							label="Password"
						/>

						<ForgotButton
							type="button"
							onClick={() => setPageStatus('forgot-password')}
						>
							Forgot Password?
						</ForgotButton>
						<StyledButton type="submit">LOGIN</StyledButton>
					</Form>
					<LoginOptions />
					<TextWithButton
						text="Don't have an account?"
						buttonName="Get one now!"
						handleClick={handleSignupClick}
					/>
				</RightWrapper>
			</Wrapper>
		</Modal>
	);
};
export default Login;
const Wrapper = styled.div`
	height: 588px;
	width: 960px;
	border-radius: 8px;
	background-color: #ffffff;
	box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: row;
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	margin: auto;
`;

const RightWrapper = styled.div`
	background-color: white;
	height: 588px;
	width: 480px;
	display: flex;
	flex-direction: column;
	border-radius: 0 7px 7px 0;
	align-items: center;
`;
const Button = styled.button`
	width: 5%;
	padding: 0;
	background-color: transparent;
	border: none;
	right: 0px;
	position: absolute;
	top: 3%;
`;
const BlackText = styled.p`
	height: 38px;
	width: 220px;
	color: #2a2c30;
	font-family: 'Open Sans', sans-serif;
	font-size: 28px;
	font-weight: bold;
	line-height: 38px;
	text-shadow: 0 0 9px 0 #ffffff;
	margin-bottom: 10%;
	margin-top: 10%;
	margin-right: 3%;
`;
const Form = styled.form`
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ForgotButton = styled.button`
	color: black;
	background-color: transparent;
	font-family: 'Open Sans', sans-serif;
	border: none;
	font-weight: 100;
	outline: none;
	margin-left: 67%;
	margin-top: -8%;
`;