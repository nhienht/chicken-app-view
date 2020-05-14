import React from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Text } from 'react-native';
import anh1 from '../../assets/conga.jpg';
import GoodsItem from '../../components/GoodsItem'
import {CartContext} from '../../contexts/Cart'
import ActionBarImage from '../store/ActionBarImage'



export default class Goods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Giỏ hàng',
            headerRight: <ActionBarImage onPress={() => console.log("a")} />
        };
    }

    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            <View style={{height: '100%'}} >
               <CartContext.Consumer>
                   {({cartItems}) =>  <FlatList
                    data={cartItems}
                    renderItem={({ item }) =>
                        <GoodsItem
                            category={item}
                            onPress={() => navigation.navigate('Product')}
                        />}
                    keyExtractor={item => `${item.id}`}

                />}
               </CartContext.Consumer>
               
                <View style={{ flex: 1, justifyContent:'flex-start' }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text} onPress={()=> navigation.navigate('Order')} >Tiến hành đặt hàng</Text>
                    </TouchableOpacity>
                </View>
                  
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
    
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
    text: {
        fontSize: 20,
        color: '#fff'
    },
});
