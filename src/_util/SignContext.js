// SignContext.js
import React, { createContext, useContext, useState } from 'react';


const SignContext = createContext();

export const useSign = () => {
  return useContext(SignContext);
};

export const SignProvider = ({ children }) => {
  const [chosenSign, setChosenSign] = useState('circle'); // Default to 'circle'
  const [chosenDifficulty, setDifficulty] = useState('normal'); // Default to 'easy'

  const updateChosenSign = (sign) => {
    setChosenSign(sign);
  };

  const updateDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  }

  return (
    <SignContext.Provider value={{ 
      chosenSign, updateChosenSign,
      chosenDifficulty, updateDifficulty 
      }}>
      {children}
    </SignContext.Provider>
  );
};
