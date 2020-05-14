import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import ProductItems from '../../components/ProductItems';
import anh1 from '../../assets/conga.jpg';

export default class Products extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Cửa hàng'
    };
  };
  constructor(props){
      super(props);
      this.state = {
        categories: [
              {id: 1, name: "Thuốc", price:"50k", quantity: 1, Image: anh1},
              {id: 2, name: "Thức ăn", price:"100k", quantity: 2, Image: anh1}
          ]
      };
  }
  
  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    console.log(categories)
    return (
    <FlatList 
        data = {categories}
        renderItem = {({item}) =>
          <ProductItems
          category={item} 
          />}
          keyExtractor = {item => `${item.id}`}
    />
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
