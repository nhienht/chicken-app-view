import React from 'react';
import { StyleSheet, View, Text, Image, Button, Modal } from 'react-native';
import img from '../../assets/conga.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ActionBarImage from '../store/ActionBarImage'
export default class Product extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Sản Phẩm',
            headerRight: <ActionBarImage/>,
        };
    };

    overLayItem(){
        return(
            <Modal
                    transparent
                    animationType="fade"
                    visible={this.state.visible}
                    onRequestClose={() => {
                      console.log('Modal has been closed.');
                    }}>
                  >
                  <View style={styles.wrapper}>
                      <BlurView  blurType="dark" blurAmount={5} />

                      <View>
                         <Text> a</Text>
                          
                      </View>
                  </View>
                </Modal>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={img} />
                <Text style={styles.des}> Description </Text>
                <Text style={styles.price}>Price</Text>
                <Text style={styles.infor}>Information Store </Text>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={styles.button} onPress= {() => this.overLayItem()} >
                        <Text style={styles.text}>Chọn Mua</Text>
                    </TouchableOpacity>
                </View>
              

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
