import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import anh1 from '../../assets/conga.jpg';
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
            <FlatList
            data={categories}
            renderItem={({ item }) =>
              <ProductItems
                category={item}
                onPress={() => navigation.navigate('Product')}
              />}
            keyExtractor={item => `${item.id}`}
          />
    );
  }
}

const styles = StyleSheet.create({
                    container: {
                }
});
