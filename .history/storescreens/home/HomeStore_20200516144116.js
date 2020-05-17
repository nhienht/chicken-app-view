import React from 'react'
import {FlatList } from 'react-native'
import icon from '../../assets/icon.png'
import ProductItem from '../../components/ProdcutItemInStore'
import {StoreContext} from '../../contexts/StoreContext'

export default class HomeStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:[
              
            ]
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Sản phẩm',
        };
      };

    render(){
        const { navigation } = this.props;
        const { categories } = this.state;
        return(
            <StoreContext.Consumer>
                {({allproduct})=>
                 <FlatList
                 data={allproduct}
                 renderItem={({ item }) =>
                     <ProductItem
                         category={item}
                        
                     />}
                 keyExtractor={item => `${item.id}`}
             />
                }
            </StoreContext.Consumer>
           
        )
    }

}