// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight,
//   Button,
//   Dimensions,
//   PanResponder,
// } from 'react-native';
// import { Audio } from 'expo';

// //this is probably different across devices

// //should put some margins on this so people won't aggravate the edges of their phones
// const sound =
//   'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3';

// const soundObject = new Audio.Sound();

// export default class SoundBox extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isPlaying: false,
//       soundToPlay: {},
//     };
//   }

//   componentWillMount() {
//     this._panResponder = PanResponder.create({
//       onStartShouldSetPanResponder: (evt, gestureState) => true,
//       onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
//       onMoveShouldSetPanResponder: (evt, gestureState) => true,
//       onMoveShouldSetPanResponerCapture: (evt, gestureState) => true,
//       onPanResponderGrant: this._handlePanResponderGrant,
//       onPanResponderMove: this._handlePanResponderMove,
//       onPanResponderTerminationRequest: this._handleOnPanResponderTerminationRequest,
//       onPanResponderRelease: this._handleOnPanResponderRelease,
//       onPanResponderTerminate: this._handleOnPanResponderTerminate
//     });
//   }

//   _handleOnPanResponderTerminate = (evt, gestureState) => {
//     //another component has become the responder, so this gesture should be cancelled
//     console.log(
//       'panResponderTerminate event:',
//       evt,
//       'gestureState',
//       gestureState
//     );
//   }

//   _handleOnPanResponderRelease  = (evt, gestureState) => {
//     //user has released all touches while this view is the responder, means gesture has succeeeded
//     console.log(
//       'panResponderRelease event:',
//       evt,
//       'gestureState',
//       gestureState
//     )
//   }

//   _handlePanResponderGrant = (evt, gestureState) => {
//     // gesture has started. Give user visual feedback. gestureState.d{x,y} set to 0 now
//     console.log(
//       'panResponderGrant event:',
//       evt,
//       'gestureState',
//       gestureState,
//       'the key',
//       this.props.index
//     );
//     const ox = gestureState.x0
//     const oy = gestureState.y0
//     console.log('x', ox, 'y', oy)
//     console.log('It is I, box number:', this.props.index)
//   };

//   _handlePanResponderMove = (evt, gestureState) => {
//       //most recent move distance is gestureState.move{X,Y}
//       //accumulated gesture distance since becoming responder is gestureState.d{x,y}
//       const moveX = gestureState.moveX
//       const moveY = gestureState.moveY
//       console.log('moveX', moveX, 'moveY', moveY)
//       console.log(
//         'panResponderMove event:',
//         evt,
//         'gestureState',
//         gestureState
//       );
//   }

//   _handleOnPanResponderTerminationRequest = (evt, gestureState) => {
//     console.log(
//       'panResponderTerminationRequest event:',
//       evt,
//       'gestureState',
//       gestureState
//     );
//     return true;
//   }

//   componentDidMount() {
//     this.setState({ soundToPlay: soundObject });
//   }

//   playSound = () => {
//     console.log('sound playing (or stopping)');
//     console.log('this.state.isPlaying', this.state.isPlaying);
//     if (!this.state.isPlaying) {
//       this.setState({ isPlaying: true });
//       this.play();
//     } else {
//       this.setState({ isPlaying: false });
//       this.stop();
//     }
//   };

//   play = async soundSource => {
//     try {
//       await soundObject.loadAsync(require('/Users/Drevets/FullStack/senior-phase/SoundBoard/media/4__anton__glass/15__anton__glass-a-ff.wav'));
//       // await soundObject.loadAsync({
//       //   uri:
//       //     'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
//       // });
//       await soundObject.loadAsync(require(''));
//       await soundObject.playAsync();
//     } catch (error) {
//       console.log('error happened', error);
//     }
//   };

//   stop = async () => {
//     await soundObject.stopAsync();
//     await soundObject.unloadAsync();
//     await soundObject.loadAsync();
//   };

//   render() {
//     return (
//       <View {...this._panResponder.panHandlers} style={styles.box}>
//         <Text>box</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   box: {
//     padding: 4,
//     borderWidth: 0.5,
//   },
// });
