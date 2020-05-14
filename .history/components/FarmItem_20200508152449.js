import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


export default function FarmItem(props) {
  const { category } = props;
  return (
    <View>
      <View style={styles.infor}>
        <Text style={styles.title}>Thông tin trang trại </Text>
      
      <Text style={styles.text}>- Tên trang trại: {category.name}</Text>
      <Text style={styles.text}>- Loại hình: {category.type} </Text>
      <Text style={styles.text}>- Địa chỉ: {category.address}</Text>
      </View>
    <View style={styles.infor}>
      <Text style={styles.title}>Chi tiết trang trại</Text>
      <Text style={styles.text}>- Số lượng gia cầm: {category.soluong}</Text>
      <Text style={styles.text}>- Số lượng gia cầm bị bệnh: {category.benh}</Text>
      <Text style={styles.text}>- Số lượng thức ăn: {category.thucan}</Text>

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
    margin: 5,
    fontSize: 18

  },
  icon: {
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 20,
    color: '#00f',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    textAlign:'center'
  },
  text:{
    fontSize: 16
  }
})