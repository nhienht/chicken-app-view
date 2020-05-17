import React from 'react'
import { View, Text } from 'react-native'
import { StoreContext } from '../../contexts/StoreContext'
import { TextInput } from 'react-native-paper';
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