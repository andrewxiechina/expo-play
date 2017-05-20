import React from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Form from './Form';

const SimpleTabs = TabNavigator(
  {
    Home: {
      screen: Form,
      path: '',
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='rowing' color={tintColor}/>
        ),
      },
    },
    People: {
      screen: Form,
      path: 'cart',
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='people' color={tintColor}/>
        ),
      },
    },
    Chat: {
      screen: Form,
      path: 'chat',
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='chat' color={tintColor}/>
        ),
      },
    },
    Settings: {
      screen: Form,
      path: 'settings',
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='menu' color={tintColor}/>
        ),
      },
    },
  },
  {

    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: '#666',
      showIcon: true,
    },
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default SimpleTabs;
