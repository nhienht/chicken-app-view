import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function ProductItems(props) {
    const { category, onPress } = props;
    

    return (
        <CartContext.Consumer>
        {({addToCart}) =>    <Text style={styles.text} onPress={()=>addToCart()} >Chọn Mua</Text>}
     

        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
            <Image style={styles.image} source={category.Image} />
                <Text style={styles.title}>{category.name}</Text>
                <Text style={styles.price}>{category.price}</Text>
               
            </View>
        </TouchableOpacity>
        </CartContext.Consumer>

    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
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
        color: '#00f'
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
    }
});