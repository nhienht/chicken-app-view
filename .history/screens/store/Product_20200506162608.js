import React from 'react';
import { StyleSheet, View, Text, Image, Button, Modal, Alert } from 'react-native';
import img from '../../assets/conga.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ActionBarImage from '../store/ActionBarImage'
import { Overlay } from 'react-native-elements'
import { CartContext } from '../../contexts/Cart'
export default class Product extends React.Component {
    state = {
        modalVisible: false,
        product: null

    }
    onClose = () => this.setState({ modalVisible: false });

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Sản Phẩm',
            headerRight: <ActionBarImage onPress={() => navigation.navigate("Goods")} />,
        };
    };

    _simpleAlertHandler = () => {
        Alert.alert(
            //title
            'Sản phẩm đã được thêm vào giỏ hàng',
            //body
            'Bạn có muốn đi đến giỏ hàng không ?',
            [
                { text: 'Có', onPress: () => this.props.navigation.navigate("Goods") },
                {
                    text: 'Không',
                    onPress: () => console.log('No Pressed'),
                    style: 'cancel',
                },
            ],
            { cancelable: false }

        );
    };

    render() {
        return (
            <CartContext.Consumer>
                {({addToCart, chooseProduct}) =>
                    <View style={styles.container}>
                    <Image style={styles.image} source={{uri:`https://14d56d8d.ngrok.io/images?image=${chooseProduct.images}`}} />
                    <Text style={styles.title}> {chooseProduct.name} </Text>
                    <Text style={styles.des}> {chooseProduct.description} </Text>
                    <Text style={styles.price}>{chooseProduct.price}</Text>
                    <Text style={styles.infor}>{chooseProduct.store} </Text>
                    <Text style={styles.des}>{chooseProduct.type}</Text>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={styles.button} onPress={() => 
                           {
                                addToCart(chooseProduct)
                                this._simpleAlertHandler
                            }}>
                            <Text style={styles.text}>Chọn Mua</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                    }         
            </CartContext.Consumer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 10,
        flex: 1

    },
    image: {
        width: 340,
        height: 340,
        alignSelf: 'center',
    },
    title:{
        fontSize: 26,
        color: '#f00'
    },
    des: {
        fontSize: 20,
        padding: 5
    },
    price: {
        fontSize: 30,
        color: '#f00',
        padding: 5
    },
    infor: {
        fontSize: 18,
        color: '#777',
        padding: 5
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
    overlay: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        position: 'absolute',
        left: 0,
        top: 0,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    }

});
