import React from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import FarmItem from '../../components/FarmItem'
import icon from '../../assets/chinhsua.png'


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
       {id: '1', name: 'Little Chicken', type:'Trang trại',address:'Can Tho', soluong:'1000',benh:'0',thucan:'20'}
      
      ]
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quản lý', 
      headerRight: <Image source={icon} onPress={() => navigation.navigate("Goods")} />             
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
  