import Exponent, { Asset, AppLoading } from 'expo';
import React, { Component } from 'react';
import { StatusBar, View, Text } from 'react-native';
import Test from './src/examples/CardWithImage';
import colors from 'HSColors';

class App extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Test />
      </View>
    )
  }
}

Exponent.registerRootComponent(App);
