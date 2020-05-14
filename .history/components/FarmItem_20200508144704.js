import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import icon from '../assets/chinhsua.png'

export default function FarmItem(props) {
    const { category, onPress } = props;
    return (
        <View>
        <View style={styles.infor}>
          <View style={styles.titles}>
          <Text style={styles.title}>Thông tin trang trại </Text>
          <TouchableOpacity activeOpacity={0.5}>
          <Image source={icon} style={styles.icon}></Image> 
          </TouchableOpacity>
          
          </View>
          <Text>Tên trang trại: {category.name}</Text>
          <Text>Loại hình:  </Text>
          <Text>Địa chỉ</Text>
        </View>
        <View style={styles.infor}>
        <View style={styles.titles}>
          <Text style={styles.title}>Chi tiết trang trại</Text>
          <Image source={icon} style={styles.icon}></Image>  
          </View>
          <Text>Số lượng gia cầm: </Text>
          <Text>Số lượng gia cầm bình thường: </Text>
          <Text>Số lượng thức ăn</Text>
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
    infor:{
      backgroundColor:'#eee',
      padding: 5,
      margin: 5
  
    },
    titles:{
      borderBottomColor: '#ccc',
      borderBottomWidth: 1, 
      flexDirection: 'row',
      justifyContent:'space-between'
      
    },
    icon:{
      height: 30,
      width: 30,
    },
    title:{
      fontSize: 20,
      color: '#00f',
      
    }
  })