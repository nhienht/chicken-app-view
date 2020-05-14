import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function ProductItems(props) {
    const { category, onPress } = props;
    

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>Sản phẩm {category.name}</Text>
                <Image source={category.images}></Image>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container: {
    },
});