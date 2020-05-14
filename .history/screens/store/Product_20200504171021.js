import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import img from '../../assets/conga.jpg'

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

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop:10,  
    
  },
  image:{
      width:300,
      height:300,
      alignSelf: 'center',
      
      
  }
});
