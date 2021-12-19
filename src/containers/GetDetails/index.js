import { React, useState } from 'react';
import BackIcon from '../../assets/icons/back_icon.png';
import styled from 'styled-components';
import LogoWithText from '../../components/loginComponents/logoWithText/index';
import StyledButton from '../../components/commonButton/index';
import Modal from 'react-modal';
import InputField from '../../components/loginComponents/InputField';
import TelephonePicker from '../../components/TelephonePicker/index';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

Modal.setAppElement('#root');
const GetDetails = ({ modalIsOpen, setModalIsOpen, setPageStatus }) => {
	const [selectedCode, setSelectedCode] = useState('91');
	const schema = yup.object().shape({
		firstName: yup.string().required('First name is required'),
		lastName: yup.string().required('Last name is required'),
		mobile: yup
			.string()
			.matches(/^[0-9]+$/, {
				message: 'Phone not valid',
				excludeEmptyString: true,
			})
			.matches(/^\d{10}$/, {
				message: 'Phone not valid',
				excludeEmptyString: true,
			}),
		password: yup.string().required('Password is required'),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const submitForm = (data) => {
		data.code = selectedCode;
		console.log(data);
		setPageStatus('welcome-page');
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
					<BackButton onClick={() => setPageStatus('otp-verification')}>
						<img className="backArrow" src={BackIcon} alt="back"></img>
					</BackButton>
					<BlackText>Verified! </BlackText>
					<Description>Your Email is verified.</Description>
					<Description>
						Finally enter details below to create account.
					</Description>
					<DataContainer onSubmit={handleSubmit(submitForm)}>
						<InputField
							name="firstName"
							register={register}
							msg={errors.firstName?.message}
							label="First Name"
						/>
						<InputField
							name="lastName"
							register={register}
							msg={errors.lastName?.message}
							label="Last Name"
						/>
						<TelephonePicker
							name="mobile"
							register={register}
							msg={errors.mobile?.message}
							label="Enter mobile number (optional)"
							selectedCode={selectedCode}
							setSelectedCode={setSelectedCode}
						/>
						<InputField
							name="password"
							register={register}
							msg={errors.password?.message}
							label="Create Password"
						/>

						<StyledButton type="submit">DONE</StyledButton>
					</DataContainer>
				</RightWrapper>
			</Wrapper>
		</Modal>
	);
};
export default GetDetails;
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
const BackButton = styled.button`
	height: 17px;
	width: 17px;
	background-color: transparent;
	border: none;
	margin-right: 95%;
	margin-top: 1%;
	.backArrow {
		height: 17px;
		width: 17px;
	}
`;
const DataContainer = styled.form`
	height: 76%;
	width: 100%;
	margin-bottom: 1.75%;
	margin-top: 3%;
	margin-left: 21%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const BlackText = styled.p`
	height: 1%;
	width: 100%;
	color: #2a2c30;
	font-family: 'Open Sans', sans-serif;
	font-size: 22px;
	font-weight: bold;
	letter-spacing: -0.37px;
	text-align: center;
	text-shadow: 0 0 9px 0 #ffffff;
	margin-bottom: 10%;
`;
const Description = styled.p`
	width: 100%;
	color: #4a4a4a;
	font-family: 'Open Sans', sans-serif;
	font-size: 14px;
	letter-spacing: -0.24px;
	line-height: 19px;
	text-align: center;
	font-weight: 100;
	padding: 0;
	margin: 0;
`;