import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function ProductItems(props) {
    const { category, onPress } = props;
    

    return (
        <View>
            
            <View style={styles.container}>
                <Text style={styles.title}>Sản phẩm {category.name}</Text>
                <Image style={styles.img} source={category.images}></Image>
            </View>
     
        </View>
       

    )
}
const styles = StyleSheet.create({
    container: {
    },
    img:{
        height: 100,
        width: 100
    }
});