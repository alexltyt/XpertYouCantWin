import React from 'react'
import { StyleSheet, View, Text, Image, Pressable, ImageBackground } from 'react-native';
import { useState } from 'react';

const GameResult = ({draw, timeUsed, winner}) => {
  return (

    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.title}>Winner!</Text>
        </View>
        {winner==='cross'? 
        <View>
          <View style={styles.winnerSignContainer}>
            <Image source={require('../assets/image/cross1.png')} style={styles.winnerSign} />
          </View>
          <Text style={styles.text}>cross</Text>
        </View>:
        <View>
          <View style={styles.winnerSignContainer}>
            <Image source={require('../assets/image/circle.png')} style={styles.winnerSign} />
          </View>
          <Text style={styles.text}>circle</Text>
        </View>}
        
        <View>
            <Text style={styles.text}>Draw: {draw} times</Text>
            <Text style={styles.text}>Time Used: {timeUsed}</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
      fontSize: 45,
      margin:20,
      fontFamily: 'Lobster-Regular',
      color: 'rgb(98, 29, 29)',
      textAlign: 'center',
  },
  text: {
      fontSize: 30,
      margin:16,
      fontFamily: 'Lobster-Regular',
      color: 'rgb(98, 29, 29)',
      textAlign: 'center',
  },
  winnerSignContainer: {
      width: 220,
      height: 220,
      aspectRatio: 1,
      resizeMode: 'contain',
  },
  winnerSign: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
  },
});

export default GameResult