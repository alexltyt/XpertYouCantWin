import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native';
import { useState } from 'react';


const ChooseDifficulty = ({onSelect, difficulty}) => {
    // const [difficulty, setDifficulty] = useState('normal');
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.text}>
                Choose your difficulty
            </Text>
        </View>
        <View style={styles.difficultyBox}>
            <Pressable 
                style={[styles.diffcultyChoice, difficulty==='normal'?styles.selected:null]}
                onPress={()=>onSelect('normal')}    
            >
                <Text style={styles.text}>
                    Normal
                </Text>
            </Pressable>
            <Pressable 
                style={[styles.diffcultyChoice, difficulty==='xpert'?styles.selected:null]}
                onPress={()=>onSelect('xpert')} 
            >
                <Text style={styles.text}>
                    Xpert
                </Text>
            </Pressable>
        </View>
        <View style={styles.startContainer}>
            <Image
                source={require('../img/start2.png')}
                style={styles.startButton}
            />
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
        marginBottom: 20,
    },
    text: {
        fontSize: 25,
        margin:10,
        fontFamily: 'Lobster-Regular',
        color: 'rgb(98, 29, 29)',
        textAlign: 'center',
    },
    difficultyBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
        
    },
    diffcultyChoice: {
        width: 120,
        borderWidth: 2,
        borderColor: 'rgb(98, 29, 29)',
        padding: 10,
    },
    selected: {
        backgroundColor: '#EFC8A9',
    },
    startContainer: {
        width: 250,
        height: 110,
        aspectRatio: 1,
        marginTop: 20,
    },
    startButton: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
  });

export default ChooseDifficulty