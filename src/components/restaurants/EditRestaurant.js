import React, { Component } from 'react';

class EditRestaurant extends Component {

  state = {
    res: this.props.restaurant.text,
    edit: false
  }

  handleEditRestaurant = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleChange = (e) => {
    this.setState({
      res: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.editRestaurant({id: this.props.restaurant.id, text: this.state.res})
    this.setState({
      edit: false
    })
  }


  render() {

    return (
      <div>
          <a onClick={this.handleEditRestaurant}> Edit </a>
          {this.state.edit && 
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.res} onChange={this.handleChange}/>
            <input type='submit' value='edit' />
          </form>}
      </div>
    );
  }
};

export default EditRestaurant;
