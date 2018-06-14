import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class MakeSound extends React.Component {
  constructor(props) {
    super(props);
  }

  makeSound = () => {
    console.log('Do you hear what I heard?')
  }

  render() {

    return (
      <View style={styles.container}>
        <Button
          onPress={this.makeSound}
          title='Make a Sound'
          color='#841584'
          accessibilityLabel='Make a Sound by pressing this purple button!'
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
