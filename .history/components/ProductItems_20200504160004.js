import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function ProductItems(props) {
    const { category } = props;
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.container}>
            <Image style={styles.image} source={category.Image} />
                <Text style={styles.title}>{category.name}</Text>
                <Text style={styles.price}>{category.price}</Text>
               
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 10,
        backgroundColor: '#ddd',
        margin: 5,
        flex: 1,
        
    },
    title: {
        marginTop: 10,
        marginBottom: 8,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#f00'
    },
    image:{
        height: 175,
        width:175,
        borderColor: '#000',
        padding: 10            
    },
    price:{

    }
});