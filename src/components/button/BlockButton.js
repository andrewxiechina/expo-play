import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon, SocialIcon, Card } from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';

export default class BlockButton extends Component {
  render() {
    console.log(colors);
    return (
      <ScrollView>
        <View style={styles.hero}>
          <Icon color="white" name="whatshot" size={62} type="material" />
          <Text style={styles.heading}>Buttons & Icons</Text>
        </View>
        <Button
          buttonStyle={[styles.button]}
          backgroundColor={colors.primary}
          icon={{ name: 'account', type: 'material-community' }}
          title="Got to Buttons Detail View"
        />

        <Button
          iconRight
          buttonStyle={[styles.button]}
          backgroundColor={socialColors.tumblr}
          icon={{ name: 'motorcycle' }}
          title="BUTTON WITH RIGHT ICON"
        />

        <Button
          large={true}
          buttonStyle={[styles.button]}
          backgroundColor={socialColors.tumblr}
          icon={{name: 'cached'}}
          title='BUTTON WITH ICON' />

        <Button
          large
          iconRight
          buttonStyle={[styles.button]}
          icon={{name: 'code'}}
          title='LARGE WITH RIGHT ICON' />

        <Button
          large
          buttonStyle={[styles.button]}
          icon={{name: 'envira', type: 'font-awesome'}}
          title='LARGE WITH RIGHT ICON' />

        <Button
          large
          buttonStyle={[styles.button]}
          icon={{name: 'squirrel', type: 'octicon'}}
          title='OCTICON' />
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
