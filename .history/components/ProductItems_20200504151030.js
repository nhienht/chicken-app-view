import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
export default function ProductItems(props) {
    const{product} = props;
    console.log(product)
    return (
        <View>

            <Text>{product.name}</Text>
        </View>
    )
}