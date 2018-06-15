import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Dimensions,
  PanResponder,
} from 'react-native';
import { Audio } from 'expo';

const soundOnDeck = 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3'

const sound = 'https://s3.us-east-2.amazonaws.com/soundandcolor/17246__modularsamples__arturia-microbrute-short-and-sensetive/281693__modularsamples__arturia-microbrute-short-and-sensetive-c2-36c1-yafk.aiff'


export default class SoundBoardMain extends React.Component {
  constructor() {
    super();
    this.soundObject = new Audio.Sound();
    this.soundObjectOnDeck = new Audio.Sound();
    this.state = {
      playing: false,
      isTheSoundOnDeck: false,
    };
  }

  componentWillMount() {
        this._panResponder = PanResponder.create({
          onStartShouldSetPanResponder: (evt, gestureState) => true,
          onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
          onMoveShouldSetPanResponder: (evt, gestureState) => true,
          onMoveShouldSetPanResponerCapture: (evt, gestureState) => true,
          onPanResponderGrant: this._handlePanResponderGrant,
          onPanResponderMove: this._handlePanResponderMove,
          onPanResponderTerminationRequest: this._handleOnPanResponderTerminationRequest,
          onPanResponderRelease: this._handleOnPanResponderRelease,
          onPanResponderTerminate: this._handleOnPanResponderTerminate
        });
      }

      _handleOnPanResponderTerminate = (evt, gestureState) => {
        //another component has become the responder, so this gesture should be cancelled
      }

      _handleOnPanResponderRelease  = (evt, gestureState) => {
        //user has released all touches while this view is the responder, means gesture has succeeeded
        console.log('panResponderRelease event:', evt, 'gestureState', gestureState )
      }

      _handlePanResponderGrant = (evt, gestureState) => {
        // gesture has started. Give user visual feedback. gestureState.d{x,y} set to 0 now
        this.play();

        console.log('panResponderGrant event:', evt, 'gestureState', gestureState, );
        const ox = gestureState.x0
        const oy = gestureState.y0
        console.log('x', ox, 'y', oy)
      };

      _handlePanResponderMove = (evt, gestureState) => {
          //most recent move distance is gestureState.move{X,Y}
          //accumulated gesture distance since becoming responder is gestureState.d{x,y}
          const moveX = gestureState.moveX
          const moveY = gestureState.moveY
          console.log('moveX', moveX, 'moveY', moveY)
          console.log('panResponderMove event:', evt, 'gestureState', gestureState );
      }

      _handleOnPanResponderTerminationRequest = (evt, gestureState) => {
        return true;
      }

async componentDidMount() {
    const { height, width } = Dimensions.get('window');
    console.log('app rendered on device: height and width', height, width);
    this.loadSource(sound, soundOnDeck)
  }

  loadSource = async (sound, soundOnDeck) => {
    console.log('loading sources...')
    try {
      await this.soundObject.loadAsync({
        uri: sound
      });
      await this.soundObjectOnDeck.loadAsync({
        uri: soundOnDeck
      })
    } catch (err) {
      console.log('something went wrong while loading sources')
    }
  }

  //find out which sound to play
  //a little confused about my logic here
  whichSound = () => {
    console.log('determining which sound to play')
    let currentSound = this.soundObject;
    let prevSound = this.soundObjectOnDeck
    if (this.state.isTheSoundonDeck) {
      currentSound = this.soundObjectOnDeck
      prevSound = this.soundObject
      this.setState({isTheSoundOnDeck: false})
    } else this.setState({isTheSoundOnDeck: true})
    console.log('currentSound', currentSound, 'prevSound', prevSound)
    return [currentSound, prevSound]
  }

  //is a sound playing right now?
  isPlaying = () => {
    console.log('checking to see if a sound is playing')
    if (this.state.playing) return true
    else this.setState({playing: true})
    return false
  }

  //play the right sound and reload the former sound
  play = async () => {
    console.log('attempting to play sound')
    const [currentSound, prevSound] = this.whichSound()
    const soundPlaying = this.isPlaying()
    try {
      console.log('checking to see if a sound is playing')
      if (soundPlaying) {
        await this.stop(prevSound)
        await this.reload(prevSound, soundOnDeck)
      }
      await currentSound.playAsync();
      await this.reload(currentSound, soundOnDeck)
      console.log('playing sound')
    } catch (error) {
      console.log('error happened while playing song', error);
    }
  };

  //reloads sound object with new sound
  reload = async (soundObject, newSound) => {
    console.log('reloading sound...')
    await soundObject.unloadAsync()
    await soundObject.loadAsync({
      uri: newSound
    })
  }

  //stops the sound
  stop = async (prevSound) => {
    console.log('attempting to stop sound')
    await prevSound.stopAsync();
    await prevSound.unloadAsync()
  };


  render() {
    return (
      <View {...this._panResponder.panHandlers} style={styles.container}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 2,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  text: {
    padding: 50,
  },
});
