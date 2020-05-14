import React from 'react'
import { FlatList } from 'react-native'
import BillItem from '../../components/BillItem'
import {StoreContext} from '../../contexts/StoreContext'
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
                },
                {
                    id: '2',
                    username: "nhien",
                    products: [
                        {
                            id: 3,
                            quantity: 10
                        },
                        {
                            id: 4,
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

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Hóa đơn',
        };
      };
    render() {
        const {navigation} = this.props;
        const {categories} = this.state;
        return (
            <StoreContext.Consumer>
                {({chooseToBill, Bill}) =>
                <FlatList
                data={Bill}
                renderItem={({ item }) =>
                    <BillItem
                        category={item}
                       onPress = {()=> {
                           navigation.navigate('BillDetail');
                           chooseToBill(item)
                        }}
                                
                    />}
                keyExtractor={item => `${item.id}`}
            />
                }
            </StoreContext.Consumer>
            
        )

    }
}