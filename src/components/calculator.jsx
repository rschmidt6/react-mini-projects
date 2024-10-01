import React, { useState } from "react";
import "./Calculator.css";

function CalcComponent() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
    }
  };

  const appendToValue = (numberToAppend) => {
    setValue((prevValue) => prevValue + numberToAppend.toString());
  };

  const concatenateValue = (valueToAdd) => {
    setValue((prevValue) => {
      // If prevValue is empty, just set it to valueToAdd
      if (prevValue === "") {
        return valueToAdd.toString();
      }
      // Otherwise, concatenate the new value
      return prevValue + valueToAdd.toString();
    });
  };

  const handleClear = () => {
    setValue("");
  };

  const handleCalculate = () => {
    function operate(a, b, op) {
      switch (op) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return a / b;
        default:
          throw new Error("Invalid operator");
      }
    }

    // First, split the string into numbers and operators
    let nums = value.split(/[-+*/]/).map(Number);
    let ops = value.split("").filter((c) => "+-*/".includes(c));

    // Perform multiplication and division first
    for (let i = 0; i < ops.length; i++) {
      if (ops[i] === "*" || ops[i] === "/") {
        nums[i] = operate(nums[i], nums[i + 1], ops[i]);
        nums.splice(i + 1, 1);
        ops.splice(i, 1);
        i--; // Recheck this position
      }
    }

    // Then perform addition and subtraction
    let result = nums[0];
    for (let i = 0; i < ops.length; i++) {
      result = operate(result, nums[i + 1], ops[i]);
    }

    setValue(result);
  };

  return (
    <div className="calculator">
      <NumberInput value={value} onChange={handleChange} />
      <div className="calculator-buttons">
        <div>
          {[...Array(10)].map((_, index) => (
            <NumberButton key={index} onAppend={appendToValue} number={index} />
          ))}
        </div>
        <OperationAdder
          operation="+"
          onConcatenate={concatenateValue}
          valueToConcatenate={value}
        />
        <OperationAdder operation="-" onConcatenate={concatenateValue} />
        <OperationAdder operation="*" onConcatenate={concatenateValue} />
        <OperationAdder operation="/" onConcatenate={concatenateValue} />
        <EqualsButton onCalculate={handleCalculate}></EqualsButton>
        <ClearButton onClear={handleClear}></ClearButton>{" "}
      </div>
    </div>
  );
}

function NumberInput({ value, onChange }) {
  return (
    <div className="calculator-display">
      <input
        id="numberInput"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Start Calculating :-)"
      />
    </div>
  );
}

function NumberButton({ number, onAppend }) {
  return (
    <button className="number-button" onClick={() => onAppend(number)}>
      {number}
    </button>
  );
}

function OperationAdder({ operation, onConcatenate }) {
  return (
    <button
      className="operation-button"
      onClick={() => onConcatenate(operation)}
    >
      {operation}
    </button>
  );
}

function ClearButton({ onClear }) {
  return (
    <button className="clear-button" onClick={() => onClear()}>
      C
    </button>
  );
}

function EqualsButton({ onCalculate }) {
  return (
    <button className="equals-button" onClick={() => onCalculate()}>
      =
    </button>
  );
}

export default CalcComponent;
