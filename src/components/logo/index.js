import React from 'react';
import { useHistory } from 'react-router-dom';
import './logo.css';
const Logo = () => {
	const history = useHistory();
	return (
		<div
			className="logo"
			onClick={() => {
				history.push('/');
			}}
		>
			<span className="logoPart1">LO</span>
			<span className="logoPart2">REM</span>
		</div>
	);
};
export default Logo;
