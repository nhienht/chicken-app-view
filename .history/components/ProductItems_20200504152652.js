import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function ProductItems(props) {
    const { category } = props;
    return (
        <TouchableOpacity>
            <View>
                <Text>{category.name}</Text>
            </View>
        </TouchableOpacity>

    )
}