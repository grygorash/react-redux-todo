import React from "react";
import { Container } from "reactstrap";
import Filter from "./Filter";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import './App.css'

const App = () => (
  <Container>
    <AddTodo />
    <Filter />
    <VisibleTodoList />
  </Container>
);

export default App;
