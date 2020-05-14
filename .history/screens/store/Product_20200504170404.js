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
      <View>
           <Image style={styles.image} source={img}/>

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
  image:{
      width:300,
      height:300,
      alignItems: 'center'
  }
});
