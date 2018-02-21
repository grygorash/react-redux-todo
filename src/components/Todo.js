import React, { Component } from "react";
import { ListGroupItem, Col, Row, Button } from "reactstrap";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      prevTask: "",
      text: this.props.text
    };
  };

  onEditingClick = () => {
    this.setState({
      isEditing: true,
      prevText: this.state.text
    });
  };

  handleChangeInput = e => {
    this.setState({
      text: e.target.value
    });
  };

  onSaveClick = () => {
    this.setState({
      isEditing: false
    });
  };

  onCancelClick = () => {
    this.setState({
      isEditing: false,
      text: this.state.prevText
    });
  };

  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <div>
          <Button onClick={this.onSaveClick} color="success">save todo</Button>
          <Button onClick={this.onCancelClick} color="warning">cancel todo</Button>
        </div>
      );
    }
    return (
      <div>
        <Button color={this.props.completed ? "warning" : "success"}
                onClick={this.props.onDoneClick}>{this.props.completed ? "Not Done Todo" : "Done Todo"}</Button>
        <Button color="info" style={{display: this.props.completed ? "none" : "inline-block"}}
                onClick={this.onEditingClick}
        >edit todo
        </Button>
        <Button color="danger" style={{display: this.props.completed ? "inline-block" : "none"}}
                onClick={this.props.onDeleteClick}
        >delete todo
        </Button>
      </div>
    );
  }

  render() {
    let isEditing = this.state.isEditing;
    const date = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long"
    };
    return (
      <ListGroupItem>
        <span>{date.toLocaleString("en-US", options)}</span>
        {isEditing ?
          <input type="text"
                 value={this.state.text}
                 onChange={this.handleChangeInput}
          /> :
          <div className={this.props.completed ? "line-through" : ""}>
            {this.state.text}
          </div>
        }
        {this.renderActionSection()}
      </ListGroupItem>
    );
  }
}

export default Todo;
