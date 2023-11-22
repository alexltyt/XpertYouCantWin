import React from 'react'
import { StyleSheet, View, Text, Image, Pressable , ImageBackground} from 'react-native';
import { useState } from 'react';
import GameResult from '../components/GameResult';


const WinningScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/image/wall.png')} resizeMode="cover" style={styles.wall}>

    <View style={styles.bg}>
        <GameResult draw="5" timeUsed="14:05" winner="circle"/>
        <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonSize} onPress={()=>navigation.navigate('Game')}>
                <Image
                    source={require('../assets/image/restart.png')}
                    style={styles.button}
                />
            </Pressable>
            <Pressable style={styles.buttonSize} onPress={()=>navigation.navigate('Home')}>
                <Image
                    source={require('../assets/image/home.png')}
                    style={styles.button}
                />
            </Pressable>
        </View>
    </View>
    </ImageBackground>
  )
}

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
      },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonSize: {
        width: 90,
        height: 90,
        aspectRatio: 1,
        marginTop: 20,
    },
    button: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default WinningScreen