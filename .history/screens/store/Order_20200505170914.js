import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Order extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Đặt hàng'
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infor}>
                    <Text>Name  - SDT </Text>
                    <Text>Địa chỉ</Text>
                </View>
                <View style={styles.order}>
                    <Text>Ten sp, Gia</Text>
                </View>
                <View style={styles.total}>
                    <Text style={styles.money}> Tong tien </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',

    },
    button: {
        position: 'absolute',
        width: '100%',
        height: 50,
        backgroundColor: '#297',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
    },
    infor: {
        backgroundColor: '#eee',
        margin: 10,
        height: '20%'
    },
    order: {
        backgroundColor: '#eee',
        margin: 10
    },
    total: {
        backgroundColor: '#eee',
        position: 'absolute',
        bottom: 40,
        width: '100%',
        padding: 10
    },
    money:{
        fontSize: 25,
        color: '#F00',
        paddingLeft: 270
    },
    text: {
        fontSize: 22
    }
});
