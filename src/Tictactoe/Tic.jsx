import React, { useState, useEffect } from 'react';
import './style.css';

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turnO, setTurnO] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    checkWinner();
  }, [board]);

  const resetGame = () => {
    setTurnO(true);
    setBoard(Array(9).fill(null));
    setWinner(null);
  };

  const handleBoxClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = turnO ? 'O' : 'X';
    setBoard(newBoard);
    setTurnO(!turnO);
  };

  const checkWinner = () => {
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (board.every(cell => cell !== null)) {
      setWinner('Draw');
    }
  };

  return (
    <>
      <div className={`msgcon ${winner ? '' : 'Hide'}`}>
        <p id="msg" className='text-3xl text-black'>
          {winner === 'Draw' ? 'It\'s a Draw!' : `Congratulations, Winner is ${winner}`}
        </p>
        <button id="newbtn" onClick={resetGame}>New Game</button>
      </div>
      <main>
        <h1 className='text-5xl'>TIC TAC TOE</h1>
        <br /><br />
        <div className="flex text-center justify-center items-center">
          <div className="game">
            {board.map((value, index) => (
              <button
                key={index}
                className="box"
                onClick={() => handleBoxClick(index)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <button id="btn" className='mt-40' onClick={resetGame}>Reset Game</button>
      </main>
    </>
  );
};

export default TicTacToe;