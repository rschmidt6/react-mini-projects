import React, { useState } from "react";
import styles from "./Todo.module.css";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        id: Date.now(),
        value: inputValue.trim(),
        checked: false,
      };
      setItems([...items, newItem]);
      setInputValue("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents form submission if within a form
      addItem();
    }
  };

  const removeFromArray = (idToRemove) => {
    setItems(items.filter((item) => item.id !== idToRemove));
  };

  const clearArray = () => {
    setItems([]);
  };

  const handleCheckboxChange = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className={styles.todoContainer}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Todo :-)"
          className={styles.input}
        />
        <button onClick={addItem} className={styles.addButton}>
          Add
        </button>
        <button onClick={clearArray} className={styles.clearButton}>
          Clear
        </button>
      </div>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
              className={styles.checkbox}
            />
            <span
              className={`${styles.itemText} ${
                item.checked ? styles.completed : ""
              }`}
            >
              {item.value}
            </span>
            <button
              onClick={() => removeFromArray(item.id)}
              className={styles.removeButton}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
