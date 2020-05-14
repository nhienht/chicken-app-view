import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';

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
  logo:{
    width:160,
     height: 90,
     
    },
  text: {
    backgroundColor: 'rgba(62, 123, 60, 0.3)',
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 1,
    elevation: 10,
    borderRadius: 10,
    fontSize: 18,
    marginTop: 20
    
  },
  icon:{
    height: 30,
    width: 30
  }
});
