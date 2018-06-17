'use strict';
import React from 'react'
import {PanResponder, StyleSheet, View, Image, Text} from 'react-native'

const happy = 'https://s3.us-east-2.amazonaws.com/soundandcolor/happy.png'
const poo = 'https://s3.us-east-2.amazonaws.com/soundandcolor/poo.png'

const transparent = 'transparent'

export default class MovingPicture extends React.Component {
  constructor(){
    super();
    this._panResponder = {}
    this._previousLeft = 0
    this._previousTop = 0
  }

  componentWillMount = () => {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd
    });
    this._previousLeft = 20;
    this._previousTop = 84;
    this._imageStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        height: 60,
        width: 60
      }
    }
  }

  componentDidMount = () => {
    this._updateNativeStyles()
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

  _handleStartShouldSetPanResponder = (event, gestureState) => true

  _handleMoveShouldSetPanResponder = (event, gestureState) => true

  _handlePanResponderGrant = (event, gestureState) => {
    this._highlight();
    this._imageStyles.style.left = gestureState.x0
    this._imageStyles.style.top = gestureState.y0
    this._previousLeft = gestureState.x0;
    this._previousTop = gestureState.y0;
    this._updateNativeStyles();
  }

  _handlePanResponderMove = (event, gestureState) => {
    this._highlight();
    this._imageStyles.style.left = this._previousLeft + gestureState.dx;
    this._imageStyles.style.top = this._previousTop + gestureState.dy
    this._updateNativeStyles();
  }

  _handlePanResponderEnd = (eecent, gestureState) => {
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  }

  render(){
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
