import React, { Component } from 'react';
import EditReview from './EditReview'

class Review extends Component {

  render() {
    const { review, deleteReview, editReview } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => deleteReview(review.id)}> X </button><br/>
        <EditReview review={review} editReview={editReview}/>
      </div>
    );
  }

};

export default Review;
