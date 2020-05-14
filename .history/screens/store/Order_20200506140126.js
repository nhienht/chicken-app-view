import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { CartContext } from '../../contexts/Cart'
import OrderItem from '../../components/OrderItem'
export default class Order extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Đặt hàng'
        };
    };

    render() {
        return (
            <CartContext.Consumer>
            <View style={styles.container}>
                <View style={styles.infor}>
                    <Text>Name  - SDT </Text>
                    <Text>Địa chỉ</Text>
                </View>
          
                    {({ cartItems, Total }) =>
                        <View style={{ height: '100%' }} >
                            <FlatList
                                data={cartItems}
                                renderItem={({ item }) =>
                                    <OrderItem
                                        category={item} />} />
                        </View>
                        
                    <View style={styles.total}>
                        <Text style={styles.money}> Tong tien {Total}  </Text>
                    </View>

                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        }</CartContext.Consumer>
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
        margin: 5,
        height: '20%'
    },
    order: {
        backgroundColor: '#eee',
        margin: 5
    },
    total: {
        backgroundColor: '#eee',
        position: 'absolute',
        bottom: 40,
        width: '100%',
        padding: 10
    },
    money: {
        fontSize: 25,
        color: '#F00',
        paddingLeft: 270
    },
    text: {
        fontSize: 22
    }
});
