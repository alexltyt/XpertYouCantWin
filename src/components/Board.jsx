import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { useSign } from '../_util/SignContext'; // Import useSign

const Board = ({ onRestart }) => {
  const [currentPlayer, setCurrentPlayer] = useState('Player'); // 'Player' or 'AI'
  const [drawCount, setDrawCount] = useState(0);
  const [cells, setCells] = useState(Array(9).fill(null));
  const { chosenSign } = useSign(); 

  useEffect(() => {
    // Reset the cells when the reset key changes
    setCells(Array(9).fill(null));
  }, [onRestart]);


  const handleCellClick = (index) => {
    // Check if the cell is already occupied
    if (cells[index] === null) {
      const newCells = [...cells];
      newCells[index] = currentPlayer;
      setCells(newCells);

      // Switch players
      setCurrentPlayer(currentPlayer === 'Player' ? 'AI' : 'Player');
    }
  };

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
        }else{
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
