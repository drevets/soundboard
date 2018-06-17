import React from 'react';
import { StyleSheet, Text, View, Animated, Image, Easing } from 'react-native';

export default class AnimatedImages2 extends React.Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(0.3)
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 100 }} onPress={this.spring.bind(this)}>
          Spring
        </Text>
        <Animated.Image
          style={{
            width: 50,
            height: 50,
            transform: [{ scale: this.springValue }],
          }}
          source={{
            uri:
            'https://s3.us-east-2.amazonaws.com/soundandcolor/poo.png',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
