import React from "react";
import styles from "./Todo.module.css";

function TodoComponent() {
  return (
    <div>
      <TextInput></TextInput>
      <AddButton></AddButton>
    </div>
  );
}

function TextInput() {
  return (
    <div>
      <input type="text" placeholder="Todo :-)" />
    </div>
  );
}

function AddButton() {
  return <button> + </button>;
}

export default TodoComponent;

//input text box
//add todo button
//the list of todos
//mark task as complete checkbox
//delete todo button
//clear all todos
