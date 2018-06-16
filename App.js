import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {SoundBoardMain} from './app/main'
import {SoundBoardFast} from './app/main'
import {SoundBoardFaster} from './app/main'
import {MakeASimpleSound} from './app/sound'
import {PanResponderExample2} from './app/touches'

export default class App extends React.Component {
  render() {
    return <PanResponderExample2/>;
  }
}
