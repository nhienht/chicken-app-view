import React from 'react'
import {FlatList } from 'react-native'
import icon from '../../assets/icon.png'
import ProductItem from '../../components/ProdcutItemInStore'
import {StoreContext} from '../../contexts/StoreContext'
import AddImage from '../../screens/farm/AddImage'

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
          headerRight: <AddImage onPress={()=> {navigation.navigate('AddProduct')}}
           />
        };
      };

    render(){
        const { navigation } = this.props;
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