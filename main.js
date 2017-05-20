import Exponent, { Asset, AppLoading } from 'expo';
import React, { Component } from 'react';
import { StatusBar, View, Text } from 'react-native';
import RoundButton from './src/components/button/RoundButton';
import colors from 'HSColors';

class App extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <RoundButton />
      </View>
    )
  }
}

Exponent.registerRootComponent(App);
