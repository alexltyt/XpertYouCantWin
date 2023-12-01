// SignContext.js
import React, { createContext, useContext, useState } from 'react';


const Context = createContext();

export const useMainContext = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }) => {
  const [chosenSign, setChosenSign] = useState('circle'); // Default to 'circle'
  const [chosenDifficulty, setDifficulty] = useState('normal'); // Default to 'easy'
  const [drawCount, setDrawCount] = useState(0);
  const [timeCount, setTimeCount] = useState(0);
  const [finalWinner, setFinalWinner] = useState('');

  const updateChosenSign = (sign) => {
    setChosenSign(sign);
  };

  const updateDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  }

  const updateDrawCount = (count) => {
    setDrawCount(count);
  }

  const updateTimeCount = (count) => {
    setTimeCount(count);
  }

  const updateFinalWinner = (winner) => {
    setFinalWinner(winner);
  }

  return (
    <Context.Provider value={{ 
      chosenSign, updateChosenSign,
      chosenDifficulty, updateDifficulty,
      drawCount, updateDrawCount,
      timeCount, updateTimeCount,
      finalWinner, updateFinalWinner
      }}>
      {children}
    </Context.Provider>
  );
};
