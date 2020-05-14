import React from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import icon from '../../assets/chinhsua.png'
import FarmItem from '../../components/FarmItem'


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
      renderItem={({ item }) =>
          <FarmItem
              category={item}
            
          />}
      keyExtractor={item => `${item.id}`}
  />

    );
  }
}
  