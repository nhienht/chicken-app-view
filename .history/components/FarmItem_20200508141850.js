import React from 'react';
import { StyleSheet, FlatList, View, Text, Image} from 'react-native';

export default function GoodsItem(props) {
    const { category, onPress } = props;
    return (
        <View style={styles.infor}>
        <View style={styles.titles}>
        <Text style={styles.title}>Thông tin trang trại</Text>
        <Image source={icon} style={styles.icon}></Image>  
        </View>
        <Text>Tên trang trại: </Text>
        <Text>Loại hình: </Text>
        <Text>Địa chỉ</Text>
      </View>
    );
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