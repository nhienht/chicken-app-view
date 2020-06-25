import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function ProductItems(props) {
    const { category, onPress } = props;
    return (
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: `https://150895e2.ngrok.io/images?image=${category.images}`}}></Image>
                <View style={{top: 30}}>
                    <Text>Tên sản phẩm: {category.name}</Text>
                    <Text>Giá sản phẩm: {category.price}</Text>
                    <Text>Số lượng: {category.quantity}</Text>
                </View>
            </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#ccc',
        borderWidth: 1,
        margin: 5,
    },
    title:{
        width:50,
        textAlign: 'center',
        top: 20,
        fontSize: 18,
        color: '#373'
    },
    img:{
        height: 120,
        width: 120,
        margin: 10
    }
});