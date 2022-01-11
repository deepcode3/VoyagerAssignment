import { React, useContext } from 'react';
// import Cartdata from './CartData';
import Cartlist from './CartList';
import './CartHome.css';
import { cartContext } from '../../Context/CartContext';
import data from '../RestaurentsData/data';

const CartHome = () => {
  // const [cartifo] = useState(Cartdata);
  const { cartItems, restaurantItemsCount, totalPrice } = useContext(cartContext);
  console.log(cartItems);
  console.log(restaurantItemsCount('Iran Zamin Restaurent and Cafe'));
  const resdata = data.filter((obj) => {
    return restaurantItemsCount(obj.name) !== 0;
  });
  return (
    <div className='cartbg'>
      <p className='mycarttext'>
        My Cart
        <span>{`(${resdata.length})`}</span>
      </p>
      {resdata.map((val) => {
        // eslint-disable-next-line react/jsx-wrap-multilines
        return (
          <Cartlist
            key={val.name}
            Hotelname={val.name}
            hoteladdress={val.location}
            totalproduct={restaurantItemsCount(val.name)}
            productcost={totalPrice(val.name)}
          />
        );
      })}
    </div>
  );
};

export default CartHome;
