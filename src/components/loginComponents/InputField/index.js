import styled from 'styled-components';
import React, { useState } from 'react';
import view_active from '../../../assets/icons/view_active.png';
import view_inactive from '../../../assets/icons/view_inactive.png';
const InputField = ({ label, name, isPassword, register, msg }) => {
	const [viewState, changeViewState] = useState(false);
	const [focusState, changeFocusState] = useState(false);
	const handleViewIconClick = () => {
		changeViewState(!viewState);
	};
	const handleFocusChange = (e) => {
		if (e.target.value === '') changeFocusState(false);
	};

	return (
		<FormContainer>
			<Textbox
				{...register(name)}
				name={name}
				type={!viewState && isPassword ? 'password' : 'text'}
				onFocus={() => {
					changeFocusState(true);
				}}
				onBlur={(e) => {
					handleFocusChange(e);
				}}
				className={focusState ? 'moveUp' : null}
			></Textbox>
			{isPassword ? (
				<>
					<Label className="form-label">{label} </Label>
					<ViewIcon
						onClick={(e) => {
							handleViewIconClick();
						}}
						src={viewState ? view_active : view_inactive}
						alt="icn"
					></ViewIcon>
				</>
			) : (
				<Label className="form-label">{label}</Label>
			)}
			{msg !== undefined ? <p className="error">{msg}</p> : null}
		</FormContainer>
	);
};
export default InputField;
const FormContainer = styled.div`
	position: relative;
	height: 50px;
	width: 380px;
	margin-bottom: 5px;
	.moveUp ~ .form-label {
		top: -0.6rem;
		font-size: 0.8rem;
		position: relative;
	}
	.error {
		height: 17px;
		color: #ed1b2e;
		font-family: 'Open Sans', sans-serif;
		font-size: 12px;
		font-weight: 400;
		letter-spacing: -0.2px;
		line-height: 17px;
		margin-top: 35px;
	}
	.redBorder {
		border-bottom: 1px solid #ed1b2e;
	}
`;

const Textbox = styled.input`
	position: absolute;
	padding: 0;
	top: 0;
	height: 90%;
	width: 100%;
	background-color: transparent;
	border: none;
	border-bottom: 1px solid #a4a4a4;
	color: #000000;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	font-weight: 100;
	letter-spacing: -0.27px;
	line-height: 22px;
	outline: none;
	pointer-events: all;
	:focus {
		border-bottom: 1px solid black;
	}
	.redBorder {
		border-bottom: 1px solid #ed1b2e;
	}
`;

const Label = styled.label`
	width: 86.36px;
	color: #858585;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	letter-spacing: -0.27px;
	line-height: 22px;
	cursor: text;
	pointer-events: none;
`;
const ViewIcon = styled.img`
	right: 4%;
	height: 17px;
	width: 20px;
	margin-top: 5%;
	position: absolute;
`;