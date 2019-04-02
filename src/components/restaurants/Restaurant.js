import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import EditRestaurant from './EditRestaurant';

class Restaurant extends Component {

  render() {
    const { restaurant, deleteRestaurant, editRestaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button id='delete' onClick={() => deleteRestaurant(restaurant.id)}> X </button>
          <EditRestaurant editRestaurant={editRestaurant} restaurant={restaurant}/>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
