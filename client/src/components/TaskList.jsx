import React from 'react';
import Task from './Task';
import ListGroup from 'react-bootstrap/ListGroup';

const TaskList = ({ todos, onToggleCompleted, onDeleteTodo }) => {
  return (
    <ListGroup variant="flush">
      {todos.map((todo) => (
        <Task key={todo._id} todo={todo} onToggleCompleted={onToggleCompleted} onDeleteTodo={onDeleteTodo} />
      ))}
    </ListGroup>
  );
};

export default TaskList;
