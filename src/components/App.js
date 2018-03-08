import React, { Component } from 'react';
import axios from 'axios';

import TodoList from './TodoList';
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from './TodoFilter';

class App extends Component {
  state = {
    filter: FILTER_ALL,
    items: [],
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response => {
      this.setState({items: response.data})
    })
  }

  addNewTodo = (title) => {
    this.setState(state => {
      const todo  = {
        title,
        completed: false,
        id: state.items.length + 1
      };

      return {items: [...state.items, todo]};
    })
  }

  changeTodoStatus = (todoId, completed) => {
    this.setState(state => {
      const items = state.items.map(item => {
        if(item.id !== todoId) {
          return item;
        }

        return {...item, completed};
      })

      return {items};
    })
  }

  filterTodos = (status) => {
    const {items} = this.state;

    switch(status) {
      case FILTER_COMPLETED:
        return items.filter(item => item.completed === true);

      case FILTER_ACTIVE:
        return items.filter(item => item.completed !== true);

      default: return items;
    }
  }

  changeFilter = (status) => {
    this.setState({filter:status});
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <TodoList 
            items={this.state.items} 
            filter={this.state.filter} 
            addNewTodo={this.addNewTodo} 
            filterTodos={this.filterTodos} 
            changeTodoStatus={this.changeTodoStatus} 
            changeFilter={this.changeFilter}
          />
        </div>
      </div>
    );
  }
}

export default App;