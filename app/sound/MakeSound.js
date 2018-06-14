import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
  await soundObject.loadAsync();
};

export default class MakeSound extends React.Component {
  constructor(props) {
    super(props);
    this.index = 0;
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.playbackInstance = null;
    this.state = {
      showVideo: false,
      playbackInstanceName: 'loading',
      loopingType: 'looping type all',
      muted: false,
      playbackInstancePosition: null,
      playbackInstanceDuration: null,
      shouldPlay: false,
      isPlaying: false,
      isBuffering: false,
      isLoading: true,
      fontLoaded: false,
      shouldCorrectPitch: true,
      volume: 1.0,
      rate: 1.0,
      poster: false,
      useNativeControls: false,
      fullscreen: false,
    };
  }


  componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    });
  }

  _loadNewPLaybackInstance = async playing => {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setOnPlaybackStatusUpdate(null); //?
      this.playbackInstance = null;
    }

    const source = {
      uri:
        'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
    };
    const initialStatus = {
      shouldPlay: playing,
      rate: this.state.rate,
      shouldCorrectPitch: this.state.shouldCorrectPitch,
      volume: this.state.volume,
      isMuted: this.state.muted,
    };

    const { sound, status } = await Audio.Sound.create(
      source,
      initialStatus,
      this._onPlaybackInstance
    );
    this.playbackInstance = sound;
  };

  _updateScreenForLoading(isLoading) {
    if (isLoading) {
      this.setState({
        isPlaying: false,
        playbackInstanceName: 'Loading',
        playbackInstanceDuration: null,
        playbackInstancePosition: null,
        isLoading: true,
      });
    } else {
      this.setState({
        playbackInstanceName: 'Song',
        isLoading: false,
      });
    }
  }

  _onPlaybackStatusUpdate = status => {
    if (status.isLoaded) {
      this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,
        shouldCorrectPitch: status.shouldCorrectPitch,
      });
    } else {
      if (status.error) {
        console.log(`FATAL ERROR: ${status.error}`);
      }
    }
  };

  _onLoadStart = () => {
    console.log(`ON LOAD START`);
  };

  _onLoad = status => {
    console.log(`ON LOAD: ${JSON.stringify(status)}`);
  };

  _onError = error => {
    console.log(`ON ERROR: ${error}`);
  };

  _onStopPressed = () => {
    if (this.playbackInstance != null) {
      this.playbackInstance.stopAsync()
    }
  }

  _onPlayPausePressed = () => {
    if (this.playbackInstance !== null) {
      if (this.state.isPlaying) {
        this.playbackInstance.pauseAsync()
      } else {
        this.playbackInstance.playAsync();
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this._playPausePressed}
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
