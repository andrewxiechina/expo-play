import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View } from 'react-native';

export default class BlockButton extends Component {
  render() {
    return (
      <View>
        <Button
          title='BUTTON' />

        <Button
          raised
          icon={{name: 'cached'}}
          title='BUTTON WITH ICON' />

        <Button
          large
          iconRight
          icon={{name: 'code'}}
          title='LARGE WITH RIGHT ICON' />

        <Button
          large
          icon={{name: 'envira', type: 'font-awesome'}}
          title='LARGE WITH RIGHT ICON' />

        <Button
          large
          icon={{name: 'squirrel', type: 'octicon'}}
          title='OCTICON' />
      </View>
    )
  }


}
