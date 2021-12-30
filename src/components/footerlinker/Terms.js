import React from 'react';
import './Terms.css';
import PageHeader from './PageHeader';
import Footer from '../Footer';

const Terms = () => {
  return (
    <>
      <PageHeader />
      <div className='termsbg'>
        <div className='termscontainer'>
          <p className='termstext'>Terms & Conditions</p>
          <div className='ratificationcont'>
            <p className='ratificationtext'>Ratification of the Agreement</p>
            <p className='para1'>
              * To be a member of the website of Xxxxxxxx, first of all it is required that you fill
              in the registration form and then agree and undertake to comply with the provisions of
              the user agreement for Xxxxxxxx. By filling in and ratifying the registration form or
              getting any services or ordering a meal using this system, the user agrees to be bound
              by the user agreement of Xxxxxxxx.
            </p>
            <p className='para2'>
              * You are responsible for making all arrangements necessary for you to have access to
              the website. You are also responsible for ensuring that all persons who access the
              website through your Internet connection are aware of these website terms and that
              they comply with them. By viewing, using, accessing, browsing, or submitting any
              content or material on the site, you agree to these Terms of Use as a binding legal
              agreement between you and Xxxxxxxx, without limitation or qualification. The term you
              or You shall refer to any person or entity, who views, uses, accesses, browses or
              submits any content or material to the site. If you do not agree to these Terms of
              Use, then you may not use the site. Xxxxxxxx reserves the right to modify these Terms
              of Use at any time without prior notice. You agree that each visit you make to the
              sites shall be subject to the then-current Terms of Use, and continued use of the site
              now or following modifications in these Terms of Use confirms that you have read,
              accepted, and agreed to be bound by such modifications.
            </p>
            <p className='para3'>
              The terms and conditions apply to Xxxxxxxx website and its associated applications on
              iPhone, iPad, Android, and mobile site platforms
            </p>
            <p className='descriptionservices'>Description of the Services</p>
            <div className='desccontent'>
              <p className='contettext'>
                Xxxxxxxx allows its members who ratify the agreement to order from restaurants
                online. Xxxxxxxx provides a way for you to communicate your orders to delivery
                restaurants displayed on this webs
              </p>
              <p className='para4'>
                The purpose of this site is to provide a simple and convenient service to consumers,
                linking them to restaurants in their area that offer takeaway food. Interactive
                menus allow customers to build and submit orders at the click of a button.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Terms;
