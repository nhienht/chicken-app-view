import React from 'react'
import { View, Text } from 'react-native'

export default class BillDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            <View>
                <Text>
                    
                </Text>
            </View>
        )
}
}