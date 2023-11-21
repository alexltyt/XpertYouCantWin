import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import WinningScreen from './src/screens/WinningScreen';


function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Winning" component={WinningScreen} />
      </Stack.Navigator>
    </>
  </NavigationContainer>
  );
}

export default App;