import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function ProductItems(props) {
    const { category, onPress } = props;
    

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
            <Image style={styles.image} source={{category.image}} />
                <Text style={styles.title}>Sản phẩm {category.name}</Text>

                <Text style={styles.price}>{category.price}</Text>
               
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container: {
    },
});