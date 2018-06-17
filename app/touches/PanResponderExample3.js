'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var ReactNative = require('react-native');
var {PanResponder, StyleSheet, View} = ReactNative;

const happy = 'https://s3.us-east-2.amazonaws.com/soundandcolor/happy.png'

var CIRCLE_SIZE = 80;

var PanResponderExample = createReactClass({
  displayName: 'PanResponderExample',

  statics: {
    title: 'PanResponder Sample',
    description:
      'Shows the use of PanResponder to provide basic gesture handling.',
  },

  _panResponder: {},
  _previousLeft: 0,
  _previousTop: 0,
  _circleStyles: {},
  circle: (null: ?{setNativeProps(props: Object): void}),

  UNSAFE_componentWillMount: function() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
    this._previousLeft = 20;
    this._previousTop = 84;
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        backgroundColor: 'green',
      },
    };
  },

  componentDidMount: function() {
    this._updateNativeStyles();
  },

  render: function() {
    return (
      <View style={styles.container} {...this._panResponder.panHandlers}>
        <View
          ref={circle => {
            this.circle = circle;
          }}
          style={styles.circle}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  },

  _highlight: function() {
    this._circleStyles.style.backgroundColor = 'blue';
    this._updateNativeStyles();
  },

  _unHighlight: function() {
    this._circleStyles.style.backgroundColor = 'green';
    this._updateNativeStyles();
  },

  _updateNativeStyles: function() {
    this.circle && this.circle.setNativeProps(this._circleStyles);
  },

  _handleStartShouldSetPanResponder: function(
    e: Object,
    gestureState: Object,
  ): boolean {
    // Should we become active when the user presses down on the circle?
    return true;
  },

  _handleMoveShouldSetPanResponder: function(
    e: Object,
    gestureState: Object,
  ): boolean {
    // Should we become active when the user moves a touch over the circle?
    return true;
  },

  _handlePanResponderGrant: function(e: Object, gestureState: Object) {
    this._highlight();
    this._circleStyles.style.left = gestureState.x0;
    this._circleStyles.style.top = gestureState.y0;
    this._previousLeft = gestureState.x0;
    this._previousTop = gestureState.y0;
    console.log('this.circleStyles in grant: this._circleStyles.style.left', this._circleStyles.style.left,
    'this._circleStyles.style.top', this._circleStyles.style.top)
    this._updateNativeStyles();
  },
  _handlePanResponderMove: function(e: Object, gestureState: Object) {
    console.log('gestureState in PanResponderMove', gestureState)
    this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this._circleStyles.style.top = this._previousTop + gestureState.dy;
    this._updateNativeStyles();
    console.log('this.circleStyles in respond: this._circleStyles.style.left', this._circleStyles.style.left,
    'this._circleStyles.style.top', this._circleStyles.style.top)
  },
  _handlePanResponderEnd: function(e: Object, gestureState: Object) {
    this._unHighlight();
    console.log('gestureState', gestureState)
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  },
});

var styles = StyleSheet.create({
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
