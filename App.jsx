import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';


const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="aaa" component={HomeScreen} />
      </Stack.Navigator>
    </>
  </NavigationContainer>
  );
}

export default App;