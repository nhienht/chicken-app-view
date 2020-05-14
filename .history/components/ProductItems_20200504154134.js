import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function ProductItems(props) {
    const { category } = props;
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Image style={styles.image} source={category.Image} />
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderRadius: 16,
        
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        marginBottom: 16
    },
    title: {
        marginBottom: 8,
        fontWeight: 'bold',
        fontSize: 26
    },
    image:{
        height: 60,
        width:60,
        borderColor: '#000',
        padding: 10            
    }
});