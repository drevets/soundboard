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
import {glassSounds, yamaha} from './data'

//piano bang
const soundOnDeck = 'https://s3.us-east-2.amazonaws.com/soundandcolor/2489__jobro__piano-ff/39148__jobro__piano-ff-001.wav'

//soft sound
const sound = 'https://s3.us-east-2.amazonaws.com/soundandcolor/17246__modularsamples__arturia-microbrute-short-and-sensetive/281693__modularsamples__arturia-microbrute-short-and-sensetive-c2-36c1-yafk.aiff'

const soundOption = 'https://s3.us-east-2.amazonaws.com/soundandcolor/12718__aikighost__abstract-percussion-loops/198996__aikighost__elctroid-125bpm01-loopcache-abstractpercussion.wav'


export default class SoundBoardMain extends React.Component {
  constructor() {
    super();
    this.state = {
      soundObject: {},
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

      //creates a new sound object and then sets it on state, then loads it with sound
    async componentDidMount() {
      const soundObject = new Audio.Sound();
      this.setState({
        soundObject: soundObject}, () => {
        this.loadSource(this.randomSound(yamaha))
      })
    }

      randomSound = (sounds) => {
        const soundsLength = sounds.length - 1;
        const randomNumber = Math.floor(Math.random() * soundsLength)
        return sounds[randomNumber]
      }

      loadSource = async (sound) => {
        console.log('loading sources...')
        try {
          await this.state.soundObject.loadAsync({
            uri: sound
          });
        } catch (err) {
          console.log('something went wrong while loading sources')
        }
      }

    play = async () => {
      try {
        await this.state.soundObject.playAsync();
        await this.reload(this.randomSound(yamaha))
        console.log('playing sound; the current state is: ', this.state)
      } catch (error) {
        console.log('error happened while playing song', error);
      }
    };

    reload = async (newSoundSource) => {
      console.log('reloading sound...')
      const newSound = await new Audio.Sound()
      await newSound.loadAsync({
        uri: newSoundSource
      })
      this.setState({soundObject: newSound})
    }


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
