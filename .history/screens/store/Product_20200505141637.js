import React from 'react';
import { StyleSheet, View, Text, Image, Button, Modal } from 'react-native';
import img from '../../assets/conga.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ActionBarImage from '../store/ActionBarImage'
import { Overlay } from 'react-native-elements'

export default class Product extends React.Component {
    state = {
        modalVisible: false,

    }
    onClose = () => this.setState({ modalVisible: false });

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Sản Phẩm',
            headerRight: <ActionBarImage onPress={() => navigation.navigate("Goods")} />,
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={img} />
                <Text style={styles.des}> Description </Text>
                <Text style={styles.price}>Price</Text>
                <Text style={styles.infor}>Information Store </Text>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={styles.button} onPress={async () => {
                        this.setState({
                            modalVisible: true
                        })
                    }} >
                        <Text style={styles.text} >Chọn Mua</Text>
                    </TouchableOpacity>
                </View>

                <Overlay isVisible={this.state.modalVisible} onClose={this.onClose} closeOnTouchOutside
                    animationType="slide" containerStyle={{ backgroundColor: 'rgba(37, 8, 10, 0.78)' }}
                    childrenWrapperStyle={{ backgroundColor: '#eee',  height: 360} }
                    animationDuration={500}>
                    <Text onPress={() => {
                        this.setState({
                            modalVisible: false,
                        })
                    }} style={{ color: '#c1c1c1', marginLeft: 'auto', fontSize: 32, marginTop: 0 }}
                    >x</Text>

                    <Text>Sản phẩm đã được thêm vào giỏ hàng</Text>
                    <Button title="Đi đến giỏ hàng"></Button>
                </Overlay>
            </View>
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
        width: 350,
        height: 350,
        alignSelf: 'center',
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
    }

});
