import React from 'react';
import { StyleSheet, FlatList, AsyncStorage, View, Text, TextInput, Button } from 'react-native';
export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
        title: 'Thêm sản phẩm mới',
      
    };
}

  render() {
    const { radio_props } = this.state
    return (
      <View style={styles.container}>
         <View style={styles.component}>
          <Text style={styles.text}>Tên sản phẩm: </Text>
          <TextInput placeholder="nhập tên"></TextInput>
        </View>
        <View style={styles.component}>
          <Text style={styles.text}>Số lượng sản phẩm </Text>
        <TextInput placeholder="nhập số lượng"></TextInput>
        </View>
        <View style={styles.component}>
          <Text style={styles.text}>Thông tin sản phẩm: </Text>
          <TextInput placeholder="nhập thông tin"></TextInput>
        </View>
        <View style={styles.component}>
          <Text style={styles.text}>Giá sản phẩm:</Text>
          <TextInput placeholder="nhập giá"></TextInput>
        </View>
        <View style={styles.component}>
          <Text style={styles.text}>Nhà sản xuất: </Text>
          <TextInput placeholder="nhập NSX"></TextInput>
        </View>
        <View style={styles.component}>
          <Text style={styles.text}>Loại sản phẩm: </Text>  
            
        </View>
        <Button title="xong"></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 10
   },
  title: {
    fontSize: 30,
    color: '#363',
    textAlign: 'center',
    marginBottom: 10
  },
  text:{
    fontSize: 16,
    color: '#363'
  },
  component:{
    borderColor: '#999',
    borderWidth: 1,
    margin: 5
  }
})