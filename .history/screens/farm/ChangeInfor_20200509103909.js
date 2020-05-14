import React from 'react';
import { StyleSheet, View, TextInput,  Text} from 'react-native';
import { FarmContext } from '../../contexts/FarmContext'
export default function FarmItem(props) {

    return (
      <FarmContext.Consumer>
          {({farmItem})=> 
          <View>
          <Text style={styles.title}>Lứa gà:</Text>
          <TextInput value={farmItem.id}></TextInput>
          <Text style={styles.text}>- Tên giống gà:</Text>
          <TextInput value={farmItem.spName}></TextInput>
          <Text style={styles.text}>- Tiêm vaccinate:</Text>
          <TextInput value={farmItem.isVaccinate}></TextInput>
          <Text style={styles.text}>- Ngày nhập về:</Text>
          <TextInput value={farmItem.date}></TextInput>
          <Text style={styles.text}>- Nguồn gốc:</Text>
          <TextInput value={farmItem.source}></TextInput>
          <Text style={styles.text}>- Số lượng:</Text>
          <TextInput value={farmItem.quantity}></TextInput>
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
  
});
