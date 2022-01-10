/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Proptypes from 'prop-types';
import Items from './Items';
import { cartContext } from '../../Context/CartContext';
import empty from '../../Assets/Images/empty.png';
import './Description.css';
import cactive from '../../Assets/Icons/Active state.png';
import partialActive from '../../Assets/Icons/partialactive.png';
import deactive from '../../Assets/Icons/deactive state.png';

const Cart = () => {
  const location = useLocation();
  const history = useHistory();
  const { itemsOfRestaurant } = useContext(cartContext);
  const items = itemsOfRestaurant(location.state.restaurant);
  return (
    <div className='dbgbody'>
      {items === null ? (
        <div className='emptyimgcart'>
          <img src={empty} alt='' />
          <p className='emptytext'>Cart is empty</p>
        </div>
      ) : (
        <div className='firstmain'>
          <div className='restaurent'>
            <p className='restaurentname'>The Botique Kitchen</p>
          </div>
          <div className='estimated-delivery-t'>
            <p className='edtime'>Estimated Delivery time - 60 - 80 min</p>
          </div>
          <div className='descriptioncontainer'>
            <div className='orderdisplay_rectangle'>
              <div className='dispitemsdiv'>
                {items.map((curritem) => {
                  return <Items key={curritem.id} {...curritem} from='cart' />;
                })}
              </div>

              <div className='cookinginsdiv'>
                <div className='cookins'>
                  <p className='cookinginstext'>Cooking instructions?</p>
                </div>
                <div className='mentioninput'>
                  <input type='text' className='mention' placeholder='Mention it here...' />
                  <div className='mentiongreyline' />
                </div>
                <div className='cfinalgreyline' />
              </div>
              <div
                className='backbutton'
                onClick={() => {
                  history.goBack('/cart-home');
                }}
                role='button'
                onKeyDown={null}
              >
                {' '}
                <p className='back'>BACK</p>
              </div>
              <div className='choseaddbtn'>
                <p
                  className='chooseadd'
                  onClick={() => {
                    history.push('/address');
                  }}
                  onKeyDown={null}
                >
                  CHOOSE ADDRESS
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='Cartactive'>
        <img src={cactive} alt='' className='cartActive' />
        <p className='progresscart'>Cart</p>
      </div>
      <div className='Cartparatialactiveline'>
        <img src={partialActive} alt='' className='cartpartialactiveline' />
      </div>
      <div className='cartdeactive2'>
        <img src={deactive} alt='' className='Cdeactive2' />
        <p className='cartadresstext'>Address Details</p>
      </div>
      <div className='deactiveline'>
        <div className='cartdeactiveline' />
      </div>
      <div className='cartdeactive3'>
        <img src={deactive} alt='' className='cartdeactivestate' />
        <p className='cartpaymenttext'>Payment</p>
      </div>
    </div>
  );
};

export default Cart;
Cart.propTypes = {
  location: Proptypes.string.isRequired,
};
