import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Dimensions,
  PanResponder
} from 'react-native';
import TouchBox from './TouchBox';

export default class TouchMain extends React.Component {
  constructor() {
    super();
    this.state = {
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
    console.log(
      'panResponderTerminate event:',
      evt,
      'gestureState',
      gestureState
    );
  }

  _handleOnPanResponderRelease  = (evt, gestureState) => {
    //user has released all touches while this view is the responder, means gesture has succeeeded
    console.log(
      'panResponderRelease event:',
      evt,
      'gestureState',
      gestureState
    )
  }

  _handlePanResponderGrant = (evt, gestureState) => {
    // gesture has started. Give user visual feedback. gestureState.d{x,y} set to 0 now

    console.log(
      'panResponderGrant event:',
      evt,
      'gestureState',
      gestureState
    );
  };

  _handlePanResponderMove = (evt, gestureState) => {
      //most recent move distance is gestureState.move{X,Y}
      //accumulated gesture distance since becoming responder is gestureState.d{x,y}
      console.log(
        'panResponderMove event:',
        evt,
        'gestureState',
        gestureState
      );
  }

  _handleOnPanResponderTerminationRequest = (evt, gestureState) => {
    console.log(
      'panResponderTerminationRequest event:',
      evt,
      'gestureState',
      gestureState
    );
    return true;
  }

  componentDidMount() {
    const { height, width } = Dimensions.get('window');
    console.log('app renrdered on device: height and width', height, width);
  }

  render() {
    return (
      <View {...this._panResponder.panHandlers} style={styles.container}>
        <Text>Touch the outtermost Box</Text>
        <TouchBox />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 2,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
});
