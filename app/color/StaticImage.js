import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

const poo = 'https://s3.us-east-2.amazonaws.com/soundandcolor/poo.png'

export default class StaticImage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://s3.us-east-2.amazonaws.com/soundandcolor/happy.png',
          }}
          style={{ width: 50, height: 50 }}
        />
        <Image
          source={{
            uri: 'https://s3.us-east-2.amazonaws.com/soundandcolor/poo.png',
          }}
          style={{ width: 50, height: 50 }}
        />
      </View>
    );
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
