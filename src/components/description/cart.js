/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Items from './Items';
import { cartContext } from '../../Context/CartContext';
import empty from '../../Assets/Images/empty.png';
import './Description.css';
import CommonHeader from '../headercommon/CommonHeader';
import Footer from '../Footer';

const Cart = () => {
  const history = useHistory();

  const { cartItems } = useContext(cartContext);

  return (
    <div className='dbgbody'>
      {cartItems === null ? (
        <div className='emptyimgcart'>
          <img src={empty} alt='' />
          <p className='emptytext'>Cart is empty</p>
        </div>
      ) : (
        <>
          <CommonHeader />
          <div className='desbg'>
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
                    {cartItems.map((curritem) => {
                      return <Items key={curritem.id} {...curritem} />;
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
                      history.goBack('/carthome');
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
          </div>
          <div className='footerDivCart'>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
