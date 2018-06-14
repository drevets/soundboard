// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// Sound.setCategory('Playback');

// export default class MakeAnotherSound extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       playing: false
//     }
//   }

//   componentDidMount() {
//     const whoosh = new Sound('https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3', Sound.MAIN_BUNDLE, error => {
//       if (error) {
//         console.log('failed to load the sound', error);
//         return;
//       }
//       console.log(
//         'duration in seconds: ' +
//           whoosh.getDuration() +
//           'number of channels: ' +
//           whoosh.getNumberOfChannels()
//       );
//     });
//   }

//   makeSound = () => {
//     if (!this.state.playing) {
//       this.setState({playing: true})
//       whoosh.play(success => {
//         if (success) console.log('successfully finished playing!');
//         else {
//           console.log('playback failed due to audio decoding errors');
//           whoosh.reset();
//         }
//       });
//     } else {
//       this.setState({playing: false})
//       whoosh.stop(() => {
//         whoosh.play()
//       })
//     }
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Button
//           onPress={this.makeSound}
//           title="Make a Sound"
//           color="#841584"
//           accessibilityLabel="Make a Sound by pressing this purple button!"
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
