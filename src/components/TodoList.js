import React from 'react';
import PropTypes from 'prop-types';

import TodoFilter from './TodoFilter';
import TodoCount from './TodoCount';
import InputBox from './InputBox';
import FilteredItems from './FilteredItems';

const TodoList = (props) => {
  const { filter, addNewTodo, filterTodos, changeFilter, changeTodoStatus } = props;
  const items = filterTodos(filter);
  const count = items.length;

  return(
    <div className="todolist">
      <h1>My Todo Lists</h1>
      <InputBox {...{addNewTodo}} />
      <FilteredItems {...{items, changeTodoStatus}} />
      <footer className="clearfix">
        <TodoCount count={count} />
        <div className="pull-right">
          <TodoFilter {...{filter, changeFilter}} />
        </div>
      </footer>
    </div>
  );
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  filterTodos: PropTypes.func.isRequired,
  changeTodoStatus: PropTypes.func.isRequired,
}

export default TodoList;