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
      categories: [
        { id: 1, name: "Thuốc", price: "50k", quantity: 10, Image: anh1, des: '1234567890', store: 'DCD', type: "aa" },
        { id: 2, name: "Thức ăn", price: "100k", quantity: 10, Image: anh1,des: '1234567890', store: 'DCD',type: "aa"  },
        { id: 3, name: "Thuốc", price: "50k", quantity: 10, Image: anh1, des: '1234567890', store: 'DCD' ,type: "aa" },
        { id: 4, name: "Thức ăn", price: "100k", quantity: 20, Image: anh1,des: '1234567890', store: 'DCD',type: "aa"  },
        { id: 5, name: "Thuốc", price: "50k", quantity: 10, Image: anh1, des: '1234567890', store: 'DCD',type: "aa"  },
        { id: 6, name: "Thức ăn", price: "100k", quantity: 20, Image: anh1, des: '1234567890', store: 'DCD',type: "aa"  },
        { id: 7, name: "Thuốc", price: "50k", quantity: 10, Image: anh1, des: '1234567890', store: 'DCD',type: "aa"  },
        { id: 8, name: "Thức ăn", price: "100k", quantity: 20, Image: anh1, des: '1234567890', store: 'DCD',type: "aa"  }
      ]
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Cửa hàng',
      headerRight: <ActionBarImage onPress={() => navigation.navigate("Goods")} />
                    <Text>1</Text>
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
