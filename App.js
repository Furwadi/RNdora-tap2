/*This is an example of React Native App Intro Slider */
import React from 'react';
//import react in project 

import { StyleSheet, View, Text } from 'react-native';
//import all the required component

import AppNavigator from './screens/AppNavigator'

import AppIntroSlider from 'react-native-app-intro-slider';
//import AppIntroSlider to use it


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <AppNavigator/>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          //comming from the JsonArray below
          onDone={this._onDone}
          //Handler for the done On last slide
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}


const styles = StyleSheet.create({
  image1: {
    width: 250,
    height: 360,
  },
  image2: {
    width: 350,
    height: 250,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 16,
  },
});

const slides = [
  {
    key: 's1',
    text: "LET'S GO PLAY WITH DORAEMON",
    title: 'Dora Tap Tap',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: require('./images/Doraemon.png'),
    imageStyle: styles.image1,
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'REWARD',
    titleStyle: styles.title,
    text: 'GO TAP TAP and GET CRYPTO',
    textStyle: styles.text,
    image: require('./images/crypto.jpg'),
    imageStyle: styles.image2,
    backgroundColor: '#febe29',
  }
];