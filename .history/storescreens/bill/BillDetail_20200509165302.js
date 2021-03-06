import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ProdcutItemInStore from '../../components/ProdcutItemInStore'
import {StoreContext} from '../../contexts/StoreContext'
export default class BillDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            <StoreContext.Consumer>
                {
                    ({chooseBill})=>
                    <View>
                    <View>
                        <Text>Tên khách hàng {chooseBill.username}</Text>
                        <Text>Địa chỉ</Text>
                        <Text>Số điện thoại</Text>
                        <Text>Ngày đặt hàng</Text>
                    </View>
                    <FlatList
                        data={categories}
                        renderItem={({ item }) =>
                            <ProdcutItemInStore
                                category={item}
                            />}
                        keyExtractor={item => `${item.id}`}
                    />
                    <Text>Tổng tiền: </Text>
                </View>
                }
            </StoreContext.Consumer>
           
        )
    }
}