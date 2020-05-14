import React from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import FarmItem from '../../components/FarmItem'
import { FarmContext } from '../../contexts/FarmContext'
import AddImage from './AddImage'
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quản lý',
      headerRight: <AddImage onPress={()=> {navigation.navigate('AddProduct')}} />
      
    };
  };

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
   // console.log(categories)
    return (
      <FarmContext.Consumer>
        {
          ({ chooseToChicken, farms }) => (
            <FlatList
              data={farms}
              renderItem={({ item }) =>
                <FarmItem
                  category={item}
                  onPress={() => {
                    navigation.navigate('ChangeInfor');
                    chooseToChicken(item)
                  }}
                />}
              keyExtractor={item => `${item.id}`}
            />
          )
        }
      </FarmContext.Consumer>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  }
});