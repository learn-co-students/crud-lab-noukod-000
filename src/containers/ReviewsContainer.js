import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

import { addReview, deleteReview, editReview } from '../actions/index'

import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    const {addReview, restaurant, reviews, deleteReview, editReview } = this.props
    const filteredReviews = reviews.filter(review => review.restaurantId === restaurant.id)
    
    return (
      <div>
        <ReviewInput addReview={addReview} restaurantId={restaurant.id}/>
        <Reviews reviews={filteredReviews} editReview={editReview} deleteReview={deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps,{addReview, deleteReview, editReview})(ReviewsContainer)
