import React from 'react';
import { StyleSheet, View, Text, Image, Pressable,ImageBackground } from 'react-native';
import { useState } from 'react';
import ChooseSign from '../components/ChooseSign';
import ChooseDifficulty from '../components/ChooseDifficulty';

const HomeScreen = ({navigation}) => {
  const [difficulty, setDifficulty] = useState('xpert'); // ['normal', 'xpert']

  function handleSelect(difficulty){
    setDifficulty(difficulty);
    console.log(difficulty);
  };
  return (
    <ImageBackground source={require('../assets/image/wall.png')} resizeMode="cover" style={styles.wall}>
    < View style={styles.bg}>
        <ChooseSign />
        <ChooseDifficulty onSelect={handleSelect} difficulty={difficulty}/>
            <Pressable style={styles.startContainer} onPress={()=>navigation.navigate('Game')}>
                <Image
                    source={require('../assets/image/start2.png')}
                    style={styles.startButton}
                />
            </Pressable>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wall: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  bg: {
    height: '100%',
    backgroundColor: 'rgba(250, 243, 223, 0.552)',
    alignItems: 'center',
  },
  startContainer: {
    width: 250,
    height: 110,
    aspectRatio: 1,
    marginTop: 20,
},
  startButton: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
  },
});

export default HomeScreen;
