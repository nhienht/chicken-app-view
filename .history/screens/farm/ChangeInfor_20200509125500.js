import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Button } from 'react-native';
import { FarmContext } from '../../contexts/FarmContext'
export default function FarmItem(props) {
  return (
    <FarmContext.Consumer>
      {({ onChange, farmItem }) =>
        <View>
          <Text style={styles.title}>Lứa gà:</Text>
          <Text style={styles.text}>- Tên giống gà:</Text>
          <TextInput style={styles.input} value={farmItem.spName} onChange={(e) => onChange('spName')}
          ></TextInput>

          <Text style={styles.text}>- Tiêm vaccinate:</Text>
          <TextInput style={styles.input} value={farmItem.isVaccinate}></TextInput>

          <Text style={styles.text}>- Ngày nhập về:</Text>
          <TextInput style={styles.input} value={farmItem.date}></TextInput>

          <Text style={styles.text}>- Nguồn gốc:</Text>
          <TextInput style={styles.input} value={farmItem.source}></TextInput>

          <Text style={styles.text}>- Số lượng:</Text>
          <TextInput style={styles.input} value={farmItem.quantity}></TextInput>
          <TouchableOpacity activeOpacity={0.5} onPress={() => onChange(farmItem)}>
            <Button title='Cập nhật'>
            </Button>
          </TouchableOpacity>
        </View>
      }
    </FarmContext.Consumer>

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
  text:{
    fontSize: 16
  },
  input:{
    borderColor:'#ddd',
    borderWidth: 1,
    margin: 5
  }

});
