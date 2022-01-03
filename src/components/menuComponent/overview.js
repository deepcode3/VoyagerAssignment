import React from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import MenuHalfCompo from '../menuSemiCompo';
import './MenuNav.css';

const OverView = () => {
  const { searchKey } = useParams();
  const { location } = useParams();
  const { restaurant } = useParams();
  const { item } = useParams();
  return (
    <>
      <MenuHalfCompo
        searchKey={searchKey}
        location={location}
        restaurant={restaurant}
        item={item}
        from='overview'
      />
      <div className='menuCommomBg'>
        <div className='overViewBody'>
          <div className='description'>
            <span className='descriptionText'>Description</span>
            <div className='descriptionParagraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet ante at risus
              mollis, ut rutrum arcu venenatis. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Etiam nec erat suscipit, pretium quam eget,
              condimentum enim.
            </div>
          </div>
          <div className='overViewFlexBox'>
            <div className='cuisinesOverview'>
              <span className='cuisinesText'>Cuisines</span>
              <div className='cuisinesParagraph'>
                Indian, Pakistani, Kebab, Mexican, Mordovian, Mughal, Native American, Nepalese, New
                Mexican
              </div>
            </div>
            <span className='linebetween' />
            <div className='averasgeMealCost'>
              <span className='averasgeMealCostText'>Average meal cost</span>
              <div className='averasgeMealCostParagraph'>AED70 for two (approx)</div>
            </div>
            <span className='linebetween' />
            <div className='averasgeMealCost'>
              <span className='averasgeMealCostText'>Accepted Payment</span>
              <div className='averasgeMealCostParagraph'>Cash and Cards accepeted</div>
            </div>
            <span className='linebetween' />
            <div className='phone'>
              <span className='phoneText'>Phone</span>
              <div className='phoneParagraph1'>
                0824 4024999
                <br />
                0824 3456790
              </div>
            </div>
            <span className='linebetween' />
            <div className='address'>
              <span className='addressText'>Address</span>
              <div className='addressParagraph'>Shiekh Zayed Road, Dubai, UAE</div>
            </div>
          </div>
          <div className='openingHours'>
            <span openingHoursText>Opening Hours</span>
            <div className='openingHoursDiv'>
              <div className='presentDayTimming'>
                <span className='presentDate'>
                  {moment(new Date()).format('[Today, ]DD[ ]MMMM[, ]YYYY[ ]')}
                </span>
                <br />
                <span className='presentDayOpeningTimming'>
                  10:00:00 AM - 03:00:00 PM
                  <br />
                  05:30:00 PM - 11:00:00 PM
                </span>
                <div className='status'>Open</div>
                <span className='plannedOff'>Planned off: 03:00 PM - 05:30 PM (Ramadan)</span>
                <div className='openingLine' />
                <div className='workHoursForNextDays'>
                  <span className='workHoursForNext7Days'>Work hours for next 7 days</span>
                </div>
                <div className='workHoursArrow' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OverView;
