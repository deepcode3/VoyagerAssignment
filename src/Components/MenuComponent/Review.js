/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import MenuHalfCompo from '../MenuSemiCompo';
import { reviewsContext } from '../../Context/ReviewContext';
import selectedRatingStar from '../../Assets/Icons/ratingStar.png';
import nonSelectedRatingStar from '../../Assets/Icons/icn_star_red.png';
import whiteStar from '../../Assets/Icons/whiteStar.png';
import saved from '../../Assets/Icons/saved.png';
import like from '../../Assets/Icons/like.png';
import empty from '../../Assets/Images/empty.png';
import unSelectedLike from '../../Assets/Icons/unSelectedLike.png';
import './MenuNav.css';
import Footer from '../Footer';

const Reviews = () => {
  const { searchKey } = useParams();
  const { location } = useParams();
  const { restaurant } = useParams();
  const { item } = useParams();
  const [rating1, setRating1] = useState(false);
  const [rating2, setRating2] = useState(false);
  const [rating3, setRating3] = useState(false);
  const [rating4, setRating4] = useState(false);
  const [rating5, setRating5] = useState(false);
  const [foodSaved, setFoodSaved] = useState(false);
  const [foodRating, setFoodRating] = useState();
  const [serviceRating1, setServiceRating1] = useState(false);
  const [serviceRating2, setServiceRating2] = useState(false);
  const [serviceRating3, setServiceRating3] = useState(false);
  const [serviceRating4, setServiceRating4] = useState(false);
  const [serviceRating5, setServiceRating5] = useState(false);
  const [serviceSaved, setServiceSaved] = useState(false);
  const [serviceRating, setServiceRating] = useState();
  const [comment, setComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  // eslint-disable-next-line object-curly-newline
  const { addReview, reviews, incrementLikes, decrementLikes } = useContext(reviewsContext);

  return (
    <>
      <MenuHalfCompo
        searchKey={searchKey}
        location={location}
        restaurant={restaurant}
        item={item}
        from='reviews'
      />
      <div className='menuCommomBg'>
        <div className='overViewBody'>
          <span className='reviewsHeading'>Reviews</span>
          <div className='showRecent'>
            <span className='show'>Show :</span>
            <span className='recent'> Recent</span>
          </div>
          <div className='reviewDisplayer'>
            {reviews ? (
              reviews.map((review) => {
                return (
                  <div className='reviewCard'>
                    <div className='profilePic' />
                    <div className='userName'>{review.name}</div>
                    <span className='reviewsAndRatings'>2 reviews, 30 Ratings</span>
                    <div className='ratingBox'>
                      <img src={whiteStar} alt='' className='whiteStar' />
                      <span className='ratingNumber'>
                        {((review.rating + review.serviceRatings) / 2).toFixed(0)}
                      </span>
                    </div>
                    <p className='cartComment'>{review.ratingComment}</p>
                    <div className='commentDate'>
                      {moment(new Date()).format('MMMM[ ]DD[, ]YYYY')}
                    </div>
                    <div
                      className='likeBox'
                      onClick={() => {
                        setIsLiked(true);
                      }}
                      role='button'
                      onKeyDown={null}
                    >
                      <img src={isLiked ? like : unSelectedLike} alt='' className='selectedLike' />
                      <span
                        className={isLiked ? 'selectedNumberOfLikes' : 'unSelectedNumberOfLikes'}
                      >
                        40
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className='emptyReviews'>
                <img src={empty} alt='' className='reviewEmptyImg' />
                <span className='emptyReviewsText'>You are the first to review</span>
              </div>
            )}
          </div>
          <div className='reviewsSubmiter'>
            <span className='reviewsSubmiterHeader'>Rate your experience</span>
            <span className='reviewsSubmiterHeader2'>Food</span>
            <div className='reveiwerBox'>
              <div
                className={rating1 ? 'selectedReviewBox' : 'nonSelectedReviewBox'}
                onClick={() => {
                  setRating1(true);
                  setRating2(false);
                  setRating3(false);
                  setRating4(false);
                  setRating5(false);
                  setFoodRating(1);
                  setFoodSaved(true);
                }}
                onKeyDown={null}
                role='button'
              >
                <img
                  src={rating1 ? selectedRatingStar : nonSelectedRatingStar}
                  alt=''
                  className='selectedRatingStar'
                />
                <div className={rating1 ? 'selectedratingNumber' : 'nonSelectedratingNumber'}>
                  1
                </div>
              </div>
              <div
                className={rating2 ? 'selectedReviewBox' : 'nonSelectedReviewBox'}
                onClick={() => {
                  setRating1(true);
                  setRating2(true);
                  setRating3(false);
                  setRating4(false);
                  setRating5(false);
                  setFoodRating(2);
                  setFoodSaved(true);
                }}
                onKeyDown={null}
                role='button'
              >
                <img
                  src={rating2 ? selectedRatingStar : nonSelectedRatingStar}
                  alt=''
                  className='selectedRatingStar'
                />
                <div className={rating2 ? 'selectedratingNumber' : 'nonSelectedratingNumber'}>
                  2
                </div>
              </div>
              <div
                className={rating3 ? 'selectedReviewBox' : 'nonSelectedReviewBox'}
                onClick={() => {
                  setRating1(true);
                  setRating2(true);
                  setRating3(true);
                  setRating4(false);
                  setRating5(false);
                  setFoodRating(3);
                  setFoodSaved(true);
                }}
                onKeyDown={null}
                role='button'
              >
                <img
                  src={rating3 ? selectedRatingStar : nonSelectedRatingStar}
                  alt=''
                  className='selectedRatingStar'
                />
                <div className={rating3 ? 'selectedratingNumber' : 'nonSelectedratingNumber'}>
                  3
                </div>
              </div>
              <div
                className={rating4 ? 'selectedReviewBox' : 'nonSelectedReviewBox'}
                onClick={() => {
                  setRating1(true);
                  setRating2(true);
                  setRating3(true);
                  setRating4(true);
                  setRating5(false);
                  setFoodRating(4);
                  setFoodSaved(true);
                }}
                onKeyDown={null}
                role='button'
              >
                <img
                  src={rating4 ? selectedRatingStar : nonSelectedRatingStar}
                  alt=''
                  className='selectedRatingStar'
                />
                <div className={rating4 ? 'selectedratingNumber' : 'nonSelectedratingNumber'}>
                  4
                </div>
              </div>
              <div
                className={rating5 ? 'selectedReviewBox' : 'nonSelectedReviewBox'}
                onClick={() => {
                  setRating1(true);
                  setRating2(true);
                  setRating3(true);
                  setRating4(true);
                  setRating5(true);
                  setFoodRating(5);
                  setFoodSaved(true);
                }}
                onKeyDown={null}
                role='button'
              >
                <img
                  src={rating5 ? selectedRatingStar : nonSelectedRatingStar}
                  alt=''
                  className='selectedRatingStar'
                />
                <div className={rating5 ? 'selectedratingNumber' : 'nonSelectedratingNumber'}>
                  5
                </div>
              </div>
            </div>
            <div className='ratingLine' />
            {foodSaved ? (
              <div className='savedBox'>
                <img src={saved} alt='' className='savedImage' />
                <span className='savedText'>Saved</span>
              </div>
            ) : null}
            <span className='reviewsSubmiterHeader3'>Services</span>
            <div className='reveiwerBox2'>
              <div
                className={serviceRating1 ? 'selectedReviewBox' : 'nonSelectedReviewBox'}
                onClick={() => {
                  setServiceRating1(true);
                  setServiceRating2(false);
                  setServiceRating3(false);
                  setServiceRating4(false);
                  setServiceRating5(false);
                  setServiceRating(1);
                  setServiceSaved(true);
                }}
                onKeyDown={null}
                role='button'
              >
                <img
                  src={serviceRating1 ? selectedRatingStar : nonSelectedRatingStar}
                  alt=''
                  className='selectedRatingStar'
                />
                <div
                  className={serviceRating1 ? 'selectedratingNumber' : 'nonSelectedratingNumber'}
                >
                  1
                </div>
              </div>
              <div
                className={serviceRating2 ? 'selectedReviewBox' : 'nonSelectedReviewBox'}
                onClick={() => {
                  setServiceRating1(true);
                  setServiceRating2(true);
                  setServiceRating3(false);
                  setServiceRating4(false);
                  setServiceRating5(false);
                  setServiceRating(2);
                  setServiceSaved(true);
                }}
                onKeyDown={null}
                role='button'
              >
                <img
                  src={serviceRating2 ? selectedRatingStar : nonSelectedRatingStar}
                  alt=''
                  className='selectedRatingStar'
                />
                <div
                  className={serviceRating2 ? 'selectedratingNumber' : 'nonSelectedratingNumber'}
                >
                  2
                </div>
              </div>
              <div
                className={serviceRating3 ? 'selectedReviewBox' : 'nonSelectedReviewBox'}
                onClick={() => {
                  setServiceRating1(true);
                  setServiceRating2(true);
                  setServiceRating3(true);
                  setServiceRating4(false);
                  setServiceRating5(false);
                  setServiceRating(3);
                  setServiceSaved(true);
                }}
                onKeyDown={null}
                role='button'
              >
                <img
                  src={serviceRating3 ? selectedRatingStar : nonSelectedRatingStar}
                  alt=''
                  className='selectedRatingStar'
                />
                <div
                  className={serviceRating3 ? 'selectedratingNumber' : 'nonSelectedratingNumber'}
                >
                  3
                </div>
              </div>
              <div
                className={serviceRating4 ? 'selectedReviewBox' : 'nonSelectedReviewBox'}
                onClick={() => {
                  setServiceRating1(true);
                  setServiceRating2(true);
                  setServiceRating3(true);
                  setServiceRating4(true);
                  setServiceRating5(false);
                  setServiceRating(4);
                  setServiceSaved(true);
                }}
                onKeyDown={null}
                role='button'
              >
                <img
                  src={serviceRating4 ? selectedRatingStar : nonSelectedRatingStar}
                  alt=''
                  className='selectedRatingStar'
                />
                <div
                  className={serviceRating4 ? 'selectedratingNumber' : 'nonSelectedratingNumber'}
                >
                  4
                </div>
              </div>
              <div
                className={serviceRating5 ? 'selectedReviewBox' : 'nonSelectedReviewBox'}
                onClick={() => {
                  setServiceRating1(true);
                  setServiceRating2(true);
                  setServiceRating3(true);
                  setServiceRating4(true);
                  setServiceRating5(true);
                  setServiceRating(5);
                  setServiceSaved(true);
                }}
                onKeyDown={null}
                role='button'
              >
                <img
                  src={serviceRating5 ? selectedRatingStar : nonSelectedRatingStar}
                  alt=''
                  className='selectedRatingStar'
                />
                <div
                  className={serviceRating5 ? 'selectedratingNumber' : 'nonSelectedratingNumber'}
                >
                  5
                </div>
              </div>
            </div>
            <div className='ratingLine2' />
            {serviceSaved ? (
              <div className='savedBox2'>
                <img src={saved} alt='' className='savedImage' />
                <span className='savedText'>Saved</span>
              </div>
            ) : null}
            <div className='reviewInput'>
              <span className='reviewInputHeader'>Write a review</span>
              <textarea
                className='textArea'
                cols='40'
                rows='5'
                v
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                placeholder='Start writing your review'
              />
              <div className='ratingLine3' />
              <div className='imageAdder'>+ Add image</div>
            </div>
            <div
              className='submitButton'
              onClick={() => {
                if (foodSaved && serviceSaved) {
                  addReview({
                    rating: foodRating,
                    serviceRatings: serviceRating,
                    ratingComment: comment,
                    profile: null,
                    name: 'John Doe',
                    numberOfLikes: 40,
                  });
                }
              }}
              role='button'
              onKeyDown={null}
            >
              <span className='submitText'>Submit</span>
            </div>
          </div>
        </div>
      </div>
      <div className='footerDivReview'>
        <Footer />
      </div>
    </>
  );
};
export default Reviews;
