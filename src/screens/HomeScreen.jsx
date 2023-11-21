import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { useState } from 'react';
import ChooseSign from '../components/ChooseSign';
import ChooseDifficulty from '../components/ChooseDifficulty';

const App = () => {
  const [difficulty, setDifficulty] = useState('xpert'); // ['normal', 'xpert']

  function handleSelect(difficulty){
    setDifficulty(difficulty);
    console.log(difficulty);
  };
  return (
    < View style={styles.bg}>
        <ChooseSign />
        <ChooseDifficulty onSelect={handleSelect} difficulty={difficulty}/>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgba(250, 243, 223, 0.852)',

  },
});

export default App;
