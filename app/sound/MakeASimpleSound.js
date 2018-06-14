import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
import { Asset, Audio } from 'expo';

const soundObject = new Audio.Sound();

const play = async () => {
  try {
    await soundObject.loadAsync({
      uri:
        'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
    });
    await soundObject.playAsync();
  } catch (error) {
    console.log('error happened', error);
  }
};

const stop = async () => {
  await soundObject.stopAsync();
  await soundObject.unloadAsync();
};


export default class MakeASimpleSound extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoading: false,
      isPlaying: false
    }
  }

  playSound = () => {
    if (!this.state.isPlaying) {
      this.setState({isPlaying: true})
      play()
    }
    else {
      this.setState({isPlaying: false})
      stop()
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.playSound}
          title="Make a Sound"
          color="#841584"
          accessibilityLabel="Make a Sound by pressing this purple button!"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
