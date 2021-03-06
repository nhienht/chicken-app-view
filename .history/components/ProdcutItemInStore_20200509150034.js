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
        flexDirection: 'row'
    },
    title:{
        width:50,
        textAlign: 'center',
    },
    img:{
        height: 100,
        width: 100,
        padding: 10
    }
});