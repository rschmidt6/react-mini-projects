import { useState } from "react";
import styles from "./NumberGuesser.module.css";

function NumberGuesserComponent() {
  const [inputNumber, setInputNumber] = useState("");
  const [generatedNumber, setGeneratedNumber] = useState(null);
  const [message, setMessage] = useState("");
  const [range, setRange] = useState(10);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 1 && Number(value) <= range)) {
      setInputNumber(value);
    }
  };

  const generateNumber = () => {
    if (inputNumber === "") {
      setMessage("Please enter a number first.");
      return;
    }
    const randomNumber = Math.floor(Math.random() * range) + 1;
    setGeneratedNumber(randomNumber);

    if (Number(inputNumber) === randomNumber) {
      setMessage("Congratulations! You guessed correctly!");
    } else {
      setMessage(`Sorry, the number was ${randomNumber}. Try again!`);
    }
  };

  const handleRangeChange = (e) => {
    const newRange = Number(e.target.value);
    setRange(newRange);
    setGeneratedNumber(null);
    setMessage("");
    setInputNumber("");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Number Guessing Game</h2>
      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Guess a number between 1 and {range}:
          <input
            type="number"
            min="1"
            max={range}
            onChange={handleInputChange}
            value={inputNumber}
            className={styles.input}
          />
        </label>
      </div>
      <div className={styles.inputGroup}>
        <button onClick={generateNumber} className={styles.button}>
          Guess!
        </button>
      </div>
      {message && <div className={styles.message}>{message}</div>}
      <div className={styles.rangeGroup}>
        <label className={styles.label}>
          Set number range:
          <input
            type="range"
            min="10"
            max="100"
            value={range}
            onChange={handleRangeChange}
            className={styles.rangeInput}
          />
          <span className={styles.rangeValue}>{range}</span>
        </label>
      </div>
    </div>
  );
}

export default NumberGuesserComponent;
