import vegicon from '../../assets/icons/vegicon.png';
import nonvegicon from '../../assets/icons/nonveg.png';
export const itemData = [
	{
		item: 'Chilli Cheese Meal',
		price: 27,
		icon: <img src={nonvegicon}></img>,
		addOn: 'Add On : Avacado, Seasoned Grilled Chicken, Grilled Salmon',
		isCustomizable: true,
		isVeg: false,
		status: true,
		quantity: 1,
	},
	{
		item: 'Canapes and Crostini',
		price: 100,
		amount: 1,
		icon: <img src={vegicon}></img>,
		addOn: '',
		isCustomizable: false,
		isVeg: true,
		status: true,
		quantity: 1,
	},
	{
		item: 'Chicken Tortilla',
		price: 50,
		amount: 2,
		icon: <img src={vegicon}></img>,
		addOn: '',
		isCustomizable: true,
		isVeg: false,
		status: true,
		quantity: 1,
	},
];
