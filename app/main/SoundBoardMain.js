import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  PanResponder,
} from 'react-native';
import { Audio } from 'expo';
import {glassSounds, yamaha} from './data'

//most recent version is from sound and color file

export default class SoundBoardMain extends React.Component {
  constructor() {
    super();
    this._panResponder = {}
    this._previousLeft = 20
    this._previousTop = 84
    this.state = {
      sounds: [],
      soundObject: {},
      previousSound: {},
      count: 0
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
          onPanResponderRelease: this._handleOnPanResponderEnd,
          onPanResponderTerminate: this._handleOnPanResponderEnd
        });
        this._imageStyles = {
          style: {
            left: this._previousLeft,
            top: this._previousTop,
            height: 60,
            width: 60
          }
        }
      }

      _handlePanResponderGrant = (evt, gestureState) => {
        //sound
        this.play();

        //color
        this._highlight();
        this._imageStyles.style.left = gestureState.x0
        this._imageStyles.style.top = gestureState.y0
        this._previousLeft = gestureState.x0;
        this._previousTop = gestureState.y0;
        this._updateNativeStyles();
      };

      _handlePanResponderMove = (evt, gestureState) => {
        //color
          this._highlight();
          this._imageStyles.style.left = this._previousLeft + gestureState.dx;
          this._imageStyles.style.top = this._previousTop + gestureState.dy
          this._updateNativeStyles();
      }

      _handleOnPanResponderEnd = (evt, gestureState) => {
        this._unHighlight();
        this._previousLeft += gestureState.dx;
        this._previousTop += gestureState.dy;
      }

    _highlight = () => {
      this._updateNativeStyles();
    }

    _unHighlight = () => {
      this._updateNativeStyles();
    }

    setNativeProps = (nativeProps) => {
      this._root.setNativeProps(nativeProps)
    }

    _updateNativeStyles = () => {
      this.setNativeProps(this._imageStyles)
    }

    async componentDidMount() {
      console.log('component is mounting...you will need to wait about 30 seconds')
      //color
      this._updateNativeStyles()

      //sound
      await this.makeSounds()
      this.setState({soundObject: this.state.sounds[0]})
    }

    makeSounds = async () => {
      const audio0 = new Audio.Sound()
      await audio0.loadAsync({
        uri: yamaha[0]
      })
      const audio1 = new Audio.Sound()
      await audio1.loadAsync({
        uri: yamaha[1]
      })
      const audio2 = new Audio.Sound()
      await audio2.loadAsync({
        uri: yamaha[2]
      })
      const audio3 = new Audio.Sound()
      await audio3.loadAsync({
        uri: yamaha[3]
      })
      const audio4 = new Audio.Sound()
      await audio4.loadAsync({
        uri: yamaha[4]
      })
      const audio5 = new Audio.Sound()
      await audio5.loadAsync({
        uri: yamaha[5]
      })
      const audio6 = new Audio.Sound()
      await audio6.loadAsync({
        uri: yamaha[6]
      })
      const audio7 = new Audio.Sound()
      await audio7.loadAsync({
        uri: yamaha[7]
      })
      const audio8 = new Audio.Sound()
      await audio8.loadAsync({
        uri: yamaha[8]
      })
      const audio9 = new Audio.Sound()
      await audio9.loadAsync({
        uri: yamaha[9]
      })
      const audio10 = new Audio.Sound()
      await audio10.loadAsync({
        uri: yamaha[10]
      })
      const audio11 = new Audio.Sound()
      await audio11.loadAsync({
        uri: yamaha[11]
      })
      const audio12 = new Audio.Sound()
      await audio12.loadAsync({
        uri: yamaha[12]
      })
      const audio13 = new Audio.Sound()
      await audio13.loadAsync({
        uri: yamaha[13]
      })
      const audio14 = new Audio.Sound()
      await audio14.loadAsync({
        uri: yamaha[14]
      })
      const audio15 = new Audio.Sound()
      await audio15.loadAsync({
        uri: yamaha[15]
      })
      const audio16 = new Audio.Sound()
      await audio16.loadAsync({
        uri: yamaha[16]
      })
      const audio17 = new Audio.Sound()
      await audio17.loadAsync({
        uri: yamaha[17]
      })
      const audio18 = new Audio.Sound()
      await audio18.loadAsync({
        uri: yamaha[18]
      })
      const audio19 = new Audio.Sound()
      await audio19.loadAsync({
        uri: yamaha[19]
      })
      const audio20 = new Audio.Sound()
      await audio20.loadAsync({
        uri: yamaha[20]
      })
      const audio21 = new Audio.Sound()
      await audio21.loadAsync({
        uri: yamaha[21]
      })
      const audio22 = new Audio.Sound()
      await audio22.loadAsync({
        uri: yamaha[22]
      })
      const audio23 = new Audio.Sound()
      await audio23.loadAsync({
        uri: yamaha[23]
      })
      const audio24 = new Audio.Sound()
      await audio24.loadAsync({
        uri: yamaha[24]
      })
      const audio25 = new Audio.Sound()
      await audio25.loadAsync({
        uri: yamaha[25]
      })
      const audio26 = new Audio.Sound()
      await audio26.loadAsync({
        uri: yamaha[26]
      })
      const audio27 = new Audio.Sound()
      await audio27.loadAsync({
        uri: yamaha[27]
      })
      const audio28 = new Audio.Sound()
      await audio28.loadAsync({
        uri: yamaha[28]
      })
      const audio29 = new Audio.Sound()
      await audio29.loadAsync({
        uri: yamaha[29]
      })
      const audio30 = new Audio.Sound()
      await audio30.loadAsync({
        uri: yamaha[30]
      })
      const audio31 = new Audio.Sound()
      await audio31.loadAsync({
        uri: yamaha[31]
      })
      const audio32 = new Audio.Sound()
      await audio32.loadAsync({
        uri: yamaha[32]
      })
      const audio33 = new Audio.Sound()
      await audio33.loadAsync({
        uri: yamaha[33]
      })
      const audio34 = new Audio.Sound()
      await audio34.loadAsync({
        uri: yamaha[34]
      })
      const audio35 = new Audio.Sound()
      await audio35.loadAsync({
        uri: yamaha[35]
      })
      const audios = [audio0, audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10, audio11,
        audio2, audio13, audio14, audio15, audio16, audio17, audio18, audio19, audio20, audio21, audio22, audio23, audio24, audio25, audio26, audio27, audio28, audio29, audio30, audio31, audio32, audio33, audio34, audio35]
      this.setState({
        sounds: audios
      }, () => {
        console.log('put sounds on state', this.state.sounds)
      })
    }

    //eventually would like to use this again if I can figure out how to make reload faster and/or get more sounds on state
    // randomSound = (sounds) => {
    //     const soundsLength = sounds.length - 1;
    //     const randomNumber = Math.floor(Math.random() * soundsLength)
    //     return sounds[randomNumber]
    //   }

    play = async () => {
      console.log('playing sound...')
      try {
        await this.state.soundObject.playAsync();
        this.state.count ++
        if (this.state.count < this.state.sounds.length) this.reload(this.state.sounds[this.state.count])
      } catch (error) {
        console.log('error happened while playing song', error);
      }
    };

    reload = (newSound) => {
      console.log('reloading sound...')
      this.setState({soundObject: newSound})
    }

  render() {
    return (
      <View style={styles.container}      {...this._panResponder.panHandlers}
      >
        <View ref={component => this._root = component} {...this.props}
        {...this._panResponder.panHandlers}
        >
        <Image
          source={{
            uri: 'https://s3.us-east-2.amazonaws.com/soundandcolor/happy.png',
          }}
          style={{ width: this._imageStyles.style.width, height: this._imageStyles.style.height }}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

