import React from "react";

const TodoItem = ({ title, deleteItem, handleUpdate }) => {
  return (
    <li className="list-group-item p-3 d-flex justify-content-between align-items-center text-capitalize">
      <h5 className="m-0">{title}</h5>
      <div className="todo-icons">
        <span
          className="btn mx-2 p-0 text-success cursor-pointer"
          onClick={handleUpdate}
        >
          <i className="fas fa-pen" />
        </span>
        <span className="btn mx-2 p-0 text-danger" onClick={deleteItem}>
          <i className="fas fa-trash" />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
