import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../components/logo';
import SearchBar, {
	LocationSetter,
} from '../../components/homeComponents/searchbar';
import menuSemiBg from '../../assets/images/menuSemiBg.png';
import dateTime from '../../assets/icons/dateTime.png';
import halfBg from '../../assets/images/halfBg.jpg';
import menuKebab from '../../assets/images/menuKebab.png';
import './menuSemiCompo.css';
const MenuHalfCompo = ({ searchKey, location, restaurant, item, from }) => {
	const history = useHistory();
	const [navSelected, setNavSelected] = useState(from);
	return (
		<>
			<div className="header">
				<Logo />
			</div>
			<img src={menuSemiBg} alt="semiBg" className="semiBg"></img>
			<div className="body">
				<div className="restaurantSearchBar">
					<span className="restaurantsInfo">Delivery ASAP</span>
					<div className="restaurantSearch">
						<SearchBar searchValue={searchKey} from="menu" />
					</div>
					<div className="restaurantLocation" from="menu">
						<LocationSetter locationValue={location} />
					</div>
					<img
						className="restaurantDateTimeButton"
						alt="schedule-button"
						src={dateTime}
					></img>
				</div>
				<div className="restaurantLocators">
					<div className="restaurantLocatorInfo">
						Home > UAE > Explore > Great Breakfasts > {restaurant}
					</div>
				</div>
				<img src={halfBg} alt="" className="menuHalfBgImage"></img>
				<img src={menuKebab} alt="" className="menuKebabImage"></img>
				<div className="menuKebab"></div>
				<div className="navBar">
					<div
						className={navSelected === 'menu' ? 'menu' : 'notMenu'}
						onClick={() => {
							setNavSelected('menu');
							history.push(
								`/${searchKey}/${location}/menu/${restaurant}/${item}`
							);
						}}
					>
						MENU
					</div>
					<div
						className={navSelected === 'overview' ? 'overview' : 'notOverview'}
						onClick={() => {
							setNavSelected('overview');
							history.push(
								`/${searchKey}/${location}/overview/${restaurant}/${item}`
							);
						}}
					>
						OVERVIEW
					</div>
					<div
						className={navSelected === 'reviews' ? 'reviews' : 'notReview'}
						onClick={() => {
							setNavSelected('reviews');
							history.push(
								`/${searchKey}/${location}/reviews/${restaurant}/${item}`
							);
						}}
					>
						REVIEW & RATINGS
					</div>
					<div
						className={navSelected === 'gallery' ? 'gallery' : 'notGallery'}
						onClick={() => {
							setNavSelected('gallery');
							history.push(
								`/${searchKey}/${location}/gallery/${restaurant}/${item}/`
							);
						}}
					>
						GALLERY
					</div>
				</div>
			</div>
		</>
	);
};
export default MenuHalfCompo;
