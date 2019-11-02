import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    //destructuring
    const { reviews, restaurantId, deleteReview } = this.props
    const restReviews = reviews.filter(review => review.restaurantId === restaurantId)

    const reviewList = restReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    );
  }
};

export default Reviews;