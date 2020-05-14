import React from 'react';
import { StyleSheet, View, Text,Image, Button } from 'react-native';
import img from '../../assets/conga.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Product extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Sản Phẩm'
    };
  };
  
  render() {
    return (
      <View style={styles.container}>
           <Image style={styles.image} source={img}/>
           <Text style={styles.des}> Description </Text>
           <Text style={styles.price}>Price</Text>
           <Text style={styles.infor}>Information Store </Text>
           <TouchableOpacity activeOpacity={0.5}>
           <Button style={styles.button} title={'Chọn mua'}/>
           </TouchableOpacity>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop:10,  
    
  },
  image:{
      width:350,
      height:350,
      alignSelf: 'center',
  },
  des:{
    fontSize: 20,
    padding: 5
  },
  price:{
    fontSize: 30,
    color: '#f00',
    padding: 5
  },
  infor:{
    fontSize: 18,
    color: '#777',
    padding: 5
  },
  button:{
      padding: 10,
      margin: 50,

  }

});
