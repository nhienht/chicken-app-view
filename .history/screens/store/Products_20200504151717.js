import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ProductItems from '../../components/ProductItems';

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
              {id: 1, name: "Thuốc", price:"50k", quantity: 1}
          ]
      };
  }
  
  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    console.log(categories)
    return (
    // <FlatList 
    //     data = {categories}
    //     renderItem = {({item}) =>
    //       <ProductItems
    //       category={item} 
    //       />}
    //       keyExtractor = {item => `${item.id}`}
    // />
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
