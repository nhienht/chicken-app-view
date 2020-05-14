import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ProdcutItemInStore from '../../components/ProdcutItemInStore'
export default class BillDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            <View>
                <View>
                    <Text>Tên khách hàng</Text>
                    <Text>Địa chỉ</Text>
                    <Text>Số điện thoại</Text>
                    <Text>Ngày đặt hàng</Text>
                </View>
                <FlatList
                    data={categories}
                    renderItem={({ item }) =>
                        <ProductItem
                            category={item}

                        />}
                    keyExtractor={item => `${item.id}`}
                />
                <View>

                </View>
            </View>
        )
    }
}