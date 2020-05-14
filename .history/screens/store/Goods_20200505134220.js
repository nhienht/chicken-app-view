import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import logo from '../../assets/logoDCD.png'
import icon from '../../assets/hen.png'

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
    };

    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            <View>
                <
     </View>
    );
  }
}

const styles = StyleSheet.create({
                    container: {
                }
});
