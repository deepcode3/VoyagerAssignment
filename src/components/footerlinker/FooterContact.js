import React from 'react';
import './FooterContact.css';
import contactbanner from '../../assets/images/about_banner 2.png';
import sendbutton from '../../assets/icons/buttonbox.png';
import PageHeader from './PageHeader';
import Header from '../Header';

const FooterContact = () => {
  return (
    <>
      <Header />
      <PageHeader />
      <div className='contactbg'>
        <div className='contactcontainer'>
          <div className='bannerdiv'>
            <img src={contactbanner} alt='banner' className='abanner' />
            <p className='firsttext'>Wed love to hear from you</p>
            <p className='sectext'>Get in touch to discover what we can do for you.</p>
          </div>
          <div className='merchantcustomerdiv'>
            <p className='merchant'>MERCHANT</p>
            <div className='merchantline' />
            <p className='customers'>CUSTOMERS</p>
          </div>
          <form>
            <div className='cnamediv'>
              <input type='text' className='cninput' id='name' placeholder='' />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor='name' className='cninputs'>
                Name*
              </label>
              <div className='cnameline' />
            </div>
            <div className='entitydiv'>
              <input type='text' placeholder=' ' className='eniety' />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor='entityname' className='entities'>
                Entity Name*
              </label>
              <div className='entline' />
            </div>
            <div className='entitymaildiv'>
              <input type='text' placeholder='' className='enietymail' />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor='entitymail' className='entitiymails'>
                Contact Email-id*
              </label>
              <div className='mailline' />
            </div>
            <div className='entitynumdiv'>
              <input type='text' placeholder='' className='enietynum' />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor='entitynum' className='entitynums'>
                Contact Number*
              </label>
              <div className='numberline' />
            </div>
            <div className='entityareadiv'>
              <input type='text' placeholder='' className='enietyarea' />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor='entityarea' className='entityareas'>
                Entity Area*
              </label>
              <div className='arealine' />
            </div>
            <div className='entitycitydiv'>
              <input type='text' placeholder='' className='enietycity' />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor='entitycity' className='entitycities'>
                Entity City*
              </label>
              <div className='cityline' />
            </div>
          </form>
          <div className='contactmessage'>
            <input type='text' className='messagearea' placeholder='Message' />
            <div className='msgline' />
          </div>
          <div className='sbutton'>
            <img src={sendbutton} alt='sendbtn' className='sendButton' />
            <p className='send'>SEND</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContact;
