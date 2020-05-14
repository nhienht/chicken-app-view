import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Order extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Đặt hàng'
    };
  };
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.infor}>
        <Text>Name  - SDT </Text>
        <Text>Địa chỉ</Text>
        </View>
        <View style={styles.order}>
        <Text>Ten sp, Gia</Text>
        </View>
        <View style={styles.total}>
        <Text> Tong tien </Text>
        </View>
        <View style={{ flex: 1, justifyContent:'flex-start' }}>
                    <TouchableOpacity style={styles.button}>
                        <Text>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop:20,
    
  },
  button: {
    position: 'absolute',
    width: '90%',
    height: 40,
    backgroundColor: '#297',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0
    
},
});
