import React, { Component } from 'react';
import TodoItem from './components/TodoItem.js';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) =>
    (
      <TodoItem key={todo.id} todo={todo} markComplete=
      {this.props.markComplete} delTodo={this.prop.delTodo} />
    ));

  
  }

}
//propTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired

}

export default Todos;