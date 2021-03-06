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
           <Text> Description </Text>
           <Text>Price</Text>
           <Text>Information Store </Text>
           <TouchableOpacity activeOpacity={0.5}>
           <Button title={'Chọn mua'}/>
           </TouchableOpacity>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:10,  
    
  },
  image:{
      width:350,
      height:350,
      alignSelf: 'center',
  },
  des:{
    fontSize: 20
  },
  price:{

  },
  infor:{

  }

});
