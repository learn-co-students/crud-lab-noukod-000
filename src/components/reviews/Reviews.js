import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = (reviews, deleteReview) => reviews.map(
    rev => <Review key={rev.id} review={rev} deleteReview={deleteReview} editReview={this.props.editReview}/>
    )

  render() {
    const { reviews, deleteReview } = this.props
    return (
      <ul>
        {this.renderReviews(reviews, deleteReview)}
      </ul>
    );
  }
};

export default Reviews;