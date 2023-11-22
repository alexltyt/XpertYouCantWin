// SignContext.js
import React, { createContext, useContext, useState } from 'react';


const SignContext = createContext();

export const useSign = () => {
  return useContext(SignContext);
};

export const SignProvider = ({ children }) => {
  const [chosenSign, setChosenSign] = useState('circle'); // Default to 'circle'

  const updateChosenSign = (sign) => {
    setChosenSign(sign);
  };

  return (
    <SignContext.Provider value={{ chosenSign, updateChosenSign }}>
      {children}
    </SignContext.Provider>
  );
};
