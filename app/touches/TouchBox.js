import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  PanResponder
} from 'react-native';
import TouchInnerBox from './TouchInnerBox'


export default class TouchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      selectedColor: '#800000'
    };
  }

  componentWillMount(){
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponerCapture: (evt, gestureState) => false,

      onPanResponderGrant: (evt, gestureState) => {
        //gesture has started. Give user visual feedback. gestureState.d{x,y} set to 0 now
        this.setState({selected: true})
        console.log('panResponderGrant event:', evt, 'gestureState', gestureState)
      },

      onPanResponderMove: (evt, gestureState) => {
        //most recent move distance is gestureState.move{X,Y}
        //accumulated gesture distance since becoming responder is gestureState.d{x,y}
        console.log('panResponderGrant event:', evt, 'gestureState', gestureState)
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        //user has released all touches while this view is the responder, means gesture has succeeeded
        console.log('panResponderGrant event:', evt, 'gestureState', gestureState)
      },
      onPanResponderTerminate: (evt, gestureState) => {
        //another component has become the responder, so this gesture should be cancelled
        this.setState({selected: false})
        console.log('panResponderGrant event:', evt, 'gestureState', gestureState)
      }
    })
  }

  componentDidMount() {
    const { height, width } = Dimensions.get('window');
    console.log('app rendered on device: height and width', height, width);
  }

  onPress(){
    console.log('hey! you pressed me!')
  }

  render() {
    return (
      <View {...this._panResponder.panHandlers} style={styles.container}>
        <Text>Touch the middlemost box</Text>
        <TouchInnerBox />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    borderWidth: 2,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  box: {
    padding: 4,
    borderWidth: .5
  },
  small: {
    height: 50,
    width: 50,
    borderWidth: 2
  }
});
