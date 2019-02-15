import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: ""
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { label } = this.state;
    this.setState({ label: "" });
    this.props.onItemAdded(label);
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.label}
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
        />

        <button
          disabled={!this.state.label.trim().length}
          type="submit"
          className="add-todo-btn"
        >
          Add
        </button>
      </form>
    );
  }
}
