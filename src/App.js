import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [ items, setItems ] = useState([]);
  const [ item, setItem ] = useState("");
  const [ id, setId ] = useState(0);
  const [ updateItem, setUpdateItem ] = useState(false);
  const inputRef = useRef();

  const handleChange = e => {
    setItem(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id,
      title: item,
    };
    setItems([ ...items, newItem ]);
    setItem("");
    setId(uuidv4());
    setUpdateItem(false);
  };

  const clearList = e => {
    e.preventDefault();
    setItems([]);
    setItem("");
    setId(0);
    setUpdateItem(false);
  };

  const deleteItem = id => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  const handleUpdate = id => {
    const filteredItems = items.filter(item => item.id !== id);
    const selectedItem = items.find(item => item.id === id);
    setItems(filteredItems);
    setItem(selectedItem.title);
    setId(id);
    setUpdateItem(true);
  };

  useEffect(
    () => {
      if (updateItem) {
        inputRef.current.focus();
      }
    },
    [ updateItem, items ]
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-8 mx-auto mt-4">
          <h2 className="text-center text-capitalize mt-4">todo input</h2>
          <TodoInput
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            updateItem={updateItem}
            inputRef={inputRef}
          />
          <TodoList
            items={items}
            clearList={clearList}
            deleteItem={deleteItem}
            handleUpdate={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
