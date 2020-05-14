import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Products extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Cửa hàng'
    };
  };
  
  render() {
    return (
    
      <View>
        <Text>a</Text>   
      </View>
      
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
