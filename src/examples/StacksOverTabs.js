import React from 'react';
import { Button, ScrollView } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';
import SampleText from './SampleText';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
      title="Open profile screen"
    />
    <Button
      onPress={() => navigation.navigate('NotifSettings')}
      title="Open notifications screen"
    />
    <Button
      onPress={() => navigation.navigate('SettingsTab')}
      title="Go to settings tab"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const MyNotificationsSettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);

const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Settings Screen" navigation={navigation} />
);

////////////////////////////////////////////////////////////////
// Configuration for Tab Bar
////////////////////////////////////////////////////////////////
const TabNavigatorRoute = {
  Home: {
    icon: 'ios-home',
    screen: MyHomeScreen,
  },
  Setting: {
    icon: 'ios-settings',
    screen: MySettingsScreen,
  },
  Face: {
    icon: 'ios-game-controller-b',
    screen: MySettingsScreen,
  },
  Good: {
    icon: 'ios-football',
    screen: MySettingsScreen,
  }
};

const TabNavigatorConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
};

////////////////////////////////////////////////////////////////
// END of Configuration for Tab Bar
////////////////////////////////////////////////////////////////

function generateTabRoute () {
  var obj = {};
  Object.keys(TabNavigatorRoute).forEach(function(key) {
    var item = TabNavigatorRoute[key];
    var objItem = {
      key: key,
      screen: item.screen,
      path: '/' + key,
      navigationOptions: {
        title: key,
        tabBarLabel: key,
        icon: item.icon,
        tabBarIcon: ({tintColor, focused}) => (<Ionicons name={item.icon} size={26} style={{color: tintColor}}/>),
      },
    }
    obj[key] = objItem;
  });
  return obj;
}
const TabNav = TabNavigator(generateTabRoute () ,TabNavigatorConfig);





const StacksOverTabs = StackNavigator({
  Root: {
    screen: TabNav,
  },
  NotifSettings: {
    screen: MyNotificationsSettingsScreen,
    navigationOptions: {
      title: 'Notifications',
    },
  },
  Profile: {
    screen: MyProfileScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.name}'s Profile!`;
    },
  },
});

export default StacksOverTabs;
