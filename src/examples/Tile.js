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


          <View>
            <Tile
              imageSrc={{
                uri: 'https://static1.squarespace.com/static/5477887ae4b07c97883111ab/5478c08fe4b0fa4e5a552532/57e101f3579fb32aef30d4af/1491426124625/Porthmeor+Sunset+21.jpg',
              }}
              title="Mahatma Gandhi"
              titleStyle={{ fontSize: 20 }}
              featured
              caption="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              activeOpacity={0.5}
            />
          </View>

          <View style={{ paddingTop: 20 }}>
            <Tile
              imageSrc={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/320px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg',
              }}
              title="Half Dome, Yosemite"
              caption="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
              titleStyle={{ fontSize: 20 }}
              activeOpacity={1}
              contentContainerStyle={{ height: 70 }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{ color: '#666' }}>Visit</Text>
                <Text style={{ color: '#666' }}>Find out More</Text>
              </View>
            </Tile>
          </View>

          <View style={{ paddingTop: 20 }}>
            <Tile
              imageSrc={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/320px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg',
              }}
              icon={{name: 'play-circle', type: 'font-awesome', size: 50}}
              contentContainerStyle={{ height: 70 }}
              title="Half Dome, Yosemite"
              titleStyle={{ fontSize: 20 }}
            />
          </View>
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
