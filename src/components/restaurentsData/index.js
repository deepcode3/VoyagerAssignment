// import axios from 'axios';
import { useParams } from 'react-router-dom';
import Restaurant from '../../containers/restaurants';
import breakfast1 from '../../assets/images/breakfast1.png';
import breakfast2 from '../../assets/images/breakfast2.png';
const RestaurantData = () => {
	const { searchKey } = useParams();
	const { location } = useParams();

	console.log(location, searchKey);
	//axios.get().then().catch();
	const data = [
		{
			name: 'The Boutiqe Kitchen',
			location: 'sheik Zayed road, Dubai UAE',
			item: 'India pakistan kebab',
			status: 'open now',
			delivery_time: '40 mins',
			openedtill: '60 mins',
			mealcost: 'AED 60',
			city: 'sandur',
			image: breakfast1,
			ratings: 3.8,
		},
		{
			name: 'Iran Zamin Restaurent and Cafe',
			location: 'sheik Zayed road, Dubai UAE',
			item: 'India pakistan kebab',
			status: 'open now',
			delivery_time: '40 mins',
			openedtill: '60 mins',
			mealcost: 'AED 60',
			city: 'sandur',
			image: breakfast2,
			ratings: 3.8,
		},
	];
	return <Restaurant data={data} searchKey={searchKey} location={location} />;
};

export default RestaurantData;
