import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default class Component2 extends React.Component {
  onPress() {
    console.log('Area pressed');
  }

  onPress2(){
    console.log('Area 2 pressed')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.view1}
          onPress={this.onPress}
          underlayColor="blue"
        >
          <View>
            <Text>View 1</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity
        style={styles.view2}
        onPress={this.onPress2}
        >
          <View >
            <Text>View 2</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.view3}>
          <Text>View 3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  },
  view1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10,
  },
  view2: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,
  },
  view3: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
});
