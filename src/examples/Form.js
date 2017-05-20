import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform } from 'react-native';
import colors from 'HSColors';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Button,
  Text,
  FormInput,
  FormLabel,
  CheckBox,
  SearchBar,
} from 'react-native-elements';

class Forms extends Component {
  render() {
    return (
      <ScrollView
        style={{ backgroundColor: 'white' }}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.headingContainer}>
          <Icon color="white" name="pets" size={62} />
          <Text style={styles.heading}>Forms</Text>
        </View>


        <View>
          <FormLabel containerStyle={styles.labelContainerStyle}>
            Name
          </FormLabel>
          <FormInput
            ref="form2"
            containerRef="containerRefYOYO"
            textInputRef="textInputRef"
            placeholder="Please enter your name..."
          />
          <FormLabel
            textInputRef="textInputRef"
            containerStyle={styles.labelContainerStyle}
          >
            Address
          </FormLabel>
          <FormInput
            textInputRef="textInputRef"
            ref="form1"
            placeholder="Please enter your address..."
          />
          <FormLabel
            textInputRef="textInputRef"
            containerStyle={styles.labelContainerStyle}
          >
            Phone
          </FormLabel>
          <FormInput
            textInputRef="textInputRef"
            placeholder="Please enter your phone number..."
          />
          <Button
            onPress={() => console.log('yo')}
            icon={{ name: 'done' }}
            buttonStyle={{ marginTop: 15 }}
            title="SUBMIT"
          />

        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary2,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  labelContainerStyle: {
    marginTop: 8,
  },
});

export default Forms;
