import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform, TouchableHighlight, Image } from 'react-native';

import { Text, Button, Icon, SocialIcon, Card, Divider, List, ListItem, Grid, Col, Row, Tile } from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';

export default class ListWithAvatar extends Component {
  log() {
    console.log("flag");
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.hero}>
          <Icon color="white" name="whatshot" size={62} type="material"/>
          <Text style={styles.heading}>List with Avatar</Text>
        </View>
        <Card
            containerStyle={{ marginTop: 15, marginBottom: 15 }}
            title="GRID LAYOUT"
          >
          <Grid
            containerStyle={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              padding: 10,
            }}
          >
            <Col size={0.25}>
              <Image
                source={require('../images/avatar1.jpg')}
                style={{ height: 50, width: 50, borderRadius: 25 }}
              />
            </Col>
            <Col>
              <Row size={0.75}>
                <Text style={{ fontSize: 22 }}>Adam McArther</Text>
              </Row>
              <Row>
                <Text style={{ color: 'grey' }}>Freelance developer</Text>
              </Row>
            </Col>
          </Grid>
        </Card>
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
