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
                   <Text style={styles.text}>- Tên giống gà:</Text>
                   <TextInput style={styles.input} value={farmItem.spName} onChange={(e) => onChange(e, 'spName')}></TextInput>
         
                   <Text style={styles.text}>- Tiêm vaccinate:</Text>
                   <TextInput style={styles.input} value={farmItem.isVaccinate} onChange={(e) => onChange(e, 'isVaccinate')} ></TextInput>
         
                   <Text style={styles.text}>- Ngày nhập về:</Text>
                   <TextInput style={styles.input} value={farmItem.date} onChange={(e) => onChange(e, 'date')}></TextInput>
         
                   <Text style={styles.text}>- Nguồn gốc:</Text>
                   <TextInput style={styles.input} value={farmItem.source} onChange={(e) => onChange(e, 'source')}></TextInput>
         
                   <Text style={styles.text}>- Số lượng:</Text>
                   <TextInput style={styles.input} value={farmItem.quantity} onChange={(e) => onChange(e, 'quantity')}></TextInput>
                }

            </StoreContext.Consumer>

        )

    }

}