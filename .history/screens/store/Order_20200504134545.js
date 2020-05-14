import React from 'react'
import {View} from 'react-native'
import { render } from 'react-dom'

export default class Order extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Store'
        };
      };
    constructor(props){
        super(props);
    }
    render() {
  <View> hi</View>     
    }
    

}