import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform, TouchableHighlight, Image } from 'react-native';

import { Text, Button, Icon, SocialIcon, Card, Divider, List, ListItem, Grid, Col, Row, Tile, CheckBox } from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';

export default class MyCheckBox extends Component {
  log() {
    console.log("flag");
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.hero}>
          <Icon color="white" name="whatshot" size={62} type="material"/>
          <Text style={styles.heading}>CheckBox</Text>
        </View>
        <CheckBox
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          title='Click Here'
          checkedColor='green'
          checked={true}
          //onPress
          //uncheckedColor
          //checkedTitle
        />
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
});
