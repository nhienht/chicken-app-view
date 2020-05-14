import React from 'react';
import { StyleSheet, FlatList, AsyncStorage, View, Text, TextInput } from 'react-native';
import RadioForm, { RadioButton } from 'react-native-simple-radio-button'

export default class AddProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio_props: [
        { label: 'Đã tiêm', value: 0 },
        { label: 'Chưa tiêm', value: 1 }
      ]
    }
  }

  render() {
    const { radio_props } = this.state
    return (
      <View>
        <Text style={styles.title}>Thêm lứa gà mới</Text>
        <View style={styles.component}>
          <Text style={styles.text}>Đã tiêm vaccinate hay chưa? </Text>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            onPress={(value) => { this.setState({ value: value }) }}
          />
        </View>
        <View style={styles.component}>
          <Text style={styles.text}>Ngày nhập về: </Text>
          <TextInput placeholder="nhập ngày"></TextInput>
        </View>
        <View style={styles.component}>
          <Text style={styles.text}>Nguồn gốc:</Text>
          <TextInput placeholder="nhập nơi cung cấp"></TextInput>
        </View>
        <View style={styles.component}>
          <Text style={styles.text}>Số lượng gia cầm: </Text>
          <TextInput placeholder="nhập số lượng"></TextInput>
        </View>

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
  },
  title: {
    fontSize: 30
  },
  component:{
    borderColor: '#999',
    borderWidth: 1,
    margin: 5
  }
})