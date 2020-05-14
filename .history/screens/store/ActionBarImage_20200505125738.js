import React, { Component } from 'react';
import ImageItem from '../../assets/vohang.png'
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

export default class ActionBarImage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress = {() => {
            this.props.onPress)
          }}
        >
        <Image
          source={ImageItem}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: 15,
          }}
        />
        </TouchableOpacity>
      </View>
    );
  }
}