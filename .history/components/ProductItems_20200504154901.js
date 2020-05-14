import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function ProductItems(props) {
    const { category } = props;
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Text style={styles.price}>{category.price}</Text>
                <Image style={styles.image} source={category.Image} />
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 16,
        backgroundColor: '#000',
        marginBottom: 16,
        margin: 5,
        flex: 1,
        alignItems: 'stretch'
    },
    title: {
        marginBottom: 8,
        fontWeight: 'bold',
        fontSize: 26
    },
    image:{
        height: 150,
        width:150,
        borderColor: '#000',
        padding: 10            
    },
    price:{
     
    }
});