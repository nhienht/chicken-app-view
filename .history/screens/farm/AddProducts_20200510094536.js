import React from 'react';
import { StyleSheet, FlatList, AsyncStorage, View, Text, TextInput } from 'react-native';


export default class AddProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        checked: 'first',
    };
  }

  render() {
    const { checked } = this.state;
    return (
        
    <View>
        <Text>Thêm lứa gà mới</Text>
        <Text>Đã tiêm vaccinate hay chưa? </Text>
      
    </View>
        )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BBEEB9",
    height: 700,
    paddingTop: 40,
    paddingLeft: 26,
    paddingRight: 26
  }
})