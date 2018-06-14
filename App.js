import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import {MakeASimpleSound} from './app/sound'

export default class App extends React.Component {
  render() {
    return <MakeASimpleSound />;
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
