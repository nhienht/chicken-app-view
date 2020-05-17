import React, { Component } from 'react';
import ImageItem from '../assets/chinhsua.png'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default class UpdateImage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { onPress } = this.props
    return (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={onPress}>
                <Image
                  source={ImageItem}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 40 / 2,
                    marginLeft: 15,
                  }}
                />   
            </TouchableOpacity>
          </View>
    );
  }
}
const styles = StyleSheet.create({
  count: {
    marginLeft: 25,
    color: '#00f'
  },
 
})