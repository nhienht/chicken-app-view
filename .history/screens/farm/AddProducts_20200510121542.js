import React from 'react';
import { StyleSheet, FlatList, AsyncStorage, View, Text, TextInput } from 'react-native';
import RadioForm, { RadioButton } from 'react-native-simple-radio-button'

export default class AddProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      radio_props: [
        { label: 'Đã tiêm', value: 0 },
        { label: 'Chưa tiêm', value: 1 }
      ]
    }
  }

  render() {
    const {radio_props} = this.state
    return (
      <View>
        <Text>Thêm lứa gà mới</Text>
        <Text>Đã tiêm vaccinate hay chưa? </Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          onPress={(value) => {this.setState({value:value})}}
        />
        <Text>Ngày nhập về: </Text>
        <TextInput placeholder="nhập ngày"></TextInput>
        <Text>Nguồn gốc:</Text>
        <TextInput placeholder="nhập nơi cung cấp"></TextInput>
        <Text>Số lượng gia cầm: </Text>
        <TextInput placeholder="nhập số lượng"></TextInput>
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