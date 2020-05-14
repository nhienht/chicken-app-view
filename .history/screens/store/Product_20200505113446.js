import React from 'react';
import { StyleSheet, View, Text, Image, Button, Modal } from 'react-native';
import img from '../../assets/conga.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ActionBarImage from '../store/ActionBarImage'
import Overlay from 'react-native-modal-overlay'

export default class Product extends React.Component {
    state = {
        modalVisible: false,

    }
    onClose = () => this.setState({ modalVisible: false });

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Sản Phẩm',
            headerRight: <ActionBarImage />,
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
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.setState({
                            modalVisible: !this.state.modalVisible
                        })

                        console.log(this.state.modalVisible)
                    }} >
                        <Text style={styles.text} >Chọn Mua</Text>
                    </TouchableOpacity>
                </View>

                <Overlay isVisible={this.state.modalVisible} onClose={this.onClose} closeOnTouchOutside
                    animationType="zoomIn" containerStyle={{ backgroundColor: 'rgba(37, 8, 10, 0.78)' }}
                    childrenWrapperStyle={{ backgroundColor: '#eee' }}
                    animationDuration={500}>                      
                    <Text>a.</Text>
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
