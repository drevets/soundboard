import React, { Component } from 'react';
import { StyleSheet, View, PanResponder, Button, Animated, Text } from 'react-native';

export default class MyOwnPanResponse extends Component {
  constructor() {
    super();
    this.state = {
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
        console.log('panResponderGrant', evt, gestureState)
      },

      onPanResponderMove: (evt, gestureState) => {
        //most recent move distance is gestureState.move{X,Y}
        //accumulated gesture distance since becoming responder is gestureState.d{x,y}
        console.log('panResponderMove', evt, gestureState)
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        //user has released all touches while this view is the responder, means gesture has succeeeded
        console.log('panResponderRelease', evt, gestureState)
      },
      onPanResponderTerminate: (evt, gestureState) => {
        //another component has become the responder, so this gesture should be cancelled
        console.log('panResponderTerminate', evt, gestureState)
      }
    })
  }

  onPress = (evt) =>{
    console.log('button pressed')
  }

  render(){
    return (
      <View {...this._panResponder.panHandlers} style={styles.container}>
      <View>
      <Button
        onPress={this.onPress}
        title="Press Me"
        color="#841584"
        accessibilityLabel="Make a Sound by pressing this purple button!"
      />
      </View>
      <View>
       <Button
        onPress={this.onPress}
        title="Me Too"
        color="#841584"
        accessibilityLabel="Make a Sound by pressing this purple button!"
      />
      </View>
      <View>
       <Button
        onPress={this.onPress}
        title="And Me"
        color="#841584"
        accessibilityLabel="Make a Sound by pressing this purple button!"
      />
      </View>
    </View>
    )
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
