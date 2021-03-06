import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function GoodsItem(props) {
    const { category, onPress } = props;
    return (
            <View>
              <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <Image style={styles.image} source={category.Image}  onPress={onPress} />
            </TouchableOpacity>
            <Text style={styles.title}>{category.name}</Text>
            <Text style={styles.price}>{category.price}</Text>
            <Text style={styles.nameStore}> {category.nameStore}</Text>
           </View>
    )
}
const styles = StyleSheet.create({
    container: {
      
        padding: 10,
        backgroundColor: '#eee',
        margin: 5,
        flex: 1,
        
    },
    title: {
        marginTop: 10,
        marginBottom: 6,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#00f',
        
    },
    image:{
        height: 175,
        width:175,
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