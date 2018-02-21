import React from "react";
import { Row, ListGroup } from "reactstrap";
import Todo from "./Todo";

const TodoList = ({todos, onDoneClick, onDeleteClick}) => (
  <Row className="todo-list">
    <ListGroup>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          onDoneClick={() => onDoneClick(todo.id)}
          onDeleteClick={() => onDeleteClick(todo.id)}
          {...todo}
        />
      )}
    </ListGroup>
  </Row>
);

export default TodoList;
