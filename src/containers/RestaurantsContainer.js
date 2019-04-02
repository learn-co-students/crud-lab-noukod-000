import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRestaurant, deleteRestaurant, editRestaurant } from '../actions/index'

import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}
        editRestaurant={this.props.editRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps,{addRestaurant, deleteRestaurant, editRestaurant})(RestaurantsContainer)
