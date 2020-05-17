import React from 'react'
import {} from 'react-native'
import {StoreContext} from '../../contexts/StoreContext'
export default class UpdateProduct extends React.Component{
    static  navigationOptions = ({ navigation }) => {
        return {
            title: 'Cập nhật',
        };
    }
    render(){
        <StoreContext.Consumer>
            
        </StoreContext.Consumer>
    }

}