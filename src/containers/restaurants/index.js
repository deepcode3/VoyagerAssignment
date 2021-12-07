import React, { useState } from 'react';
import Logo from '../../components/logo';
import SearchBar, {
	LocationSetter,
} from '../../components/homeComponents/searchbar';
import menuSemiBg from '../../assets/images/menuSemiBg.png';
import dateTime from '../../assets/icons/dateTime.png';
import menuButton from '../../assets/icons/menuButton.png';
import downArrow from '../../assets/icons/downArrow.png';
import hideButton from '../../assets/icons/hide.png';
import showButton from '../../assets/icons/show.png';
import checkBox from '../../assets/icons/checkBox.png';
import './restaurants.css';
const Restaurant = ({ data, searchKey, location }) => {
	const [TimeSortHide, setTimeSortHide] = useState(false);
	return (
		<>
			<div className="header">
				<Logo />
			</div>
			<img src={menuSemiBg} alt="semiBg" className="semiBg"></img>
			<div className="body">
				<div className="restaurantSearchBar">
					<span className="restaurantsInfo">Delivery ASAP</span>
					{console.log(data)}
					<div className="restaurantSearch">
						<SearchBar searchValue={searchKey} from="restaurant" />
					</div>
					<div className="restaurantLocation" from="restaurant">
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
						Home > UAE > Explore > Great Breakfasts
					</div>
				</div>
				<div className="restaurantHalfBg">
					<div className="heading">Breakfast in Dubai</div>
					<div className="filterOption">
						<div className="resListBy">
							<span className="listBy">List by :</span>
							<span className="listByOption">All</span>
						</div>
						<div className="resSortBy">
							<span className="sortBy">Sort by :</span>
							<span className="sortByOption">
								Rating <img src={downArrow} alt="downArrow"></img>
							</span>
						</div>
					</div>
					<div className="restaurantBody">
						<div className="filterBox">
							<div className="filterHeading">Filters</div>
							<div className="resetAll">Reset All</div>
							<div className="filterUnderLine"></div>
							<div className="timeAndAverageMealCost">
								<div className="timeInfo">TIME & AVEREAGE MEAL COST</div>
								{!TimeSortHide ? (
									<img
										className="timeShowButton"
										src={showButton}
										alt="timeextendhideButton"
										onClick={() => {
											setTimeSortHide(true);
										}}
									></img>
								) : (
									<img
										className="timeHideButton"
										src={hideButton}
										alt="timeextendhideButton"
										onClick={() => {
											setTimeSortHide(false);
										}}
									></img>
								)}
							</div>
							{!TimeSortHide ? <div className="timeSortUnderLine"></div> : null}
							<div
								className={TimeSortHide ? 'timeSortInfo' : 'revTimeSortInfo'}
							>
								<div className="status">
									<span className="statusLabel">Show restaurant with</span>
									<div className="statusButton">
										<img
											src={checkBox}
											className="statusButtonImg"
											alt="statusbuttonImg"
										></img>
										<span className="statusButtonLabel">Open Now</span>
									</div>
								</div>
								<div className="deliverTime"></div>
								<div className="averageMealCost"></div>
								<div className="minimumOrder"></div>
							</div>
						</div>
						{data.map((res, index) => {
							return (
								<>
									<div key={index} className="resBox">
										<div className="resName">{res.name}</div>
										<img alt="items" className="resImage" src={res.image}></img>
										<div className="resLocation">{res.location}</div>
										<div className="resUnderline"></div>
										<div className="resItem">{res.item}</div>
										<div className="resStatus">{res.status}</div>
										<div className="resDetails">
											{res.delivery_time} {res.openedtill} {res.mealcost}
										</div>
										<div className="resRating">
											<div className="ratingInfo">{res.ratings}</div>
										</div>

										<img
											className="menuButton"
											alt="menuButton"
											src={menuButton}
										></img>
									</div>
									<br />
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};
export default Restaurant;
