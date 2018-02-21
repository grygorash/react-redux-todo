import React from "react";
import { Col } from "reactstrap";
import FilterLink from "../containers/FilterLink";

const Filter = () => (
  <Col md="12" className="filter">
    <p>Show:</p>
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </Col>
);

export default Filter;
