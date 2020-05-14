import React from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import FarmItem from '../../components/FarmItem'
import icon from '../../assets/chinhsua.png'
import ActionBarImage from './ActionBarImage'


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
       {id: '1', isVaccinate: 'Yes', date:'5/9/2020',source:'Công ty phân phối giống gà Xưn',quantity: '100', spName: 'gà bến tre', note: ""},
       {id: '2', isVaccinate: 'Yes', date:'5/9/2020',source:'Công ty phân phối giống gà Nghị',quantity: '100', spName: 'gà đông tảo', note: ""},
       {id: '3', isVaccinate: 'Yes', date:'5/9/2020',source:'Công ty phân phối giống gà Xưn',quantity: '100', spName: 'gà nồi', note: ""}
      
      ]
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quản lý', 
      headerRight: <ActionBarImage onPress={() => navigation.navigate("ChangeInfor")} />             
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
const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  }
});