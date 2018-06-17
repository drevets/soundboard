'use strict';
import React from 'react'
import {PanResponder, StyleSheet, View, Image, Text} from 'react-native'

const happy = 'https://s3.us-east-2.amazonaws.com/soundandcolor/happy.png'
const poo = 'https://s3.us-east-2.amazonaws.com/soundandcolor/poo.png'

const CIRCLE_SIZE = 80;

export default class MovingPicture extends React.Component {
  constructor(){
    super();
    this._panResponder = {}
    this._previousLeft = 0
    this._previousTop = 0
    this._circleStyles = {}
    this.circle = (null: ?{setNativeProps(props: Object): void})
    this.state = {

    }
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
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        backgroundColor: 'green'
      }
    }
  }

  componentDidMount = () => {
    this._updateNativeStyles()
  }

  _highlight = () => {
    this._circleStyles.style.backgroundColor = 'blue';
    this._updateNativeStyles();
  }

  _unHighlight = () => {
    this._circleStyles.style.backgroundColor = 'green';
    this._updateNativeStyles();
  }

  _updateNativeStyles = () => {
    this.circle && this.circle.setNativeProps(this._circleStyles)
  }

  _handleStartShouldSetPanResponder = (event, gestureState) => true

  _handleMoveShouldSetPanResponder = (event, gestureState) => true

  _handlePanResponderGrant = (event, gestureState) => {
    this._highlight();
    this._circleStyles.style.left = gestureState.x0;
    this._circleStyles.style.top = gestureState.y0;
    this._previousLeft = gestureState.x0;
    this._previousTop = gestureState.y0;
    this._updateNativeStyles();
  }

  _handlePanResponderMove = (event, gestureState) => {
    this._highlight();
    this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this._circleStyles.style.top = this._previousTop + gestureState.dy
    this._updateNativeStyles();
  }

  _handlePanResponderEnd = (eecent, gestureState) => {
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  }

  render(){
    return (
      <View style={styles.container}
      {...this._panResponder.panHandlers}>
        <Text>Example 5 is rendering!</Text>
        <View ref={circle => {
          this.circle = circle
        }} style={styles.circle}
        {...this._panResponder.panHandlers}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  container: {
    flex: 1,
    paddingTop: 64,
  },
});
