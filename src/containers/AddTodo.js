import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { Col, Button, Form } from "reactstrap";

let AddTodo = ({dispatch}) => {
  let input;
  this.handleSubmit = e => {
    e.preventDefault();
    if (!input.value.trim()) {
      alert("enter todo");
    } else {
      dispatch(addTodo(input.value));
      input.value = "";
    }
  };

  return (
    <Form className="row"
          onSubmit={this.handleSubmit}
    >
      <Col md="6">
        <input
          type="text"
          placeholder="Enter Your Todo"
          ref={node => {
            input = node;
          }}
        />
      </Col>
      <Col md="6">
        <Button color="primary" type="submit">
          Add Todo
        </Button>
      </Col>
    </Form>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
