import React from 'react';
import { StyleSheet, View, TextInput,  } from 'react-native';

export default function FarmItem(props) {

    return (
  <View>
     <Text style={styles.text}>- Tên giống gà:</Text>
        <Text style={styles.text}>- Tiêm vaccinate:</Text>
        <Text style={styles.text}>- Ngày nhập về:</Text>
        <Text style={styles.text}>- Nguồn gốc:</Text>
        <Text style={styles.text}>- Số lượng:</Text>
  </View>   
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBEEB9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 40
  },
  
});
