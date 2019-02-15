import React from "react";

import "./todo-list-item.css";

const TodoListItem = ({
  important,
  done,
  label,
  onToggleImportant,
  onToggleDone,
  onDelete
}) => {
  let classNames = "todo";
  if (important) {
    classNames += " important";
  }

  if (done) {
    classNames += " done";
  }

  return (
    <li className={classNames}>
      <button className="checkbox icon" onClick={onToggleDone}>
        <i className="material-icons">
          {done ? "check_box" : "check_box_outline_blank"}
        </i>
      </button>
      <span>{label}</span>

      <button
        type="button"
        className="important-icon icon"
        onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button type="button" className="delete-icon icon" onClick={onDelete}>
        <i className="fa fa-trash" />
      </button>
    </li>
  );
};

export default TodoListItem;
