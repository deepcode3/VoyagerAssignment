import React from 'react';
import Logo from '../../components/logo';
import SearchBar from '../../components/homeComponents/searchbar';
import mouse from '../../assets/icons/mouse.png';
import './home.css';
const Home = () => {
	return (
		<div className="homeBg">
			<div className="homeLogo">
				<Logo />
			</div>
			<div className="homeInfo">
				<span className="homeInfo1">Order your food</span>
				<br />
				<span className="homeInfo2">from the best restaurants</span>
			</div>
			<SearchBar />
			<div className="scroller">
				<img src={mouse} alt="mouse" className="ScrollImage"></img>
				<div className="scrollInfo">Scroll</div>
			</div>
		</div>
	);
};
export default Home;
