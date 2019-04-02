import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='text'>Restaurant: </label>
          <input
          type='text'
          value={this.state.text}
          id='text' name='text'
          onChange={this.handleChange}
          />
          <input type='submit' value='Add'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
