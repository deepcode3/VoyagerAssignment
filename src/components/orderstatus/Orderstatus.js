import { React, useState, useEffect } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import './Orderstatus.css';
import waiting from '../../Assets/Images/waiting.png';
import orderplaced from '../../Assets/Images/orderplaced.png';
import delivery from '../../Assets/Images/delivered.png';
import outfordelivery from '../../Assets/Images/outfordelivery.png';
import orderaccepted from '../../Assets/Images/orderaccepted.png';
import readytopick from '../../Assets/Images/readytopick.png';
import greencircle from '../../Assets/Icons/greencircle.png';
import greycheck from '../../Assets/Icons/greycheck.png';
import yellowtime from '../../Assets/Icons/yellowtime.png';
import trackline from '../../Assets/Images/trackline.png';
import Modal from './Modal';
import Header from '../Header';
import Footer from '../Footer';

const Orderstatus = () => {
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);
  const [seconds, setSeconds] = useState(50);
  const [delivered, setDelivered] = useState(false);
  const [outfordelv, setOutfordelv] = useState(false);
  const [pickup, setPickup] = useState(false);
  const [kitchen, Setkitchen] = useState(false);
  const [owaiting, setOwaiting] = useState(false);
  const [oplaced, setOplaced] = useState(false);
  const [oplacedicon, setOplacedIcon] = useState(false);
  const [owaitingicon, setOwaitingIcon] = useState(false);
  const [kitchenicon, setKitchenIcon] = useState(false);
  const [readytopickIcon, setReadytopickIcon] = useState(false);
  const [outfordelicon, setOutfordelicon] = useState(false);
  const [deliveredicon, setDeliveredicon] = useState(false);

  useEffect(() => {
    if (seconds > 0 && seconds > 50) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds <= 50 && seconds > 40) {
      setOplaced(true);
      setOplacedIcon(true);
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds <= 40 && seconds > 30) {
      setOwaiting(true);
      setOwaitingIcon(true);
      setOplaced(false);
      setOplacedIcon(false);
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds <= 30 && seconds > 20) {
      Setkitchen(true);
      setKitchenIcon(true);
      setOplacedIcon(false);
      setOwaitingIcon(false);
      setOwaiting(false);
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds <= 20 && seconds > 10) {
      setPickup(true);
      setReadytopickIcon(true);
      setKitchenIcon(false);
      setOplacedIcon(false);
      setOwaitingIcon(false);
      Setkitchen(false);
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds <= 10 && seconds > 0) {
      setOutfordelv(true);
      setPickup(false);
      setOutfordelicon(true);
      setReadytopickIcon(false);
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setDelivered(true);
      setOutfordelv(false);
      setDeliveredicon(true);
      setReadytopickIcon(false);
      setOutfordelicon(false);
    }
  }, [seconds]);

  return (
    <div className='orderbody'>
      <Header />
      <div className='statusbg'>
        <p className='orderid'>Order id: 1234567890</p>
        <div className='statuscontainer'>
          <div className='statusgreyline' />
          <div
            className='sbacktoorders'
            onClick={() => {
              history.push('/cart');
            }}
            role='button'
            onKeyDown={null}
            tabIndex={0}
          >
            <p className='btext'>BACK TO ORDERS</p>
          </div>
          <div className='chatbtn'>
            <p className='chattxt'>CHAT</p>
          </div>
          <div
            className='orderdlts'
            onClick={() => {
              setOpenModal(true);
            }}
            role='button'
            onKeyDown={null}
            tabIndex={0}
          >
            <p className='ordrdlts'>ORDER DETAILS</p>
          </div>

          <p className='timerdiv'>{seconds}</p>

          {outfordelv ? (
            <div className='imgcontainer'>
              <img src={outfordelivery} alt='' className='orderplacedimg' />
            </div>
          ) : null}
          {delivered ? (
            <div className='imgcontainer'>
              <img src={delivery} alt='' className='orderplacedimg' />
              <p className='ohasdeltext'>Your order has delivered!</p>
            </div>
          ) : null}
          {pickup ? (
            <div className='imgcontainer'>
              <img src={readytopick} alt='' className='orderplacedimg' />
            </div>
          ) : null}
          {kitchen ? (
            <div className='imgcontainer'>
              <img src={orderaccepted} alt='' className='orderplacedimg' />
            </div>
          ) : null}
          {oplaced ? (
            <div className='imgcontainer'>
              <img src={orderplaced} alt='' className='orderplacedimg' />
            </div>
          ) : null}
          {owaiting ? (
            <div className='imgcontainer'>
              <img src={waiting} alt='' className='orderplacedimg' />
            </div>
          ) : null}

          {oplacedicon ? (
            <div>
              <img src={greencircle} alt='' className='greenicon1' />
              <p className='oispalcedtext'>order is placed</p>
              <p className='cancelordertext'>cancel order</p>
              <img src={greycheck} alt='' className='greyicon' />
              <p className='inkitchenbefore'> order in kitchen</p>
              <p className='oaccepttextbefore'>Order ready for pick-up</p>
              <img src={greycheck} alt='' className='greyicon2' />
              <p className='owaitingfordelbefore'>waiting for delivery</p>
              <img src={greycheck} alt='' className='greyicon3' />
            </div>
          ) : null}

          {owaitingicon ? (
            <div>
              <img src={greencircle} alt='' className='greenicon2' />
              <p className='owaitingtext'>waiting to accept</p>
              <p className='cancelordertext'>cancel order</p>
              <img src={greycheck} alt='' className='greyicon' />
              <p className='inkitchenbefore'> order in kitchen</p>
              <p className='oaccepttextbefore'>Order ready for pick-up</p>
              <img src={greycheck} alt='' className='greyicon2' />
              <p className='owaitingfordelbefore'>waiting for delivery</p>
              <img src={greycheck} alt='' className='greyicon3' />
            </div>
          ) : null}

          {kitchenicon ? (
            <div>
              <div>
                <img src={yellowtime} alt='' className='yellowicon' />
              </div>
              <p className='inkitchenafter'> order in kitchen</p>
              <div className='datetime2'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
              <div>
                <img src={greencircle} alt='' className='greenicon3' />
                <p className='oaccepttext'>order accepted</p>
                <div className='datetime'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
              </div>
              <p className='oaccepttextbefore'>Order ready for pick-up</p>
              <img src={greycheck} alt='' className='greyicon2' />
              <p className='owaitingfordelbefore'>waiting for delivery</p>
              <img src={greycheck} alt='' className='greyicon3' />
            </div>
          ) : null}

          {readytopickIcon ? (
            <div>
              {' '}
              <img src={yellowtime} alt='' className='yellowicon2' />
              <p className='oaccepttextafter'>Order ready for pick-up</p>
              <img src={greencircle} alt='' className='greenicon4' />
              <p className='inkitchenafter'> order in kitchen</p>
              <div className='datetime2'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
              <div>
                <img src={greencircle} alt='' className='greenicon3' />
                <p className='oaccepttext'>order accepted</p>
                <div className='datetime'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
              </div>
              <p className='owaitingfordelbefore'>waiting for delivery</p>
              <img src={greycheck} alt='' className='greyicon3' />
            </div>
          ) : null}

          {outfordelicon ? (
            <div>
              <img src={yellowtime} alt='' className='yellowicon6' />
              <p className='outfordeliverytext'>Order out for delivery</p>
              <img src={greencircle} alt='' className='greenicon4' />
              <p className='inkitchenafter'> order in kitchen</p>
              <div className='datetime2'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
              <div>
                <img src={greencircle} alt='' className='greenicon3' />
                <p className='oaccepttext'>order accepted</p>
                <div className='datetime'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
                <p className='owaitingfordelbefore'>waiting for delivery</p>
                <img src={greycheck} alt='' className='greyicon3' />
              </div>
            </div>
          ) : null}

          {deliveredicon ? (
            <div>
              <img src={greencircle} alt='' className='greenicondel' />
              <p className='deliveredicontext'>Order has delivered</p>
              <div className='datetime4'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
              <p className='ratings'>Give a rating an review</p>
              <div>
                <img src={greencircle} className='greeniconbeforedel' alt='' />
                <p className='outfordeliverytext'>Order out for delivery</p>
                <div className='datetime3'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
                <img src={greencircle} alt='' className='greenicon4' />
                <p className='inkitchenafter'> order in kitchen</p>
                <div className='datetime2'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
              </div>
              <img src={greencircle} alt='' className='greenicon3' />
              <p className='oaccepttext'>order accepted</p>
              <div className='datetime'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            </div>
          ) : null}

          <img src={trackline} alt='' className='trackline1' />
          <img src={trackline} alt='' className='trackline2' />
          <img src={trackline} alt='' className='trackline3' />
        </div>
      </div>
      {openModal && <Modal closemodal={setOpenModal} />}
      <div className='footerDivStatus'>
        <Footer />
      </div>
    </div>
  );
};

export default Orderstatus;
