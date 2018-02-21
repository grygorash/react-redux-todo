import React from "react";
import { Button } from "reactstrap";

const Link = ({active, children, onClick}) => {
  if (active) {
    return <Button color="success">{children}</Button>;
  }

  return (
    <Button color="default" onClick={e => {
      e.preventDefault();
      onClick();
    }}
    >
      {children}
    </Button>
  );
};

export default Link;
