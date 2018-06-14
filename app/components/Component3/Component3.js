import React from 'react';
import { AppRegistry, TextInput, StyleSheet, Text, View, Switch} from 'react-native';

export default class Component3 extends React.Component {
  constructor(){
    super();
    this.state = {
      textValue:'Hello',
      switchValue: false
    }
  }

  onChangeText(value) {
    this.setState({
      textValue: value
    })
  }

  onSwitchChange(value){
    this.setState({
      switchValue: value
    })
  }

  onSubmit(){
    console.log('Input Submitted....')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Enter Text'
          value={this.state.textValue}
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
        />
        <Text>{this.state.textValue}</Text>
        <Switch
            value={this.state.switchValue}
            onValueChange={(value) => this.onSwitchChange(value)}
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
