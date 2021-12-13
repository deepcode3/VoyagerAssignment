import React from "react";
import styled from "styled-components";
import banner from "../../assets/images/login-background.png";
import phoneicn from "../../assets/icons/phone_icn.png";
import mailicn from "../../assets/icons/mail_icn.png";
import icn_info from "../../assets/icons/icn_info_small.png";
import { Link } from "react-router-dom";
import profile_pic from "../../assets/images/profile_pic.png";

const Profile = ({ setOpen }) => {
	return (
		<Profilediv>
			<div className="align">
				<div className="mask">
					<img src={profile_pic} alt="pic" className="profile_img" />
				</div>
				<div className="name-section">
					<span className="username">Abdulla</span>
					<span
						className="edit"
						type="button"
						onClick={() => {
							setOpen(true);
						}}
					>
						Edit
					</span>
					<span className="name">Abdulla Mohammad</span>
					<span className="num">
						<img className="phone-icn" src={phoneicn} alt="icn" />
						+971 876561234
					</span>
					<br className="line-3 " />
					<span className="abdulla-foodie-com ">
						<img className="mail-icn" src={mailicn} alt="icn" />
						abdulla@foodie.com
					</span>
					<br className="line-3 " />
					<span className="credits-earned">Credits earned-</span>
					<span className="credits-num">256</span>
					<img className="icn-info-small" src={icn_info} alt="icn" />
				</div>
			</div>
			<div className="links">
				<ul className="list-container">
					<Link to="/" className="Link">
						<li className="span">Order</li>
					</Link>
					<Link to="/Address" className="Link">
						<li className="span">Address</li>
					</Link>
					<Link to="/Pay" className="Link">
						<li className="span">Payment</li>
					</Link>
					<Link to="/Pay" className="Link">
						<li className="span">Reviews</li>
					</Link>
					<Link to="/Pay" className="Link">
						<li className="span">Gallary</li>
					</Link>
				</ul>
				{/** 
				<Link className="Link">
					<span className="span">link texts</span>
				</Link>
				*/}
			</div>
		</Profilediv>
	);
};
export default Profile;

export const MenuLink = styled(Link)`
	text-decoration: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 50px;
	height: 19px;
	width: 62px;
	color: #ffffff;
	font-family: "Open Sans";
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0;
	line-height: 24px;
`;
const Profilediv = styled.div`
	height: 262px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${banner});
	.align {
		position: relative;
		height: 160px;
		width: 800px;
		display: flex;
	}
	.links {
		width: 800px;
		display: flex;
	}

	.list-container {
		display: flex;
		align-items: center;
		text-align: center;
		list-style-type: none;
		padding-left: 0;
		.list-item {
			list-style: none;
			height: 40px;
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
		text-decoration: none;
		color: #ffffff;
		font-family: "Open Sans";
		font-size: 14px;
		font-weight: 600;
		letter-spacing: 0;
		line-height: 24px;
		margin-right: 20px;
	}

	.Link:hover:before {
		content: "";
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
		box-sizing: border-box;
		height: 109px;
		width: 109px;
		//border: 3px solid #ffffff;
		//box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
		position: absolute;
		top: 38px;
	}
	.profile_img {
		height: 100%;
		width: 100%;
		display: inline-block;
		background-image: url("profile_pic ");
		box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
		background-position: 50% 50%;
		background-size: cover;
		border-radius: 50%;
		position: absolute;
	}
	.name-section {
		height: 113px;
		width: 653px;
		position: absolute;
		top: 38px;
		padding: 1px;
		right: 0px;
	}
	.username {
		height: 42px;
		width: 119px;
		color: #ffffff;
		font-family: "Open Sans";
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
		font-family: "Open Sans";
		font-size: 16px;
		letter-spacing: 0;
		line-height: 22px;
		position: absolute;
		top: 48px;
		justify-content: space-between;
		position: absolute;
		left: 1px;
	}
	.phone-icn {
		height: 22px;
		width: 16.5px;
	}
	.num {
		height: 22px;
		width: 137px;
		color: #ffffff;
		font-family: "Open Sans";
		font-size: 16px;
		letter-spacing: 0;
		line-height: 22px;
		display: flex;
		position: absolute;
		top: 86px;
		justify-content: space-between;
	}
	.mail-icn {
		height: 18px;
		width: 25px;
	}
	.abdulla-foodie-com {
		height: 22px;
		width: 170px;
		color: #ffffff;
		font-family: "Open Sans";
		font-size: 16px;
		letter-spacing: 0;
		line-height: 22px;
		display: flex;
		position: absolute;
		top: 86px;
		left: 213px;
		justify-content: space-between;
	}
	.credits-earned {
		height: 22px;
		width: 124px;
		color: #ffffff;
		font-family: "Open Sans";
		font-size: 16px;
		letter-spacing: 0;
		line-height: 22px;
		top: 86px;
		left: 446px;
		position: absolute;
	}
	.credits-num {
		height: 33px;
		width: 48px;
		color: #ffffff;
		font-family: "Open Sans";
		font-size: 24px;
		font-weight: bold;
		letter-spacing: 0;
		line-height: 33px;
		top: 83px;
		left: 550px;
		position: absolute;
	}
	.icn-info-small {
		height: 19px;
		width: 19px;
		top: 86px;
		left: 600px;
		position: absolute;
	}
	.edit {
		height: 19px;
		width: 30px;
		//color: #fda200;
		color: red;
		font-family: "SF UI Text";
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
