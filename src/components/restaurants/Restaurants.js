import React, { Component } from 'react';

class Restaurants extends Component {
  render() {
    const {restaurants, deleteRestaurant} = this.props
    const restaurantList = restaurants.map(restaurant => {
      return (
        <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant} />
      )
    })

    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;