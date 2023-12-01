import React from 'react'
import { StyleSheet, View, Text, Image, Pressable, ImageBackground } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import Sound from 'react-native-sound';
import GameResult from '../components/GameResult';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useMainContext } from '../_util/Context';

const WinningScreen = ({ navigation }) => {
    const clickSound = useRef(null);

    const {drawCount, timeCount, finalWinner} = useMainContext();
    console.log('WinningScreen.jsx, drawCount:' + drawCount);
    console.log('WinningScreen.jsx, timeCount:' + timeCount);
    console.log('WinningScreen.jsx, winner:' + finalWinner);

    useEffect(() => {
        // Initialize sound
        clickSound.current = new Sound(require('../assets/sound/start.mp3'), (error) => {
            if (error) {
                console.log('Failed to load the sound', error);
                return;
            }
            // loaded successfully
            // console.log('Duration in seconds: ' + clickSound.current.getDuration());
            // set volume
            clickSound.current.setVolume(1.0);
        });

        return () => {
            clickSound.current.release(); // Release the sound on component unmount
        };
    }, []);

    const handlePress = (destination) => {
        // Play the click sound
        clickSound.current.play((success) => {
            if (!success) {
                console.log('Sound did not play correctly');
            }
        });
        navigation.navigate(destination);
    }
    return (
        <ImageBackground source={require('../assets/image/wall.png')} resizeMode="cover" style={styles.wall}>

            <View style={styles.bg}>
                <GameResult draw={drawCount} timeUsed={timeCount} finalWinner={finalWinner} />
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.buttonSize} onPress={() => handlePress('Game')}>
                        <Image
                            source={require('../assets/image/restart.png')}
                            style={styles.button}
                        />
                    </Pressable>
                    <Pressable style={styles.buttonSize} onPress={() => handlePress('Home')}>
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
        width: hp('10%'),
        height: hp('10%'),
        aspectRatio: 1,
        marginTop: hp('2%'),
    },
    button: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default WinningScreen