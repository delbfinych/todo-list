import React from "react";

import TodoListItem from "../todo-list-item/";

import "./todo-list.css";

const TodoList = ({ items, onToggleImportant, onToggleDone, onDelete }) => {
  const elements = items.map(item => {
    const { id, ...itemProps } = item;
    return (
      <TodoListItem
        key={id}
        {...itemProps}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleDone={() => onToggleDone(id)}
        onDelete={() => onDelete(id)}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;
