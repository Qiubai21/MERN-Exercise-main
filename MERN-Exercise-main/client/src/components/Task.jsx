import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const Task = ({ todo, onToggleCompleted, onDeleteTodo }) => {
  return (
    <ListGroup.Item style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Form.Check
        type="checkbox"
        checked={todo.completed} onChange={() => onToggleCompleted(todo._id)} 
      />
      <Badge bg="success" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</Badge>
      <Button onClick={() => onDeleteTodo(todo._id)} variant="link" style={{ color: 'red', textDecoration: 'none' }} size="sm">Delete</Button>
    </ListGroup.Item>
  );
};

export default Task;
