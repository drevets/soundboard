import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Dimensions,
} from 'react-native';
import { Asset, Audio } from 'expo';

const array = Array(10);

export default class Checkerboard extends React.Component {
  constructor() {
    super();
    this.state = {
      boxes: array,
    };
  }

  componentDidMount() {
    const { height, width } = Dimensions.get('window');
    console.log('height and width', height, width);
  }

  // boxMapping() {
  //   return this.state.boxes.map(box => {
  //     return (
  //       <View styles={styles.container}>
  //         <Text>Hello World</Text>
  //       </View>
  //     )
  //   })
  // }

  render() {
    return (
      <View>
        {this.boxMapping()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 2,
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
});
