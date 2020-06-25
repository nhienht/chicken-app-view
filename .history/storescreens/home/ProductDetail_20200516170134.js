import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { StoreContext } from '../../contexts/StoreContext'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class Intro extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Chi tiết sản phẩm'
        };
    };

    render() {
        return (
            <StoreContext.Consumer>
                {({ chooseProduct }) =>
                    <View>
                        <Text style={styles.title}>Tên sản phẩm: {chooseProduct.name}</Text>
                        <Image style={styles.img} source={{ uri: `https://150895e2.ngrok.io/images?image=${chooseProduct.images}` }}></Image>
                        <Text style={styles.price}>Giá sản phẩm: {chooseProduct.price}</Text>
                        <Text style={styles.types}>Loại sản phẩm: {chooseProduct.types}</Text>
                        <Text style={styles.quantity}>Số lượng: {chooseProduct.quantity}</Text>
                        <Text>Nhãn hiệu: {chooseProduct.brand}</Text>
                        
                        <Text>Nguồn: {chooseProduct.source}</Text>
                        
                        <Text>Mô tả: {chooseProduct.description}</Text>
                    </View>
                }
            </StoreContext.Consumer>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 20,
    },
    img: {
        height: hp("35%"),
        width: wp("55%"),
        alignSelf: 'center'
    },
    title:{
        textAlign: 'center',
        fontSize: 30,
        color:"#363",
        
    },
    types:{
        fontSize: 22,
        
    },
    price:{
        color:'#f00',
        fontSize: 24,
    },
    quantity:{
        fontSize: 22,
    }
});
