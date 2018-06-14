import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Component6 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email
    }
  }

  onPress(){
    this.props.navigator.push({
      id: 'component5'
    })
  }

  render() {
    return (
      <View>
        <Text>{this.props.user.name}</Text>
        <Text>{this.props.user.email}</Text>
        <Button
          onPress={this.onPress.bind(this)}
          title="Go Back"
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
