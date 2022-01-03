import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const reviewsContext = createContext({
  comments: [],
  addReview: () => {},
  updateLike: () => {},
  incrementLikes: () => {},
  decrementLikes: () => {},
});

const ReviewContext = (props) => {
  const [reviews, setReviews] = useState(JSON.parse(localStorage.getItem('reviews')));
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);
  const addReview = (item) => {
    if (reviews === null) setReviews([item]);
    if (reviews) {
      // eslint-disable-next-line no-shadow
      setReviews((cartItems) => {
        return [...cartItems, item];
      });
    }
  };
  const incrementLikes = (id) => {
    const updatedArray = [...reviews];
    const index = updatedArray.findIndex((item) => {
      return item.item === id;
    });
    updatedArray[index].quantity += 1;
    setReviews(updatedArray);
  };
  const decrementLikes = (id) => {
    const updatedArray = [...reviews];
    const index = updatedArray.findIndex((item) => {
      return item.item === id;
    });
    updatedArray[index].quantity -= 1;
    setReviews(updatedArray);
  };
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    reviews,
    addReview,
    incrementLikes,
    decrementLikes,
  };
  // eslint-disable-next-line react/destructuring-assignment
  return <reviewsContext.Provider value={value}>{props.children}</reviewsContext.Provider>;
};

export default ReviewContext;
ReviewContext.propTypes = {
  children: PropTypes.element.isRequired,
};
