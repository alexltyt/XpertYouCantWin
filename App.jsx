// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import WinningScreen from './src/screens/WinningScreen';
import GameScreen from './src/screens/GameScreen';
import { SignProvider } from './src/_util/SignContext'; // Import the SignProvider

function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SignProvider> 
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Winning" component={WinningScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
        </Stack.Navigator>
      </SignProvider>
    </NavigationContainer>
  );
}

export default App;
