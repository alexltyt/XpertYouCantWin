import React from 'react';
import { StyleSheet, View, Text, Image, Pressable , ImageBackground} from 'react-native';
import { useState } from 'react';
import Board from '../components/Board';
import PlayerContainer from '../components/PlayerContainer';

function GameScreen({navigation}){
    const [resetKey, setResetKey] = useState(0);

    // Function to reset the cells
    const handleRestart = () => {
    // Increment the resetKey to force a re-render of the Board component
         setResetKey((prevKey) => prevKey + 1);
    };
    return (
        <ImageBackground source={require('../assets/image/wall.png')} resizeMode="cover" style={styles.wall}>
        <View style={styles.bg}>
            <PlayerContainer playerWin="5" aiWin="10"/>
            <Board key={resetKey} onRestart={handleRestart}/>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.buttonSize} onPress={handleRestart}>
                    <Image
                        source={require('../assets/image/restart.png')}
                        style={styles.button}
                    />
                </Pressable>
                <Pressable style={styles.buttonSize} onPress={()=>navigation.navigate('Winning')}>
                    <Image
                        source={require('../assets/image/cross1.png')}
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
        alignItems: 'center',
      },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 60,
    },
    buttonSize: {
        width: 60,
        height: 60,
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


export default GameScreen