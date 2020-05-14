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