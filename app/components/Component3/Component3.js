import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Component1} from './app/components'
import {Component2} from './app/components'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Component2 />
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
