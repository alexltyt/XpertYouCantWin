import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Pressable, Alert } from 'react-native';
import { useSign } from '../_util/SignContext'; // Import useSign
//import { checkWinner } from './gameLogic/CheckWinner';
//import { bestMove } from './gameLogic/Minimax';

const Board = ({ onRestart }) => {
  const [currentPlayer, setCurrentPlayer] = useState('Player'); // 'Player' or 'AI'
  const [drawCount, setDrawCount] = useState(0);
  const [cells, setCells] = useState(Array(9).fill(null));
  const { chosenSign } = useSign();
  const [gameOver, setGameOver] = useState(false);

  //temp const set here
  // difficulty = 'normal' or 'xpert';
  const difficulty = 'normal';

  useEffect(() => {
    // Reset the cells when the reset key changes
    setCells(Array(9).fill(null));
    setGameOver(false);
  }, [onRestart]);

  const handlePostMoveLogic = (newCells) => {
    // Check if there is a winner
    const winner = checkWinner(newCells);
    if (winner !== null && !gameOver) {
      setGameOver(true); // Set game over state
      if (winner === 'draw') {
        setDrawCount(drawCount + 1);
        Alert.alert("Game Over", `Draw!`, [{ text: "OK", onPress: () => onRestart() }]);
      } else {
        Alert.alert("Game Over", `${winner} wins!`, [{ text: "OK", onPress: () => onRestart() }]);
      }
    }
  };

  const handleCellClick = (index) => {
    // Check if the cell is already occupied
    if (cells[index] === null && !gameOver) {
      const newCells = [...cells];
      newCells[index] = currentPlayer;
      setCells(newCells);

      handlePostMoveLogic(newCells); // Check for winner after player's move

      if (!gameOver) {
        bestMove(newCells); // AI's turn
        handlePostMoveLogic(newCells); // Check for winner after AI's move
      }

      setCurrentPlayer('Player');
    }
  };

  const checkWinner = (cells) => {
    let winner = null;

    // Check rows
    for (let i = 0; i < 9; i += 3) {
      if (cells[i] !== null && cells[i] === cells[i + 1] && cells[i] === cells[i + 2]) {
        winner = cells[i];
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (cells[i] !== null && cells[i] === cells[i + 3] && cells[i] === cells[i + 6]) {
        winner = cells[i];
      }
    }

    // Check diagonals
    if (cells[0] !== null && cells[0] === cells[4] && cells[0] === cells[8]) {
      winner = cells[0];
    }

    if (cells[2] !== null && cells[2] === cells[4] && cells[2] === cells[6]) {
      winner = cells[2];
    }

    // Check draw
    if (!cells.includes(null) && winner === null) {
      return "draw";
    }

    return winner;

  }

  if (difficulty === 'xpert') {
    scores = {
      'AI': 10,
      'Player': -10,
      "draw": -5
    };
  }

  if (difficulty === 'normal') {
    scores = {
      "AI": (Math.random() * 10) - 5,
      'Player': -3,
      "draw": -2
    };
  }

  function bestMove(board) {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = 'AI';
        let score = minimax(board, 0, false);
        board[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    board[move] = 'AI';
    handlePostMoveLogic(board);
  }

  function minimax(board, depth, isMaximizing) {
    let result = checkWinner(board);
    if (result !== null) {
      return scores[result];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = 'AI';
          let score = minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = 'Player';
          let score = minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  }

  const renderCell = (index) => {
    const cellValue = cells[index];
    let cellContent = null;

    if (cellValue === 'Player') {
      if (chosenSign === 'circle') {
        cellContent = (
          <Image
            source={require('../assets/image/circle.png')}
            style={styles.sign}
          />
        );
      } else {
        cellContent = (
          <Image
            source={require('../assets/image/cross1.png')}
            style={styles.sign}
          />
        );
      }
    } else if (cellValue === 'AI') {
      if (chosenSign === 'circle') {
        cellContent = (
          <Image
            source={require('../assets/image/cross1.png')}
            style={styles.sign}
          />
        );
      } else {
        cellContent = (
          <Image
            source={require('../assets/image/circle.png')}
            style={styles.sign}
          />
        );
      };
    }

    return (
      <Pressable
        style={styles.cell}
        onPress={() => handleCellClick(index)}
        disabled={cellValue !== null}
      >
        {cellContent}
      </Pressable>
    );
  };

  return (
    <View>
      <Text style={styles.text}>Draw: {drawCount}</Text>
      <View style={styles.board}>
        <View style={styles.row}>
          {renderCell(0)}
          {renderCell(1)}
          {renderCell(2)}
        </View>
        <View style={styles.row}>
          {renderCell(3)}
          {renderCell(4)}
          {renderCell(5)}
        </View>
        <View style={styles.row}>
          {renderCell(6)}
          {renderCell(7)}
          {renderCell(8)}
        </View>
      </View>
      <Text style={styles.text}>{currentPlayer}'s Turn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    marginTop: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
  cell: {
    width: 100,
    height: 100,
    borderColor: '#EFC8A9',
    borderWidth: 3,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sign: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 30,
    marginTop: 30,
    fontFamily: 'Lobster-Regular',
    color: 'rgb(98, 29, 29)',
    textAlign: 'center',
  },
});

export default Board;