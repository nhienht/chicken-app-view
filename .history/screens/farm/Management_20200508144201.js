import React from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import icon from '../../assets/chinhsua.png'
import FarrmItem from '../../components/FarrmItem'


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
       {id: '1', name: 'Little Chicken', type:'Trang trại', soluong:'1000',benh:'0',thucan:'20'}
      
      ]
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quản lý',              
    };
  };

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    console.log(categories)
    return (
      <FlatList
              data={categories}
              numColumns={2}
              renderItem={({ item }) => {
                return(
                <ProductItems
                  category={item}
                  onPress={() => {
                    navigation.navigate('Product');
                    chooseToProduct(item)
                  }}
                />
     
    );
  }
}

