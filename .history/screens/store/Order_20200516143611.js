import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
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
                {({ cartItems, Total, order, onChange, phone, address }) =>
                    <View style={styles.container}>
                        <Text style={styles.title}>Thông tin người nhận</Text>
                        <View style={styles.infor}>
                            <Text>- Số điện thoại người nhận:</Text>
                            <TextInput placeholder="Nhập số điện thoại của bạn ở đây" style={styles.input}
                                onChange={(e) => onChange(e, "phone")} value={phone}/>
                            <Text>- Địa chỉ người nhận:</Text>
                            <TextInput placeholder="Nhập địa chỉ của bạn ở đây" style={styles.input}
                                onChange={(e) => onChange(e, "address")} value={address}/>
                        </View> 
                        <Text style={styles.title}>Thông tin sản phẩm </Text>
                        <View style={{ height: '50%' }} >

                            <FlatList
                                data={cartItems}
                                renderItem={({ item }) =>
                                    <OrderItem
                                        category={item} />} />
                        </View>
                        <View style={styles.total}>
                            <Text style={styles.money}> Tổng tiền:  {Total}  </Text>
                            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                                <TouchableOpacity style={styles.button} onPress={()=> order()}>
                                    <Text style={styles.text}>Đặt hàng</Text>
                                </TouchableOpacity>
                            </View>
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
        bottom: 0

    },
    infor: {
        backgroundColor: '#eee',
        margin: 5,
        height: '22%',
        width: '100%',

    },
    order: {
        backgroundColor: '#eee',
        margin: 5
    },
    total: {
        backgroundColor: '#eee',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 10
    },
    money: {
        fontSize: 25,
        color: '#F00',
        backgroundColor: '#fff',
        bottom: 50
    },
    text: {
        fontSize: 22
    },
    title: {
        textAlign: 'center',
        color: '#888',
        fontSize: 16,
    },
    input: {
        backgroundColor: '#fff',
        margin: 5
    }
});
