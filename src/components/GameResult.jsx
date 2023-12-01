import React from 'react'
import { StyleSheet, View, Text, Image, Pressable, ImageBackground } from 'react-native';
import { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const GameResult = ({draw, timeUsed, finalWinner}) => {
  return (

    <View style={styles.container}>

        {finalWinner == 'Player' ? (
          <View>
            <Text style={styles.title}>Winner!</Text>
            <View style={styles.winnerSignContainer}>
              <Image source={require('../assets/image/p.png')} style={styles.winnerSign} />
            </View>
            <Text style={styles.text}>Player</Text>
          </View>
        ) : finalWinner == 'AI' ? (
          <View>
            <Text style={styles.title}>Winner!</Text>
            <View style={styles.winnerSignContainer}>
              <Image source={require('../assets/image/ai.png')} style={styles.winnerSign} />
            </View>
            <Text style={styles.text}>AI</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.title}>  </Text>
            <View style={styles.winnerSignContainer}>
              <Image source={require('../assets/image/draw1.png')} style={styles.winnerSign} />
            </View>
            <Text style={styles.text}>Draw</Text>
          </View>
        )}
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
    marginTop: hp('2%'),
  },
  title: {
      fontSize: 45,
      margin:hp('3%'),
      fontFamily: 'Lobster-Regular',
      color: 'rgb(98, 29, 29)',
      textAlign: 'center',
  },
  text: {
      fontSize: 30,
      margin:hp('2%'),
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