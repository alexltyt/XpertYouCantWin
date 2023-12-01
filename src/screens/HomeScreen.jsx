import React from 'react';
import { StyleSheet, View, Text, Image, Pressable,ImageBackground } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import ChooseSign from '../components/ChooseSign';
import ChooseDifficulty from '../components/ChooseDifficulty';
import Sound from 'react-native-sound';


const HomeScreen = ({navigation}) => {

  const startSound = useRef(null);


  useEffect(() => {
    // Initialize sound
    startSound.current = new Sound(require('../assets/sound/start.mp3'), (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      // loaded successfully
      // console.log('Duration in seconds: ' + clickSound.current.getDuration());
      // set volume
      startSound.current.setVolume(1.0);
    });


    return () => {
      startSound.current.release(); // Release the sound on component unmount
    };
  }, []);


  function handleStart(){
    startSound.current.play();
    navigation.navigate('Game');
  }
  return (
    <ImageBackground source={require('../assets/image/wall.png')} resizeMode="cover" style={styles.wall}>
    < View style={styles.bg}>
        <ChooseSign />
        <ChooseDifficulty/>
            <Pressable style={styles.startContainer} onPress={handleStart}>
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
    // marginTop: hp('5%'),
},
  startButton: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
  },
});

export default HomeScreen;
