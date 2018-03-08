import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    changeTodoStatus: PropTypes.func.isRequired
  }

  handleChange = (event) => this.props.changeTodoStatus(this.props.item.id, event.target.checked);

  render() {
    const {item} = this.props;
    const className = `todo-item ui-state-default ${item.completed === true ? 'completed' : 'pending'}`;

    return(
      <li key={item.id} className={className}>
        <div className="checkBox">
          <label>
            <input type="checkbox" onChange={this.handleChange} checked={item.completed} />
            {item.title}
          </label>
        </div>
      </li>
    )
  }
}

TodoItem.propTypes = {
  item: PropTypes.object
}

export default TodoItem;