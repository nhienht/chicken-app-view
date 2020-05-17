import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { StoreContext } from '../../contexts/StoreContext'
export default class UpdateProduct extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Cập nhật',
        };
    }
    render() {
        return (
            <StoreContext.Consumer>
                {({ chooseProduct, onChange }) =>
                    < View >
                        <Text>Tên sản phẩm:</Text>
                        <TextInput value={chooseProduct.name} onChange={(e) => onChange(e, 'spName')}></TextInput>
                    </View>
                }

            </StoreContext.Consumer>

        )

    }

}