// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import WinningScreen from './src/screens/WinningScreen';
import GameScreen from './src/screens/GameScreen';
import { ContextProvider } from './src/_util/Context'; // Import the SignProvider
import { useState, useRef, useEffect } from 'react';
import Sound from 'react-native-sound';
import Orientation from 'react-native-orientation-locker';

function App() {
  const Stack = createStackNavigator();

  const backgroundMusic = useRef(null);

  useEffect(() => {
    // Initialize sound
    backgroundMusic.current = new Sound(require('./src/assets/sound/inGame.mp3'), (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      // loaded successfully
      // console.log('Duration in seconds: ' + clickSound.current.getDuration());
      // set volume
      backgroundMusic.current.setVolume(0.7);
      backgroundMusic.current.setNumberOfLoops(-1);
      backgroundMusic.current.play();
    });

    return () => {
      backgroundMusic.current.release(); // Release the sound on component unmount
    };
  }, []);

  useEffect(() => {
    Orientation.lockToPortrait();

    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <NavigationContainer>
      <ContextProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Winning" component={WinningScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
        </Stack.Navigator>
      </ContextProvider>
    </NavigationContainer>
  );
}

export default App;
