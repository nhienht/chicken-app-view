import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import {StoreContext} from '../../contexts/StoreContext'
export default class Intro extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Chi tiết sản phẩm'
    };
  };
  
  render() {
    return (
        <StoreContext.Consumer>
            {({chooseProduct})=>
            
             <View style={styles.container}>
            
             <Text>Tên sản phẩm {chooseProduct.name}</Text>
             <Text>Loại sản phẩm {chooseProduct.type}</Text>
             <Text>Nhãn hiệu {chooseProduct.brand}</Text>
             <Text></Text>
             </View>
            }
        </StoreContext.Consumer>
     
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
