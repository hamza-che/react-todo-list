import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ items, clearList, deleteItem, handleUpdate }) => {
  return (
    <ul className="list-group my-5">
      <h2 className="text-capitalize text-center mb-3">todo list</h2>
      {items.map(item => {
        const { title, id } = item;
        return (
          <TodoItem
            key={id}
            title={title}
            deleteItem={() => deleteItem(id)}
            handleUpdate={() => handleUpdate(id)}
          />
        );
      })}
      <div className="d-grid mt-5">
        <button
          type="button"
          className="btn btn-lg btn-danger text-capitalize"
          onClick={clearList}
        >
          clear list
        </button>
      </div>
    </ul>
  );
};

export default TodoList;
