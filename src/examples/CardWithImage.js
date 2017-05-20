import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon, SocialIcon, Card, Divider } from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';

export default class CardWithImage extends Component {
  log() {
    console.log("flag");
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.hero}>
          <Icon color="white" name="whatshot" size={62} type="material" />
          <Text style={styles.heading}>Card with Image</Text>
        </View>
        <Card image={{url: 'https://1821662466.rsc.cdn77.org/images/moocs.jpg'}}>
        <Text h4>Hello world!</Text>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          icon={{name: 'code'}}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: -15, marginRight: -15, marginBottom: 0}}
          title='VIEW NOW' />
        </Card>
        <Card>
          <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>Recommended:</Text>
          <View style={[styles.socialRow]}>
            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>

            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>

            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>
          </View>
          <View style={[styles.socialRow]}>
            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>

            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>

            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>
          </View>
          <Divider style={{backgroundColor: "#ccc", marginTop: 15}} />
          <Text style={{marginTop: 15, color: "#888", fontSize: 15, alignSelf: 'center'}}>Click to Update</Text>
        </Card>

        <Card>
          <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>Recommended:</Text>
          <View style={[styles.socialRow]}>
            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>

            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>

            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>
          </View>
          <View style={[styles.socialRow]}>
            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>

            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>

            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>
          </View>
          <Divider style={{backgroundColor: "#ccc", marginTop: 15}} />
          <Text style={{marginTop: 15, color: "#888", fontSize: 15, alignSelf: 'center'}}>Click to Update</Text>
        </Card>

        <Card>
          <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>Recommended:</Text>
          <View style={[styles.socialRow]}>
            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>

            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>

            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>
          </View>
          <View style={[styles.socialRow]}>
            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>

            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>

            <Card
              containerStyle={{margin: 5, flex: 1}}
              imageStyle={{height: 90}}
              image={{url: 'https://leaderchat.files.wordpress.com/2016/05/leaderchat_podcast-200px.png?w=240'}}>
              <Text>Product A</Text>
            </Card>
          </View>
          <Divider style={{backgroundColor: "#ccc", marginTop: 15}} />
          <Text style={{marginTop: 15, color: "#888", fontSize: 15, alignSelf: 'center'}}>Click to Update</Text>
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
