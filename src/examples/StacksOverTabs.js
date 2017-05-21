import React from 'react';
import { Button, ScrollView, View, Text, } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, TabView, TabBarTop } from 'react-navigation';
import { SearchBar, Icon, Grid, Row, Col } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import SampleText from './SampleText';
import COLORS from 'HSColors';

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
      onPress={() => navigation.navigate('Setting')}
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

const AScreen = ({ navigation }) => (
  <MyNavScreen banner="AScreen Screen" navigation={navigation} />
);
const BScreen = ({ navigation }) => (
  <MyNavScreen banner="BScreen Screen" navigation={navigation} />
);
const CScreen = ({ navigation }) => (
  <MyNavScreen banner="CScreen Screen" navigation={navigation} />
);
const DScreen = ({ navigation }) => (
  <MyNavScreen banner="DScreen Screen" navigation={navigation} />
);

const MyNotificationsSettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);

const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Settings Screen" navigation={navigation} />
);



////////////////////////////////////////////////////////////////
// Configuration for Top Tab Bar
////////////////////////////////////////////////////////////////
class CustomTabBarTop extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
       <Grid style={{height: 35, paddingTop: 20, paddingBottom: 1, backgroundColor: COLORS.primary, paddingHorizontal: 15}}>
        <Row size={1}>
          <Col size={1}>
            <Icon
              name='ios-menu'
              type='ionicon'
              color='white'
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
              />
          </Col>
          <Col size={9}>
            <Text>SearchBar Here</Text>
          </Col>
          <Col size={1}>
            <Icon
              name='ios-menu'
              type='ionicon'
              color='white'
              />
          </Col>
          <Col size={1}>
            <Icon
              name='ios-menu'
              type='ionicon'
              color='white'
              />
          </Col>
        </Row>
       </Grid>
        <TabBarTop {...this.props}/>
      </View>
    )
  }
}

const TopTabNavigatorRoute = {
  AScreen: {
    screen: AScreen,
  },
  BScreen: {
    screen: BScreen,
  },
  CScreen: {
    screen: CScreen,
  },
  DScreen: {
    screen: DScreen,
  },
};

const TopTabNavigatorConfig = {
  tabBarPosition: 'top',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarComponent: CustomTabBarTop,
  navigationOptions: {

  },
  tabBarOptions: {
    showIcon: false,
    // showTitle: false,
    tabStyle: {
      paddingVertical: 0,
    },
    indicatorStyle: {
      backgroundColor: 'white'
    },
    // labelStyle
    // iconStyle
    style: {
      backgroundColor: COLORS.primary,

    }
  }
};

////////////////////////////////////////////////////////////////
// END of Configuration for Top Tab Bar
////////////////////////////////////////////////////////////////

const TopTabNav = TabNavigator(generateTabRoute(TopTabNavigatorRoute) ,TopTabNavigatorConfig);


////////////////////////////////////////////////////////////////
// Configuration for Tab Bar
////////////////////////////////////////////////////////////////
const TabNavigatorRoute = {
  Home: {
    icon: 'ios-home',
    screen: TopTabNav,
  },
  Face: {
    icon: 'ios-game-controller-b',
    screen: MySettingsScreen,
  },
  Good: {
    icon: 'ios-football',
    screen: MySettingsScreen,
  },
  Setting: {
    screen: MySettingsScreen,
  },
};

const TabNavigatorConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    activeBackgroundColor: COLORS.primary2,
    inactiveBackgroundColor: COLORS.primary,
    // showIcon: false
    // tabStyle
    // indicatorStyle
    // labelStyle
    // iconStyle
    // style
  }
};

////////////////////////////////////////////////////////////////
// END of Configuration for Tab Bar
////////////////////////////////////////////////////////////////



const TabNav = TabNavigator(generateTabRoute(TabNavigatorRoute) ,TabNavigatorConfig);




function generateTabRoute(TabNavigatorRoute) {
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
        tabBarIcon: ({tintColor, focused}) => (<Ionicons name={item.icon ? item.icon : "ios-home"} size={26} style={{color: tintColor}}/>),
      },
    }
    if(item.icon) {

    }
    obj[key] = objItem;
  });
  return obj;
}

const StacksOverTabsConfig = {
  headerMode: 'none',
}
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
},StacksOverTabsConfig);

export default StacksOverTabs;
