import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


export default function FarmItem(props) {
  const { category } = props;
  return (
    <View>
      <View style={styles.infor}>
      <Text style={styles.title}>Lứa gà : {category.id} </Text>
      <Text style={styles.text}>- Tên giống gà: {category.spName}</Text>
      <Text style={styles.text}>- Tiêm vaccinate: {category.isVaccinate} </Text>
      <Text style={styles.text}>- Ngày nhập về: {category.date}</Text>
      <Text style={styles.text}>- Nguồn gốc: {category.source}</Text>
      <Text style={styles.text}>- Số lượng: {category.quantity}</Text>

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
    fontSize: 16,
    padding: 2
  }
})