import React from 'react'
import {FlatList } from 'react-native'
import icon from '../../assets/icon.png'
import ProductItem from '../../components/ProdcutItemInStore'


export default class HomeStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:[
                {brand: "Nghi", description: "demo P1", id: "1", images: icon, name: "P1", price: "20", quantity: 10, source: "Công ty Nghị ", storeName: "mai", types: "thuốc"},
                {brand: "Nghi", description: "demo P1", id: "2", images: icon, name: "P1", price: "20", quantity: 10, source: "Công ty Nghị ", storeName: "mai", types: "thức ăn"},
                {brand: "Nghi", description: "demo P1", id: "3", images: icon, name: "P1", price: "20", quantity: 10, source: "Công ty Nghị ", storeName: "mai", types: "thuốc"},
                {brand: "Nghi", description: "demo P1", id: "4", images: icon, name: "P1", price: "20", quantity: 10, source: "Công ty Nghị ", storeName: "mai", types: "thức ăn"},
               
            ]
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Sản phẩm',
        };
      };

    render(){
        const { navigation } = this.props;
        const { categories } = this.state;
        return(
            <FlatList
            data={categories}
            renderItem={({ item }) =>
                <ProductItem
                    category={item}
                   
                />}
            keyExtractor={item => `${item.id}`}
        />
        )
    }

}