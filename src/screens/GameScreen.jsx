import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Sound from 'react-native-sound';
import Board from '../components/Board';
import PlayerContainer from '../components/PlayerContainer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useMainContext } from '../_util/Context';


const GameScreen = ({ navigation }) => {
  // const [resetKey, setResetKey] = useState(0);
  const [playerWin, setPlayerWin] = useState(0);
  const [aiWin, setAiWin] = useState(0);
  const [drawCount, setDrawCount] = useState(0);
  const [timeCount, setTimeCount] = useState(0);
  const [finalWinner, setFinalWinner] = useState('draw');

  // reset drawCount, timeCount, finalWinner when the game restarts
  useFocusEffect(
    React.useCallback(() => {
      setDrawCount(0);
      setTimeCount(0);
      setPlayerWin(0);
      setAiWin(0);
      setFinalWinner('draw');
  
      return () => {
        // Any cleanup code if necessary
      };
    }, [])
  );

  const clickSound = useRef(null);
  const startTime = useRef(null);
  const endTime = useRef(null);

  const { updateDrawCount, updateTimeCount, updateFinalWinner } = useMainContext();
  



  const handleRestart = (winner) => {

    // Play the click sound
    clickSound.current.play((success) => {
      if (!success) {
        console.log('Sound did not play correctly');
      }
    });

    // setResetKey((prevKey) => prevKey + 1);

    // Update win count based on the winner
    if (winner === 'Player') {
      setPlayerWin(playerWin + 1);
    } else if (winner === 'AI') {
      setAiWin(aiWin + 1);
    } else if (winner === 'draw') {
      setDrawCount(drawCount + 1);
    }

  };

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    // Initialize sound
    clickSound.current = new Sound(require('../assets/sound/pick2.mp3'), (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      startTime.current = new Date();
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

    if (destination === 'Winning') {
      endTime.current = new Date();
      const timeDifferent = endTime.current - startTime.current;
      setTimeCount(formatTime(timeDifferent));
      updateTimeCount(formatTime(timeDifferent));
      updateDrawCount(drawCount);
      if (playerWin > aiWin) {
        setFinalWinner('Player');
        updateFinalWinner('Player');
      } else if (playerWin < aiWin) {
        setFinalWinner('AI');
        updateFinalWinner('AI');
      } else {
        setFinalWinner('draw');
        updateFinalWinner('draw');
      }
    }

    navigation.navigate(destination);
  }

  // this is the function to print the time count in log to test
  useEffect(() => {
    if (timeCount) {
      console.log(`Time spent on the GameScreen is now updated to: ${timeCount}`);
    }
  }, [timeCount]);

  // this is the function to print the final winner in log to test
  useEffect(() => {
    if (finalWinner) {
      console.log(`The final winner is: ${finalWinner}`);
    }
  }, [finalWinner]);

  return (
    <ImageBackground source={require('../assets/image/wall.png')} resizeMode="cover" style={styles.wall}>
      <View style={styles.bg}>
        <PlayerContainer playerWin={playerWin} aiWin={aiWin} />
        <Board onRestart={(winner) => handleRestart(winner)} drawCount={drawCount} />
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.buttonSize}
            onPress={() => handleRestart()}
            underlayColor="rgba(0, 0, 0, 0.1)" // Color when button is pressed
          >
            <Image source={require('../assets/image/restart.png')} style={styles.button} />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonSize}
            onPress={() => handlePress('Winning')}
            underlayColor="rgba(0, 0, 0, 0.1)"
          >
            <Image source={require('../assets/image/endGame2.png')} style={styles.button} />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonSize}
            onPress={() => handlePress('Home')}
            underlayColor="rgba(0, 0, 0, 0.1)"
          >
            <Image source={require('../assets/image/home.png')} style={styles.button} />
          </TouchableHighlight>
        </View>
        {/* <View style={styles.buttonContainer}> */}
        {/* Add a new button to reset stats */}
        {/* <TouchableHighlight
            style={styles.buttonSize}
            onPress={() => handleResetStats()}
            underlayColor="rgba(0, 0, 0, 0.1)"
          >
            <Text style={styles.buttonText}>Reset Stats</Text>
          </TouchableHighlight> */}
        {/* </View> */}
      </View>
    </ImageBackground>
  );
};

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
    gap: wp('15%'),
    marginTop: hp('6%'),
  },
  buttonSize: {
    width: 60,
    height: 60,
    aspectRatio: 1,
    // marginTop: hp('2%'),
  },
  button: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default GameScreen;

