import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import icon from '../assets/chinhsua.png'

export default function FarmItem(props) {
  const { category, onPress } = props;
  return (
    <View>
      <View style={styles.infor}>
        <Text style={styles.title}>Thông tin trang trại </Text>
      
      <Text>Tên trang trại: {category.name}</Text>
      <Text>Loại hình: {category.type} </Text>
      <Text>Địa chỉ: {category.address}</Text>
      </View>
    <View style={styles.infor}>
      <Text style={styles.title}>Chi tiết trang trại</Text>
      <Text>Số lượng gia cầm: {category.soluong}</Text>
      <Text>Số lượng gia cầm bị bệnh: {category.benh}</Text>
      <Text>Số lượng thức ăn: {category.thucan}</Text>

    </View>
    </View>

    )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BBEEB9",
    height: 700,
    paddingTop: 40,
    paddingLeft: 26,
    paddingRight: 26
  },
  infor: {
    backgroundColor: '#eee',
    padding: 5,
    margin: 5

  },
  titles: {
   
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  icon: {
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 18,
    color: '#00f',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,

  }
})