import React, { Component } from 'react';
import ImageItem from '../assets/delete.png'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { CartContext } from '../contexts/Cart'

export default class DeleteImage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { onPress } = this.props
    return (
      <CartContext.Consumer>
        {({ Count }) =>
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
        }
      </CartContext.Consumer>

    );
  }
}
const styles = StyleSheet.create({
  count: {
    marginLeft: 25,
    color: '#00f'
  },
 
})