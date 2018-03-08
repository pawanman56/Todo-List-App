import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputBox extends Component {
  static propTypes = {
    addNewTodo: PropTypes.func.isRequired,
  }

  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleKeyUp = (event) => {
    const value = event.target.value.trim();

    if(event.keyCode === 13 && value !== '') {
      this.props.addNewTodo(value);
      this.setState({value: ''});
    }
  }

  render() {
    return(
      <input type="text" 
        value={this.state.value} 
        className="form-control add-todo" 
        placeholder="Add new todo" 
        onKeyUp={this.handleKeyUp} 
        onChange={this.handleChange} 
      />
    )
  }
}

export default InputBox;