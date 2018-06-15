import React from 'react';
import { PanResponder, StyleSheet, View, Text } from 'react-native';

const CIRCLE_SIZE = 80;

export default class PanResponderExample extends React.Component {
  constructor() {
    super();
    this.state = {
      _panResponder: {},
      _previousLeft: 0,
      _previousTop: 0,
      _circleStyles: {},
      // circle: (null ? ?{setNativeProps(props: Object): void}) what is this code doing?
    };
  }

  UNSAFE_componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
    this.state._previousLeft = 20;
    this.state._previousTop = 84;
    this.state._circleStyles = {
      style: {
        left: this.state._previousLeft,
        top: this.state._previousTop,
        backgroundColor: 'green',
      },
    };
  }

  componentDidMount() {
    this._updateNativeStyles();
  }

  _highlight() {
    this.state._circleStyles.style.backgroundColor = 'blue';
    this._updateNativeStyles();
  }
  _unHighlight () {
    this.state._circleStyles.style.backgroundColor = 'green';
    this._updateNativeStyles();
  }
  _updateNativeStyles () {
    this.circle && this.circle.setNativeProps(this.state._circleStyles);
  }

  _handleStartShouldSetPanResponder(e={}, gestureState={}, boolean) {
    // Should we become active when the user presses down on the circle?
    return true;
  }
  _handleMoveShouldSetPanResponder(e={}, gestureState={}, boolean) {
    // Should we become active when the user moves a touch over the circle?
    return true
  }

  _handlePanResponderGrant(e, gestureState) {
    this._highlight();
  }
  _handlePanResponderMove(e, gestureState) {
    this.state._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this.state._circleStyles.style.top = this._previousTop + gestureState.dy;
    this._updateNativeStyles();
  }
  _handlePanResponderEnd(e, gestureState) {
    this._unHighlight();
    this.state._previousLeft += gestureState.dx;
    this.state._previousTop += gestureState.dy;
  }


  render() {
    return (
      <View style={styles.container}>
        <View
          ref={circle => {
            this.circle = circle;
          }}
          style={styles.circle}
          {...this.state._panResponder.panHandlers}
        />
      </View>
    );
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

module.exports = PanResponderExample;
