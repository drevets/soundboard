import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Emily',
      showName: true,
      message: this.props.message
    }
  }

  static defaultProps = {
    message: 'Hi There'
  }

  render() {
    let name = this.state.showName ? this.state.name : 'No name'

    return (
      <View style={styles.container}>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
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
