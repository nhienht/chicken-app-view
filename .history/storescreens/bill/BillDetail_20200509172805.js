import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
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
                        <Text style={styles.title}>Thông tin khách hàng:</Text>
                    <View style={styles.component}>
                        <Text>Tên khách hàng:  {chooseBill.username}</Text>
                        <Text>Địa chỉ: {chooseBill.address}</Text>
                        <Text>Số điện thoại: {chooseBill.phonenumber}</Text>
                        <Text>Ngày đặt hàng: {chooseBill.date}</Text>
                    </View>
                    <Text style={styles.title}>Thông tin sản phẩm:</Text>
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
const styles = StyleSheet.create({
    component:{
        borderColor: '#ddd',
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10
    },
    title:{
        fontSize: 18,
        padding: 5
    }
})
