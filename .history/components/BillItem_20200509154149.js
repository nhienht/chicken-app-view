import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import NumericInput from 'react-native-numeric-input'
import { CartContext } from '../contexts/Cart'
export default function BillItem(props) {
    const { category, onPress } = props;
    return (


        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
                <Text>{category.id}</Text>
                <View style={styles.text}>
                    <Text style={styles.title}>Tên sản phẩm: {category.name}</Text>
                    <Text style={styles.price}>Giá tiền: {category.price}</Text>
                    <Text style={styles.nameStore}>Tên cửa hàng: {category.storeName}</Text>

                </View>
            </View>
        </TouchableOpacity>
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