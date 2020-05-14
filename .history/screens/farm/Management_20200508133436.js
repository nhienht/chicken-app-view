import React from 'react';
import { StyleSheet, FlatList, View, Text} from 'react-native';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
       
      
      ]
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quản lý',              
    };
  };

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <View>
        <View style={styles.infor}>
          <Text style={styles.title}>Thông tin trang trại</Text>
          <Text>Tên trang trại: </Text>
          <Text>Loại hình: </Text>
          <Text>Địa chỉ</Text>
        </View>
        <View style={styles.infor}>
          <Text style={styles.title}>Chi tiết trang trại</Text>
          <Text>Số lượng gia cầm: </Text>
          <Text>Số lượng gia cầm bình thường: </Text>
          <Text>Số lượng thức ăn</Text>
        </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BBEEB9",
    height: 700,
    paddingTop: 40,
    paddingLeft: 26,
    paddingRight: 26
  },
  infor:{
    backgroundColor:'#eee',
    padding: 5,
    margin: 5

  },
  title:{
    fontSize: 20,
    textAlign: 'center',
    color: '#00f'
  }
})