import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import NumericInput from 'react-native-numeric-input'
export default function GoodsItem(props) {
    const { category, onPress } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                <Image style={styles.image} source={category.Image} onPress={onPress} />
            </TouchableOpacity>
            <View style={styles.text}>
                <Text style={styles.title}>{category.name}</Text>
                <Text style={styles.price}>{category.price}</Text>

                <Text style={styles.nameStore}> {category.nameStore}</Text>
                <NumericInput type='up-down' onChange={value => console.log(value)}
                    totalWidth={120}
                    totalHeight={40}
                    iconSize={25}
                    minValue={1}
                    maxValue={category.quantity}
                />
            </View>
            <Text onPress={() => {
                this.setState({
                    modalVisible: false,
                })
            }} style={{ color: '#c1c1c1', marginLeft: 'auto', fontSize: 32, marginTop: 0 }}
            >x</Text>


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
        height: 130,
        width: 130,
        borderColor: '#000',
        padding: 10
    },
    price: {
        fontSize: 16,
        color: '#00c'
    },
    nameStore: {

    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#297',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: '#fff'
    },

});