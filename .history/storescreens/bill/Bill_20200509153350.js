import React from 'react'
import { View, Text } from 'react-native'

export default class Bill extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            categories:[
                {
                    id: '1', 
                    username: "nhien", 
                    products: [
                        {
                            id: 1,
                            quantity: 10
                        },
                        {
                            id: 2,
                            quantity: 10
                        }
                    ],
                    total_price: "100",
                    address: "can tho",
                    phonenumber: "1234567890",
                    status: 0,
                    date: "13-12"
                }
            ]
            }

    }
    render() {
        return (
            <View>
                <Text>a</Text>
            </View>
        )

    }
}