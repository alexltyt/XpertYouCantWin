import React from 'react'
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { useState } from 'react';

const GameResult = (winner) => {
  return (
    <View>
        <View>
            <Text>Winner!</Text>
        </View>
        <View>
            <Image source={require('../assets/images/rock.png')} />
        </View>
    </View>
  )
}

export default GameResult