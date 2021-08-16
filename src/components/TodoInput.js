import React from "react";

const TodoInput = ({
  item,
  handleChange,
  handleSubmit,
  updateItem,
  inputRef,
}) => {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white h-100">
              <i className="fas fa-book" />
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize p-2"
            placeholder="add a todo item"
            value={item}
            onChange={handleChange}
            ref={inputRef}
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className={`btn btn-lg mt-3 text-capitalize ${updateItem
              ? "btn-success"
              : "btn-primary"}`}
          >
            {updateItem ? "update item" : "add item"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
