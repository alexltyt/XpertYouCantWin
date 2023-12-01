import React from 'react'
import { StyleSheet, View, Text, Image, Pressable , ImageBackground} from 'react-native';
import { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const PlayerContainer = ({playerWin, aiWin}) => {
  return (
    <View>
        <View style={styles.container}>
            <View style={styles.player}>
                <Image source={require('../assets/image/p.png')} style={styles.sign} />
                <Text style={styles.text}>{playerWin} Wins</Text>
            </View>
            <View style={styles.player}>
                <Image source={require('../assets/image/ai.png')} style={styles.sign} />
                <Text style={styles.text}>{aiWin} Wins</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: hp('3%'),
        gap: wp('20%'),
    },
    text: {
        fontSize: 30,
        fontFamily: 'Lobster-Regular',
        color: 'rgb(98, 29, 29)',
        textAlign: 'center',
    },
    player: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: hp('1%'),
    },
    sign: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
})

export default PlayerContainer