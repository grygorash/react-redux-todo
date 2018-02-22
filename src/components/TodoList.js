import React from "react";
import { Row, ListGroup } from "reactstrap";
import Todo from "./Todo";

const TodoList = ({todos, onDoneClick, onDeleteClick}) => {
  if (todos.length >= 1) {
    return (
      <Row>
        {<ListGroup className="todo-list">
          {todos.map(todo =>
            <Todo
              key={todo.id}
              onDoneClick={() => onDoneClick(todo.id)}
              onDeleteClick={() => onDeleteClick(todo.id)}
              {...todo}
            />
          )}
        </ListGroup>}
      </Row>
    );
  } else if (todos.length === 0) {
    return <div className="empty-list">There Is No Task Here</div>;
  }

};

export default TodoList;
