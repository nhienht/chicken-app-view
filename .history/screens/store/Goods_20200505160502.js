import React from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Text } from 'react-native';
import anh1 from '../../assets/conga.jpg';
import GoodsItem from '../../components/GoodsItem'



export default class Goods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { id: 1, name: "Thuốc", price: "50k", quantity: 1, Image: anh1, nameStore: "DCD" },
                { id: 2, name: "Thức ăn", price: "100k", quantity: 2, Image: anh1, nameStore: "DCD" },
                { id: 3, name: "Thuốc", price: "50k", quantity: 1, Image: anh1, nameStore: "DCD" }
            ]
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Giỏ hàng',
        };
    }

    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            <View>
                <FlatList
                    data={categories}
                    renderItem={({ item }) =>
                        <GoodsItem
                            category={item}
                            onPress={() => navigation.navigate('Product')}
                        />}
                    keyExtractor={item => `${item.id}`}

                />
                <View style={{ flex: 1, justifyContent:'space-between', height: 100 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text} >Tiến hành đặt hàng</Text>
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
