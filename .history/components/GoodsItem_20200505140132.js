import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function GoodsItem(props) {
    const { category, onPress } = props;
    return (
            <View style={styles.container}>
              <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <Image style={styles.image} source={category.Image}  onPress={onPress} />
            </TouchableOpacity>
            <View style={styles.text}>
            <Text style={styles.title}>{category.name}</Text>
            <Text style={styles.price}>{category.price}</Text>
            <Text style={styles.nameStore}> {category.nameStore}</Text>
            </View>
           </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#eee',
        margin: 5,
        flexDirection: 'row'
    },
    title: {
        marginTop: 10,
        marginBottom: 6,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#00f',
        
    },
    image:{
        height: 130,
        width:130,
        borderColor: '#000',
        padding: 10            
    },
    price:{
        fontSize: 16,
        color: '#00c'
    },
    nameStore:{
        
    }
});