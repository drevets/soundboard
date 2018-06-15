import React, { Component } from 'react';
import { StyleSheet, View, PanResponder, Button, Animated, Text } from 'react-native';

export default class Responders extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  onPress = (evt) =>{
    console.log('button pressed')
  }

  render(){
    return (
      <View style={styles.container}>
      <View
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={() => console.log('now responding')}
        onResponderMove={(evt) => console.log('event', evt)}
        onResponderRelease={() => console.log('no longer responding')}
        onResponderTerminationRequest={() => true}
        onResponderTerminate={() => console.log('I was responding, now I am not')}
      >
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
