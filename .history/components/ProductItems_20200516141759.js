import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function ProductItems(props) {
    const { category, onPress } = props;
    

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
            <Image style={styles.image} source={{uri:`https://68fe1be7.ngrok.io/images?image=${category.images}`}} />
                <Text style={styles.title}>{category.name}</Text>
                <Text style={styles.price}>{category.price}</Text>
               
            </View>
        </TouchableOpacity>

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
        color: '#363'
    },
    image:{
        height: hp("20%"),
        width:wp("45%"),
        borderColor: '#000',
        padding: 10            
    },
    price:{
        fontSize: 16,
        color: '#f77'
    }
});