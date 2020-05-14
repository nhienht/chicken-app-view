import React from 'react'
import {FlatList } from 'react-native'


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories =[
                {brand: "Nghi", description: "demo P1", id: "1", images: "product/default.jpg", name: "P1", price: "20", quantity: 10, source: "Công ty Nghị ", storeName: "mai", types: "thuốc"},
                {brand: "Nghi", description: "demo P1", id: "2", images: "product/default.jpg", name: "P1", price: "20", quantity: 10, source: "Công ty Nghị ", storeName: "mai", types: "thức ăn"},
                {brand: "Nghi", description: "demo P1", id: "3", images: "product/default.jpg", name: "P1", price: "20", quantity: 10, source: "Công ty Nghị ", storeName: "mai", types: "thuốc"},
                {brand: "Nghi", description: "demo P1", id: "4", images: "product/default.jpg", name: "P1", price: "20", quantity: 10, source: "Công ty Nghị ", storeName: "mai", types: "thức ăn"},
               
            ]
        };
    }
    render(){
        const { navigation } = this.props;
        const { categories } = this.state;
        return(
            <FlatList
            data={categories}
            renderItem={({ item }) =>
                <GoodsItem
                    category={item}
                   
                />}
            keyExtractor={item => `${item.id}`}
        />
        )
    }

}