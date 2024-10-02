import React, { useState, useEffect } from "react";
import styles from "./TicTacToe.module.css";

const initialBoard = Array(9).fill(null);

function TicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [activePlayer, setActivePlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  useEffect(() => {
    checkWinner();
  }, [board]);

  const handleClickTile = (index) => {
    if (board[index] === null && !winner) {
      const newBoard = [...board];
      newBoard[index] = activePlayer;
      setBoard(newBoard);
      setActivePlayer(activePlayer === "X" ? "O" : "X");
    }
  };

  const checkWinner = () => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setScores((prev) => ({ ...prev, [board[a]]: prev[board[a]] + 1 }));
        return;
      }
    }

    if (!board.includes(null) && !winner) {
      setWinner("Draw");
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setActivePlayer("X");
    setWinner(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tic-Tac-Toe</h1>
      <div className={styles.status}>
        {winner
          ? winner === "Draw"
            ? "It's a draw!"
            : `${winner} wins!`
          : `It's ${activePlayer}'s turn!`}
      </div>
      <div className={styles.board}>
        {board.map((cell, index) => (
          <button
            key={index}
            className={styles.cell}
            onClick={() => handleClickTile(index)}
          >
            {cell}
          </button>
        ))}
      </div>
      <button className={styles.resetButton} onClick={resetGame}>
        Reset Game
      </button>
      <div className={styles.scores}>
        <div>X: {scores.X}</div>
        <div>O: {scores.O}</div>
      </div>
    </div>
  );
}

export default TicTacToe;
//repesent the matrix visually
//click on a matrix adds that to activeplayer's tiles
//check somehow to see if they won

// x x x
// x x x
// x x x

// 0,0 0,1 0,2
// 1,0 1,1 1,2
// 2,0 2,1 2,2

//or find the finite amount? there are only 8 winning possibilites
