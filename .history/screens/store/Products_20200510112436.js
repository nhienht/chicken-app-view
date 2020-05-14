import React from 'react';
import { StyleSheet, FlatList, View, Text, Image } from 'react-native';
import ProductItems from '../../components/ProductItems';
import anh1 from '../../assets/conga.jpg';
import ActionBarImage from '../store/ActionBarImage'
import { CartContext } from '../../contexts/Cart'
import axios from 'axios';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    axios.get('/user/product/getProducts')
      .then((res) => this.setState({ categories: res.data }))
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Cửa hàng',
      headerRight: <ActionBarImage onPress={() => navigation.navigate("Goods")} />

    };
  };

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
   // console.log(categories)
    if (categories.length == 0) {
      return (
        <View>
          <Text style={styles.text}>
            Không có sản phẩm
          </Text>
        </View>
      )
    } else {
      return (
        <CartContext.Consumer>
          {
            ({ chooseToProduct }) => (
              <FlatList
                data={categories}
                numColumns={2}
                renderItem={({ item }) => {
                  return (
                    <ProductItems
                      category={item}
                      onPress={() => {
                        navigation.navigate('Product');
                        chooseToProduct(item)
                      }}
                    />)
                }}

                keyExtractor={item => `${item.id}`}
              />
            )
          }
        </CartContext.Consumer>
      );
    }

  }
}
const styles = StyleSheet.create({
  text:{
    fontSize: 30,
    color: '#363',
    textAlign: 'center',
    top: 100
    
  }
})
