import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId});
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        {/* Review Input */}
        <form onSubmit={this.handleOnSubmit}>
        	<label>Add review: </label>
        	<input type = 'text'
				    value={this.state.text}
				    onChange={this.handleOnChange} />
        	<input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
