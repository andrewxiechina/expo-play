import Exponent, { Asset, AppLoading } from 'expo';
import React, { Component } from 'react';
import { StatusBar, View, Text } from 'react-native';
import Buttons from './src/components/button/BlockButton';
import colors from 'HSColors';

class App extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Buttons />
      </View>
    )
  }
}

Exponent.registerRootComponent(App);
