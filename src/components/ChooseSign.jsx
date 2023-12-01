import React, { useState, useRef,useEffect } from 'react';
import Sound from 'react-native-sound';
import { View, Text, Image, StyleSheet, Pressable, Animated } from 'react-native';
import { useSign } from '../_util/SignContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ChooseSign = () => {

    const { updateChosenSign } = useSign();
    const [selectedSign, setSelectedSign] = useState('circle');
    const animation = new Animated.Value(0);
    const clickSound = useRef(null);

    const handleChooseSign = (sign) => {
        clickSound.current.play((success) => {
            if (!success) {
                console.log('Sound did not play correctly');
            }
        });

        updateChosenSign(sign);
        setSelectedSign(sign);
        // Add animation when a sign is chosen
        Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
        }).start();
    };

    const animatedStyle = {
        transform: [
        {
            scale: animation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.2, 1],
            }),
        },
        ],
    };

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
    },[]);

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Choose your sign</Text>
        <Pressable
            onPress={() => handleChooseSign('circle')}
            style={[styles.sign, selectedSign === 'circle' && styles.selectedSign]}
        >
            <Animated.View style={[styles.signContent, animatedStyle]}>
            <Image
                source={require('../assets/image/circle.png')}
                style={styles.signImage}
            />
            </Animated.View>
        </Pressable>
        <Pressable
            onPress={() => handleChooseSign('cross')}
            style={[styles.sign, selectedSign === 'cross' && styles.selectedSign]}
        >
            <Animated.View style={[styles.signContent, animatedStyle]}>
            <Image
                source={require('../assets/image/cross1.png')}
                style={styles.signImage}
            />
            </Animated.View>
        </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
  sign: {
    width: 90,
    height: 90,
    margin: hp('1%'),
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 10, // Add border radius for a rounded look
    overflow: 'hidden', // Clip the animated content within the border
  },
  selectedSign: {
    borderColor: 'black',
  },
  signContent: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signImage: {
    width: '70%', // Adjust image size as needed
    height: '70%', // Adjust image size as needed
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
  },
  title: {
    fontSize: 25,
    margin: hp('1%'),
    fontFamily: 'Lobster-Regular',
    color: 'rgb(98, 29, 29)',
  },
});

export default ChooseSign;
