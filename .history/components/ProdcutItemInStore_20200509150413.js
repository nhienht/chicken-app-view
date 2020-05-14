import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function ProductItems(props) {
    const { category, onPress } = props;
    

    return (
            <View style={styles.container}>
                <Text style={styles.title}>Sản phẩm {category.name}</Text>
                <Image style={styles.img} source={category.images}></Image>
                <View>
                    <Text>Thương hiệu: {category.brand}</Text>
                    <Text>Tên sản phẩm: {category.name}</Text>
                    <Text>Nguồn sản phẩm: {category.source}</Text>
                    <Text>Loại sản phẩm: {category.types}</Text>
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
        margin: 5
    },
    title:{
        width:50,
        textAlign: 'center',
        top: 20,
        fontSize: 18,
        color: '#363'
    },
    img:{
        height: 120,
        width: 120,
        margin: 10
    }
});