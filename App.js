import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {SoundBoardMain} from './app/main'
import {FartMode} from './app/main'
import {SoundBoardFaster} from './app/main'
import {SoundAndColor} from './app/main'
import {MakeASimpleSound} from './app/sound'
import {PanResponderExample2} from './app/touches'
import {PanResponderExample3} from './app/touches'
import {PanResponderExample4} from './app/touches'
import {PanResponderExample5} from './app/touches'
import {StaticImage} from './app/color'
import {MovingImage} from './app/color'
import {DraggingSoundAndColor} from './app/main'
import {AnimatedImages} from './app/color'
import {AnimatedImages2} from './app/color'
import {AnimatedFartMode} from './app/main'

export default class App extends React.Component {
  render() {
    return <SoundBoardMain />;
  }
}
