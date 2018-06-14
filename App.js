import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'

import {Component5} from './app/components'
import {Component6} from './app/components'

export default class App extends React.Component {

  renderScene(route, navigator) {
    switch(route.id){
      case 'component4':
        return (<Component5 navigator={navigator} title='component5'/>)
      case 'component6':
        return (<Component6 user={route.user} navigator={navigator} title='component6'/>)
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'component5'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
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
