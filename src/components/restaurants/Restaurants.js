import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurants = () => this.props.restaurants.map(res => {
    return <Restaurant key={res.id} restaurant={res} 
          deleteRestaurant={this.props.deleteRestaurant} 
          editRestaurant={this.props.editRestaurant}/>
  })

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;