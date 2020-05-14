import React, { Component } from 'react';
import ImageItem from '../../assets/vohang.png'
import { StyleSheet, View, Text, Image } from 'react-native';

export default class ActionBarImage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={ImageItem}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: 15,
          }}
        />
      </View>
    );
  }
}