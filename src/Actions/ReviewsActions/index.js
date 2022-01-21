/* eslint-disable import/prefer-default-export */
export const addReview = (review) => {
  return { type: 'ADD_REVIEWS', review };
};
export const incrementReviewLikes = (reviewIndex) => {
  return { type: 'INCREMENT_REVIEW_LIKES', reviewIndex };
};
export const decrementReviewLikes = (reviewIndex) => {
  return { type: 'DECREMENT_REVIEW_LIKES', reviewIndex };
};
