import React, { useState, useContext } from 'react';
import './Modal.css';
import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';
import Items from '../ItemDescription/Items';
import { cartContext } from '../../Context/CartContext';

const Modal = ({ closemodal }) => {
  const { cartItems } = useContext(cartContext);
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);
  return (
    <div className='modalbackground'>
      <div className='modalbgs'>
        <button
          className='closinbutton'
          type='button'
          onClick={() => {
            closemodal(false);
          }}
        >
          x
        </button>
        <p className='statusorderdetails'>Order Details</p>
        <p className='statusitems'>Items</p>
        <div className='statusitemsrectangle'>
          {cartItems.map((curritem) => {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <Items key={curritem.id} {...curritem} from='orderDetails' />;
          })}
        </div>
        <p className='statusmaount'>Amount</p>
        <div className='statusamountrect'>
          <div className='sadiv'>
            <p className='spaidtext'>Paid</p>
            <p className='spaidamount'>AED 85.76</p>
            <p className='sitemstotaltext'>Items total</p>
            <p className='stotalamount'>AED 118.0</p>
            <p className='sfeetext'>Fee/charges</p>
            <p className='sfeeamount'>AED 10.76</p>
            <p className='sdiscounttext'>Discount</p>
            <p className='sdiscountamount'>AED 42.24</p>

            <p className='spaymentmethod'>Payment Method</p>
            <p className='scredittext'>Credit/Debit Card</p>
          </div>
        </div>
        <p className='statusdeldeatils'>Delivery Details</p>
        <div className='statusdelrct' />
        <div className='statusratingrect ' />
        <p className='ratedeliverytext'>Rate your Delivery</p>

        {star1 ? (
          <div
            className='grectstar1'
            onClick={() => {
              setStar1(false);
            }}
            role='button'
            onKeyDown={null}
            tabIndex={0}
          >
            <StarIcon className='gstars1' size='2em' fontSize='inherit' />
            <p className='gstartext1'>1</p>
          </div>
        ) : (
          <div
            tabIndex={0}
            className='rectstar1'
            onClick={() => {
              setStar1(true);
            }}
            role='button'
            onKeyDown={null}
          >
            <StarIcon className='stars1' size='2em' fontSize='inherit' />
            <p className='startext1'>1</p>
          </div>
        )}

        {star2 ? (
          <div
            className='grectstar2'
            onClick={() => {
              setStar2(false);
            }}
            role='button'
            onKeyDown={null}
            tabIndex={0}
          >
            <StarIcon className='gstars2' size='2em' fontSize='inherit' />
            <p className='gstartext2'>2</p>
          </div>
        ) : (
          <div
            className='rectstar2'
            onClick={() => {
              setStar2(true);
            }}
            role='button'
            onKeyDown={null}
            tabIndex={0}
          >
            <StarIcon className='stars2' size='2em' fontSize='inherit' />
            <p className='startext2'>2</p>
          </div>
        )}

        {star3 ? (
          <div
            className='grectstar3'
            onClick={() => {
              setStar3(false);
            }}
            role='button'
            onKeyDown={null}
            tabIndex={0}
          >
            <StarIcon className='gstars3' size='2em' fontSize='inherit' />
            <p className='gstartext3'>3</p>
          </div>
        ) : (
          <div
            className='rectstar3'
            onClick={() => {
              setStar3(true);
            }}
            role='button'
            onKeyDown={null}
            tabIndex={0}
          >
            <StarIcon className='stars3' size='2em' fontSize='inherit' />
            <p className='startext3'>3</p>
          </div>
        )}

        {star4 ? (
          <div
            className='grectstar4'
            onClick={() => {
              setStar4(false);
            }}
            role='button'
            onKeyDown={null}
            tabIndex={0}
          >
            <StarIcon className='gstars4' size='2em' fontSize='inherit' />
            <p className='gstartext4'>4</p>
          </div>
        ) : (
          <div
            className='rectstar4'
            onClick={() => {
              setStar4(true);
            }}
            role='button'
            onKeyDown={null}
            tabIndex={0}
          >
            <StarIcon className='stars4' size='2em' fontSize='inherit' />
            <p className='startext4'>4</p>
          </div>
        )}

        {star5 ? (
          <div
            className='grectstar5'
            onClick={() => {
              setStar5(false);
            }}
            role='button'
            onKeyDown={null}
            tabIndex={0}
          >
            <StarIcon className='gstars5' size='2em' fontSize='inherit' />
            <p className='gstartext5'>5</p>
          </div>
        ) : (
          <div
            className='rectstar5'
            onClick={() => {
              setStar5(true);
            }}
            role='button'
            onKeyDown={null}
            tabIndex={0}
          >
            <StarIcon className='stars5' size='2em' fontSize='inherit' />
            <p className='startext5'>5</p>
          </div>
        )}

        <div className='writeareview'>
          <p className='reviewtext'>Write a review</p>

          <input type='text' className='statusreview' placeholder='Start writing your review' />
          <div className='statuslastline' />
        </div>
        <div className='statussubmit'>
          <p className='statussubtext'>SUBMIT</p>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closemodal: PropTypes.func.isRequired,
};
export default Modal;
