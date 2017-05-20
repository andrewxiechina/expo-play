import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform, TouchableHighlight, Image } from 'react-native';

import { Rating, Text, Button, Icon, SocialIcon, Card, Divider, List, ListItem, Grid, Col, Row, Tile, CheckBox } from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';

class Fonts extends Component {
  render() {
    const WATER_IMAGE = require('../images/water.png')
    return (
      <ScrollView>
        <View style={styles.hero}>
          <Icon color="white" name="whatshot" size={62} type="material"/>
          <Text style={styles.heading}>List with Avatar</Text>
        </View>
        <View style={{padding: 10}}>
        <Rating
          type='star'
          ratingCount={10}
          imageSize={30}

          //showRating
          //onFinishRating={this.ratingCompleted}
          />
          <Rating
            type='custom'
            ratingImage={WATER_IMAGE}
            ratingColor='#3498db'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={10}
            imageSize={30}
            //showRating
            //onFinishRating={this.ratingCompleted}
            />
        </View>
      </ScrollView>
    );
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
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    color: 'black',
  },
});

export default Fonts;
