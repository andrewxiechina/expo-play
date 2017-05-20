import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon, SocialIcon, Card } from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';

export default class RoundButton extends Component {
  log() {
    console.log("flag");
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.hero}>
          <Icon color="white" name="whatshot" size={62} type="material" />
          <Text style={styles.heading}>Round Buttons</Text>
        </View>
        <Card title="ICONS">
          <View style={styles.socialRow}>
            <Icon
              raised
              name="vpn-key"
              color="#E91E63"
              onPress={() => console.log('hello')}
            />
            <Icon
              raised
              name="ring-volume"
              color="#3F51B5"
              onPress={() => console.log('hello')}
            />
            <Icon
              raised
              color="#00BCD4"
              name="weekend"
              onPress={() => console.log('hello')}
            />
            <Icon
              raised
              color="#CDDC39"
              name="bubble-chart"
              onPress={() => console.log('hello')}
            />
            <Icon
              raised
              color="#FF5722"
              name="burst-mode"
              onPress={() => console.log('hello')}
            />
          </View>
          <View style={styles.socialRow}>
            <Icon
              reverse
              raised
              name="account-balance"
              color="#673AB7"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              raised
              name="android"
              color="#03A9F4"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              raised
              color="#009688"
              name="code"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              raised
              color="#8BC34A"
              name="card-travel"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              raised
              color="#FF9800"
              name="extension"
              onPress={() => console.log('hello')}
            />
          </View>
          <View style={styles.socialRow}>
            <Icon
              reverse
              name="group-work"
              color="#E91E63"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              name="lightbulb-outline"
              color="#3F51B5"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              color="#00BCD4"
              name="pets"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              color="#CDDC39"
              name="polymer"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              color="#FF5722"
              name="touch-app"
              onPress={() => console.log('hello')}
            />
          </View>
        </Card>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary2,
  },
  titleContainer: {},
  button: {
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black,
      },
    }),
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
