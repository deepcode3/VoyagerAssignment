import React, { useState } from 'react';
import Geocode from 'react-geocode';
import moment from 'moment';
import searchIcon from '../../../assets/icons/searchIcon.png';
import clearButton from '../../../assets/icons/dismissButton.png';
import location from '../../../assets/icons/location.png';
import gps from '../../../assets/icons/gps.png';
import dateTime from '../../../assets/icons/dateTime.png';
import './serachBar.css';

const SearchBar = () => {
	const [searchKey, setSearchKey] = useState('');
	const [myLocation, setMyLocation] = useState('');
	const [date, setDate] = useState('');
	const findMyLocation = () => {
		navigator.geolocation.watchPosition((pos) => {
			const Longitude = pos.coords.longitude;
			const Latitude = pos.coords.latitude;
			Geocode.setApiKey('AIzaSyD45sM9f24ebYIQEz7iJMm-FDLIh3ydUbg');
			Geocode.setLanguage('en');
			Geocode.setLocationType('ROOFTOP');
			Geocode.fromLatLng(Latitude, Longitude).then(
				(response) => {
					const address = response.results[0].formatted_address;
					console.log(address);
				},
				(error) => {
					console.error(error);
				}
			);
		});
	};
	return (
		<>
			<div className="searchBox">
				<input
					className="searchInput"
					type="text"
					placeholder="Search your restaurants or cuisines"
					onChange={(e) => {
						setSearchKey(e.target.value);
					}}
					value={searchKey}
				></input>
				<img className="searchIcon" alt="searchIcon" src={searchIcon}></img>
				{searchKey ? (
					<img
						alt="clearButton"
						src={clearButton}
						className="clearButton"
						onClick={() => {
							setSearchKey('');
						}}
					></img>
				) : null}
			</div>
			<div className="locationSetter">
				<input
					className="locationInput"
					onChange={(e) => {
						setMyLocation(e.target.value);
					}}
				></input>
				<img src={location} className="location" alt="location"></img>
				<img
					src={gps}
					className="gpsTracker"
					alt="gpstracker"
					onClick={findMyLocation}
				></img>
			</div>
			<div className="dateTime">
				<div className="dateText">{date}</div>
				<img
					src={dateTime}
					alt="date"
					onClick={() => {
						setDate(moment(new Date()).format('[Today, ]DD[ ]MMMM[, ]YYYY[ ]'));
					}}
					className="dateButton"
				></img>
			</div>
		</>
	);
};
export default SearchBar;
