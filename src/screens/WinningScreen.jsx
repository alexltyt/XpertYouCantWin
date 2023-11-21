import React from 'react'
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { useState } from 'react';
import GameResult from '../components/GameResult';


const WinningScreen = ({navigation}) => {
  return (
    <View>
        <GameResult draw="5" timeUsed="14:05"/>
    </View>
  )
}

export default WinningScreen