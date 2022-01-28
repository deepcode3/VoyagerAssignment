/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Proptypes from 'prop-types';
import { useSelector } from 'react-redux';
import Items from './Items';
import empty from '../../Assets/Images/empty.png';
import './Description.css';
import cactive from '../../Assets/Icons/Active state.png';
import partialActive from '../../Assets/Icons/partialactive.png';
import deactive from '../../Assets/Icons/deactive state.png';
import { itemsOfRestaurant } from '../../Utils';

const Cart = () => {
  const currentUser = useSelector((state) => {
    return state.currentUser;
  });
  const location = useLocation();
  const history = useHistory();
  const items = itemsOfRestaurant(location.state.restaurant, currentUser);
  return (
    <div className='dbgbody'>
      {items === null ? (
        <div className='emptyimgcart'>
          <img src={empty} alt='' className='cactus' />
          <p className='emptytext'>Cart is empty</p>
        </div>
      ) : (
        <div className='firstmain'>
          <div className='cartprogressbar'>
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
          <div className='restaurent'>
            <p className='restaurentname'>{location.state.restaurant}</p>
          </div>
          <div className='estimated-delivery-t'>
            <p className='edtime'>Estimated Delivery time - 60 - 80 min</p>
          </div>
          <div className='descriptioncontainer'>
            <div className='orderdisplay_rectangle'>
              <div className='dispitemsdiv'>
                {items.map((curritem) => {
                  return (
                    <Items
                      key={curritem.id}
                      restaurant={location.state.restaurant}
                      {...curritem}
                      from='cart'
                    />
                  );
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
                    history.push({
                      pathname: '/address',
                      state: { restaurant: location.state.restaurant },
                    });
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
    </div>
  );
};

export default Cart;
Cart.propTypes = {
  location: Proptypes.string.isRequired,
};
