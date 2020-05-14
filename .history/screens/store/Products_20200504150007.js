import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {ProductItems} from '../../components/ProductItems';

export default class Products extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Cửa hàng'
    };
  };
  constructor(props){
      super(props);
      this.state = {
          products: [
              {id: 1, name: "Thuốc", price:"50k", quantity: 1}
          ]
      };
  }
  
  render() {
    return (
    <FlatList 
        data = {products}
        renderItem = {({item}) =>
          <ProductItems
          category={item} 
          />}
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
