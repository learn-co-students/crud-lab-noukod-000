import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    this.props.addReview({...this.state, restaurantId: this.props.restaurantId})

    this.setState({
      text: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='review'>Review: </label>
          <input
          type='text' id='review'
          value={this.state.text}
          onChange={this.handleChange}
          />
          <input type='submit' value="Add"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
