import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native';
import { useRef, useEffect } from 'react';
import Sound from 'react-native-sound';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const ChooseDifficulty = ({onSelect, difficulty}) => {
    const clickSound = useRef(null);

    useEffect(() => {
        // Initialize sound
        clickSound.current = new Sound(require('../assets/sound/pick2.mp3'), (error) => {
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

    const handlePress = (selection) => {
        // Play the click sound
        clickSound.current.play((success) => {
            if (!success) {
                console.log('Sound did not play correctly');
            }
        });

        onSelect(selection);
    };

    
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
                onPress={()=>handlePress('normal')}    
            >
                <Text style={styles.text}>
                    Normal
                </Text>
            </Pressable>
            <Pressable 
                style={[styles.diffcultyChoice, difficulty==='xpert'?styles.selected:null]}
                onPress={()=>handlePress('xpert')} 
            >
                <Text style={styles.text}>
                    Xpert
                </Text>
            </Pressable>
        </View>
    </View>    
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: hp('5%'),
    },
    text: {
        fontSize: 25,
        margin: hp('1%'),
        fontFamily: 'Lobster-Regular',
        color: 'rgb(98, 29, 29)',
        textAlign: 'center',
    },
    difficultyBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: hp('7%'),
        marginBottom: hp('7%'),
        
    },
    diffcultyChoice: {
        width: 120,
        borderWidth: 2,
        borderColor: 'rgb(98, 29, 29)',
        padding: wp('3%'),
    },
    selected: {
        backgroundColor: '#EFC8A9',
    }
  });

export default ChooseDifficulty