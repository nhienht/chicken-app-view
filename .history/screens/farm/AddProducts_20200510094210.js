import React from 'react';
import { StyleSheet, FlatList, AsyncStorage, View, Text, TextInput } from 'react-native';
import { render } from 'react-dom';
import HomeItem from '../../components/HomeListItem'
import { RadioButton } from 'react-native-paper';

export default class AddProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        checked: 'first',
    };
  }

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
        const { checked } = this.state;
    <View>
        <Text>Thêm lứa gà mới</Text>
        <Text>Đã tiêm vaccinate hay chưa? </Text>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'first' }); }}
        />
        <TextInput placeholder="Lứa gà mới"></TextInput>
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