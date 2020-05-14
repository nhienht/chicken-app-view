import React from 'react';
import { StyleSheet, FlatList, View, Text, Image } from 'react-native';
import ProductItems from '../../components/ProductItems';
import anh1 from '../../assets/conga.jpg';
import ActionBarImage from '../store/ActionBarImage'
import { CartContext } from '../../contexts/Cart'

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount(){
    fetch('https://14d56d8d.ngrok.io/user/product/getProducts')
    .then((response) => response.json())
    .then((data) => this.setState({categories: data}))
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
    console.log(categories)
    return (
      <CartContext.Consumer>
        {
          ({ chooseToProduct }) => (
            <FlatList
              data={categories}
              numColumns={2}
              renderItem={({ item }) => {
                return(
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
