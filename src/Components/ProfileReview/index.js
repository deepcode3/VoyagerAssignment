/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { AiFillDelete } from 'react-icons/ai';
import {
  addReview,
  incrementReviewLikes,
  decrementReviewLikes,
  deleteReview,
} from '../../Actions/ReviewsActions';
// import {
//   addReview,
//   incrementReviewLikes,
//   decrementReviewLikes,
//   deleteReview,
// } from '../../Actions/ReviewsActions';
import { getRestaurantReviews } from '../../Utils';
import nonSelectedRatingStar from '../../Assets/Icons/icn_star_red.png';
import whiteStar from '../../Assets/Icons/whiteStar.png';
import saved from '../../Assets/Icons/saved.png';
import like from '../../Assets/Icons/like.png';
import empty from '../../Assets/Images/empty.png';
import unSelectedLike from '../../Assets/Icons/unSelectedLike.png';
import reviewButton from '../../Assets/Icons/reviewButton.png';
import closeButton from '../../Assets/Icons/dismissButton.png';
import icnStarGreen from '../../Assets/Icons/icn_star_yellow.png';

const Reviews = () => {
  const reviews = useSelector((state) => {
    return state.reviews;
  });
  const currentUser = useSelector((state) => {
    return state.currentUser;
  });

  const dispatch = useDispatch();
  const { restaurant } = useParams();
  const [comment, setComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [reviewSubmitterClicked, setReviewSubmitterClicked] = useState(false);

  const [rating, setRating] = useState(0);
  const [servicerating, setServicerating] = useState(0);
  // eslint-disable-next-line react/prop-types
  const Star = ({ filled, onClick }) => {
    return (
      <img
        src={filled ? icnStarGreen : nonSelectedRatingStar}
        alt='star'
        className='star'
        onClick={onClick}
        onKeyDown={null}
      />
    );
  };
  console.log(rating, 'test rating');
  return (
    <Div>
      <div className='middle'>
        <div className='reviewsBg'>
          <div className='reViewBody'>
            <span className='reviewsHeading'>Reviews</span>
            <div className='showRecent'>
              <span className='show'>Show :</span>
              <span className='recent'> Recent</span>
            </div>
            {!reviewSubmitterClicked ? (
              <img
                src={reviewButton}
                alt=''
                className='reviewButton'
                onClick={() => {
                  setReviewSubmitterClicked(true);
                }}
                onKeyDown={null}
              />
            ) : (
              <img
                src={closeButton}
                alt=''
                className='reviewCloseButton'
                onClick={() => {
                  setReviewSubmitterClicked(false);
                }}
                onKeyDown={null}
              />
            )}
            <div className={reviewSubmitterClicked ? 'hideReviewDisplayer' : 'reviewDisplayer'}>
              {reviews.length !== 0 && getRestaurantReviews(restaurant) > 0 ? (
                Object.values(reviews)
                  .filter((review) => {
                    return review.restaurant === restaurant;
                  })
                  .map((review, index) => {
                    return (
                      // eslint-disable-next-line react/no-array-index-key
                      <div className='reviewCard' key={index.toString()}>
                        <div className='profilePic' />
                        <div className='userName'>{review.name}</div>
                        <span className='reviewsAndRatings'>2 reviews, 30 Ratings</span>
                        <div className='ratingBox'>
                          <img src={whiteStar} alt='' className='whiteStar' />
                          <span className='ratingNumber'>{(review.test1 + review.test2) / 2}</span>
                        </div>
                        <p className='cartComment'>{review.ratingComment}</p>
                        <div className='commentDate'>
                          {moment(new Date()).format('MMMM[ ]DD[, ]YYYY')}
                        </div>
                        <AiFillDelete
                          className='deleteIcon'
                          style={{
                            color: '#979797',
                          }}
                          onClick={() => {
                            dispatch(deleteReview(review));
                          }}
                        />
                        <div
                          className='likeBox'
                          onClick={() => {
                            setIsLiked(true);
                          }}
                          role='button'
                          onKeyDown={null}
                        >
                          <img
                            src={isLiked ? like : unSelectedLike}
                            alt=''
                            className='selectedLike'
                            onClick={
                              !isLiked
                                ? useDispatch(incrementReviewLikes(index))
                                : useDispatch(decrementReviewLikes(index))
                            }
                            onKeyDown={null}
                          />
                          <span
                            className={
                              isLiked ? 'selectedNumberOfLikes' : 'unSelectedNumberOfLikes'
                            }
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
            <div className={reviewSubmitterClicked ? 'showReviewsSubmiter' : 'reviewsSubmiter'}>
              <span className='reviewsSubmiterHeader'>Rate your experience</span>
              <span className='reviewsSubmiterHeader2'>Food</span>
              <div className='reveiwerBox'>
                {[1, 2, 3, 4, 5].fill().map((_, index) => {
                  return (
                    <div
                      className='group-2'
                      type='button'
                      onClick={() => {
                        return setRating(index + 1);
                      }}
                      style={{
                        border: `${index < rating ? '1px solid #5fb700' : '1px solid #C2C2C2'}`,
                      }}
                      role='button'
                      onKeyDown={null}
                    >
                      <Star key={index.toString()} filled={index < rating} />
                      <span
                        style={{
                          color: `${index < rating ? '#5fb700' : '#C2C2C2'}`,
                        }}
                      >
                        {index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className='ratingLine' />
              {rating ? (
                <div className='savedBox'>
                  <img src={saved} alt='' className='savedImage' />
                  <span className='savedText'>Saved</span>
                </div>
              ) : null}
              <span className='reviewsSubmiterHeader3'>Services</span>
              <div className='reveiwerBox2'>
                {[1, 2, 3, 4, 5].fill().map((_, index1) => {
                  return (
                    <div
                      className='group-2'
                      type='button'
                      onClick={() => {
                        return setServicerating(index1 + 1);
                      }}
                      style={{
                        border: `${
                          index1 < servicerating ? '1px solid #5fb700' : '1px solid #C2C2C2'
                        }`,
                      }}
                      role='button'
                      onKeyDown={null}
                    >
                      <Star key={index1.toString()} filled={index1 < servicerating} />
                      <span
                        style={{
                          color: `${index1 < servicerating ? '#5fb700' : '#C2C2C2'}`,
                        }}
                      >
                        {index1 + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className='ratingLine2' />
              {servicerating ? (
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
                  if (currentUser) {
                    if (servicerating && rating) {
                      setReviewSubmitterClicked(false);
                      return dispatch(
                        addReview({
                          restaurant,
                          // rating: foodRating,
                          // serviceRatings: serviceRating,
                          ratingComment: comment,
                          name: currentUser.firstname,
                          email: currentUser.email,
                          numberOfLikes: 0,
                          test1: rating,
                          test2: servicerating,
                        })
                      );
                    }
                  } else {
                    alert('PLEASE LOGIN TO REVIEW');
                  }
                  return null;
                }}
                role='button'
                onKeyDown={null}
              >
                <span className='submitText'>Submit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};
export default Reviews;

const Div = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #f1f3fb;
  @media screen and (max-width: 500px) {
    height: 60vh;
  }
  .middle {
    width: 90%;
    height: 636px;
    display: flex;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    padding: 0 12%;
    overflow-y: scroll;
    position: relative;
    // background-color: blue;
    @media screen and (max-width: 500px) {
      width: 72%;
      position: relative;
      padding: 0;
    }
  }
  .deleteIcon {
    position: absolute;
    top: 178px;
    left: 555px;
  }
  .ratings {
    height: 21px;
    width: 245px;
    display: flex;
    flex-direction: row;
    position: relative;
    top: 60px;
    left: 33px;
    @media screen and (max-width: 393px) {
      position: absolute;
      top: 58px;
      left: 20px;
    }
  }
  .group-2 {
    box-sizing: border-box;
    height: 21px;
    width: 42.35px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    align-items: center;
    @media screen and (max-width: 393px) {
      //background-color: pink;
    }
  }
  .star {
    height: 11px;
    width: 12.1px;
    @media screen and (max-width: 393px) {
    }
  }
  .reViewBody {
    height: auto;
    width: 1100px;
    position: relative;
    //  margin-left: auto;
    // margin-right: auto;
    //  top: 160px;
    //  left: 55px;
    display: flex;
    flex-direction: row;
    //background-color: pink;
  }
  .reviewsHeading {
    height: 22px;
    width: 62px;
    color: #4a4a4a;
    font-family: 'Open Sans';
    font-size: 16px;
    letter-spacing: -0.27px;
    line-height: 22px;
    position: relative;
    top: 150px;
    left: 10px;
  }
  .showRecent {
    height: 20px;
    width: 110px;
    position: relative;
    top: 150px;
    left: 480px;
  }
  .show {
    height: 19px;
    width: 43px;
    color: #6a6a6a;
    font-family: 'Open Sans';
    font-size: 14px;
    letter-spacing: 0;
    line-height: 19px;
  }
  .recent {
    height: 19px;
    width: 47px;
    color: #f67e03;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 19px;
    text-align: right;
  }
  .reviewsSubmiter {
    height: 526px;
    width: 380px;
    border-radius: 6px;
    background-color: #ffffff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    top: 200px;
    left: -140px;
  }
  .reviewsSubmiterHeader {
    height: 30px;
    width: 221px;
    color: #000000;
    font-family: 'Open Sans';
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.24px;
    line-height: 30px;
    position: relative;
    top: 10px;
    left: 30px;
  }
  .reviewsSubmiterHeader2 {
    height: 22px;
    width: 38px;
    color: #565454;
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.24px;
    line-height: 22px;
    position: relative;
    top: 40px;
    left: -180px;
  }
  .reveiwerBox {
    height: 21px;
    width: 245px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    top: 60px;
    left: 33px;
  }
  .selectedReviewBox {
    box-sizing: border-box;
    height: 21px;
    width: 42px;
    border: 1px solid #5fb700;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    cursor: pointer;
  }
  .nonSelectedReviewBox {
    box-sizing: border-box;
    height: 21px;
    width: 42px;
    border: 1px solid #8f8d8d;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    cursor: pointer;
  }
  .selectedRatingStar {
    height: 11px;
    width: 12px;
    position: relative;
    top: 3px;
  }
  .nonSelectedRatingStar {
    height: 11px;
    width: 12px;
    position: relative;
    top: 3px;
  }
  .selectedratingNumber {
    height: 17px;
    width: 9.17px;
    color: #5fb700;
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 17px;
  }
  .nonSelectedratingNumber {
    height: 17px;
    width: 9.17px;
    color: #8f8d8d;
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 17px;
  }
  .ratingLine {
    box-sizing: border-box;
    height: 2px;
    width: 260px;
    border: 1px solid #ededed;
    position: relative;
    top: 80px;
    left: 30px;
  }
  .reviewsSubmiterHeader3 {
    height: 22px;
    width: 38px;
    color: #565454;
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.24px;
    line-height: 22px;
    position: relative;
    top: 130px;
    left: 35px;
  }
  .reveiwerBox2 {
    height: 21px;
    width: 245px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    top: 150px;
    left: 33px;
  }
  .ratingLine2 {
    box-sizing: border-box;
    height: 2px;
    width: 265px;
    border: 1px solid #ededed;
    position: relative;
    top: 170px;
    left: 30px;
  }
  .savedBox {
    width: 48px;
    height: 13px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    top: 90px;
    left: 240px;
  }
  .savedImage {
    height: 13px;
    width: 14px;
    position: relative;
    left: -3px;
    top: 1px;
  }
  .savedText {
    height: 17px;
    width: 34px;
    color: #223136;
    font-family: 'Open Sans';
    font-size: 12px;
    letter-spacing: 0;
    line-height: 17px;
  }
  .savedBox2 {
    width: 48px;
    height: 13px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    top: 180px;
    left: 240px;
  }
  .reviewInput {
    height: 67px;
    width: 262px;
    position: relative;
    top: 200px;
    left: 15px;
  }
  .reviewInputHeader {
    height: 17px;
    width: 76px;
    color: #858585;
    font-family: 'Open Sans';
    font-size: 12px;
    letter-spacing: -0.24px;
    line-height: 17px;
    position: relative;
    left: 20px;
  }
  .textArea {
    width: 227px;
    height: 20px;
    position: relative;
    left: 20px;
    top: 10px;
    border: none;
    outline: none;
    resize: none;
    cursor: pointer;
  }
  .textArea::placeholder {
    height: 22px;
    width: 200px;
    color: #919191;
    font-family: 'Open Sans';
    font-size: 16px;
    letter-spacing: -0.27px;
    line-height: 22px;
  }
  .ratingLine3 {
    box-sizing: border-box;
    height: 2px;
    width: 265px;
    border: 1px solid #ededed;
    position: relative;
    top: 20px;
    left: 20px;
  }
  .imageAdder {
    height: 19px;
    width: 84px;
    background: -webkit-linear-gradient(138.33deg, #feb456 0%, #ee4e78 100%);
    -webkit-background-clip: text;
    background-clip: none;
    -webkit-text-fill-color: transparent;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 19px;
    text-align: right;
    position: relative;
    top: 30px;
    left: 200px;
    cursor: pointer;
  }
  .submitButton {
    height: 50px;
    width: 290px;
    border-radius: 6px;
    background: linear-gradient(138.33deg, #f3698e 0%, #feb456 100%);
    box-shadow: 0 4px 10px 0 rgba(246, 126, 126, 0.38);
    position: relative;
    top: 250px;
    left: 15px;
    cursor: pointer;
  }
  .submitText {
    height: 39px;
    width: 67px;
    color: #ffffff;
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.56px;
    line-height: 38px;
    text-align: center;
    text-shadow: 0 0 9px 0 #ffffff;
    position: relative;
    left: 110px;
    top: 3px;
  }
  .reviewDisplayer {
    width: 630px;
    height: auto;
    position: relative;
    top: 200px;
    left: -170px;
  }
  .reviewCard {
    height: 213px;
    width: 630px;
    border-radius: 6px;
    background-color: #ffffff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    left: 20px;
    margin-bottom: 20px;
  }
  .profilePic {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background-color: rgb(194, 189, 189);
    position: relative;
    top: 20px;
    left: 20px;
  }
  .userName {
    height: 22px;
    width: 70px;
    color: #4a4a4a;
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 22px;
    position: relative;
    top: -30px;
    left: 80px;
  }
  .reviewsAndRatings {
    height: 17px;
    width: 117px;
    color: #757575;
    font-family: 'Open Sans';
    font-size: 12px;
    letter-spacing: 0;
    line-height: 17px;
    position: relative;
    top: -30px;
    left: 80px;
  }
  .ratingBox {
    height: 18px;
    width: 32px;
    border-radius: 4px;
    background-color: #5fb700;
    display: flex;
    flex-direction: row;
    position: relative;
    top: -20px;
    left: 80px;
  }
  .whiteStar {
    height: 12px;
    width: 12px;
    position: relative;
    top: 2px;
    left: 3px;
  }
  .ratingNumber {
    height: 17px;
    width: 7px;
    color: #ffffff;
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 17px;
    position: relative;
    left: 4px;
  }
  .cartComment {
    height: 57px;
    width: 588px;
    color: #757575;
    font-family: 'Open Sans';
    font-size: 12px;
    letter-spacing: 0;
    line-height: 19px;
    position: relative;
    left: 30px;
    top: -20px;
  }
  .commentDate {
    height: 17px;
    width: auto;
    color: #b9b9b9;
    font-family: 'Open Sans';
    font-size: 12px;
    letter-spacing: 0;
    line-height: 17px;
    position: relative;
    left: 30px;
    top: -10px;
  }
  .likeBox {
    height: 17px;
    width: 44px;
    position: relative;
    left: 570px;
    top: -25px;
    cursor: pointer;
  }
  .selectedLike {
    height: 16px;
    width: 17.78px;
  }
  .selectedNumberOfLikes {
    height: 17px;
    width: 17px;
    color: #f67e03;
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 17px;
    position: relative;
    left: 7px;
    top: -3px;
  }
  .unSelectedNumberOfLikes {
    height: 17px;
    width: 17px;
    color: #b9b9b9;
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 17px;
    position: relative;
    left: 5px;
    top: -2px;
  }
  .emptyReviews {
    width: 630px;
    height: 400px;
    position: relative;
    top: 00px;
    left: 25px;
  }
  .reviewEmptyImg {
    width: 630px;
    height: 400px;
    background-color: #000000;
  }
  .emptyReviewsText {
    height: 17px;
    width: 17px;
    color: #f67e03;
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 17px;
    position: relative;
    left: 100px;
    top: 30px;
  }
  .reviewButton {
    display: none;
  }
  .reviewCloseButton {
    display: none;
  }
`;
