import React, { Component } from 'react';

class EditReview extends Component {

  state = {
    review: this.props.review.text,
    edit: false
  }

  handleEditReview = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleChange = (e) => {
    this.setState({
      review: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.editReview({...this.props.review, text: this.state.review})
    this.setState({
      edit: false
    })
  }


  render() {

    return (
      <div>
          <a onClick={this.handleEditReview}> Edit </a>
          {this.state.edit && 
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.review} onChange={this.handleChange}/>
            <input type='submit' value='edit' />
          </form>}
      </div>
    );
  }
};

export default EditReview;
