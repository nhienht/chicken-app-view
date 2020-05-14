import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
export default function FarmItem(props) {
    const { category, onPress } = props;
    return (

                <View style={styles.container}>
                    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                    </TouchableOpacity>
                    <View style={styles.text}>
                        <Text style={styles.title}>Tên sản phẩm: {category.name}</Text>
                        <Text style={styles.price}>Giá tiền: {category.price}</Text>
                        <Text style={styles.nameStore}>Tên cửa hàng: {category.storeName}</Text>
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
    image: {
        height: 120,
        width: 120,
        borderColor: '#000',
        padding: 10,
        margin: 10
    },
    price: {
        fontSize: 16,
        color: '#00c'
    },
    nameStore: {

    },


});