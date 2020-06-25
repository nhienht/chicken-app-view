import React from 'react'
import {View, Text} from 'react-native'
import {StoreContext} from '../../contexts/StoreContext'
export default class UpdateProduct extends React.Component{
    static  navigationOptions = ({ navigation }) => {
        return {
            title: 'Cập nhật',
        };
    }
    render(){
        <StoreContext.Consumer>
            {({onChange, chooseProduct})=>
            <View>
                <Text>{chooseProduct.name}</Text>
            </View>
            }
        </StoreContext.Consumer>
    }

}