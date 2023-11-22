import React from 'react'
import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native'
import { useSign } from '../_util/SignContext';


const ChooseSign = () => {
    const { updateChosenSign } = useSign(); // Use useSign to access the context

    const handleChooseSign = (sign) => {
        updateChosenSign(sign); // Update the chosen sign using the context
        console.log(sign);
    };
    return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Choose your sign
        </Text>
        <Pressable onPress={()=>handleChooseSign("circle")}>
            <Image
                source={require('../assets/image/circle.png')}
                style={ styles.sign}
            />
        </Pressable>
        <Pressable onPress={()=>handleChooseSign("cross")}>
            <Image
                source={require('../assets/image/cross1.png')}
                style={styles.sign} 
            />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    sign: {
        width: 90,
        height: 90,
        margin: 20,
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    title: {
        fontSize: 25,
        margin:10,
        fontFamily: 'Lobster-Regular',
        color: 'rgb(98, 29, 29)',
    }
  });

export default ChooseSign