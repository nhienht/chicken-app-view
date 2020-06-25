import React from 'react'
import Axios from 'axios';
import { AsyncStorage, Alert } from 'react-native';

export const StoreContext = React.createContext();
export class StoreProvider extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            bills: [],
            chooseBill: null,
            allproduct: [],
            chooseProduct: {
                name: '',
                description: '',
                price: '0',
                quantity: 0,
                types: '',
                brand: '',
                source: '',
                storeId: -1
            }
        }
        this.chooseToBill = this.chooseToBill.bind(this);
        this.getProduct = this.getProduct.bind(this)
        this.chooseToProduct = this.chooseToProduct.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    chooseToBill(bill) {
        this.setState({
            chooseBill: bill,
        })
    }
    chooseToProduct(product) {
        this.setState({
            chooseProduct: product
        })
    }
    getProduct(id) {
        Axios.get(`user/product/getProducts?store=${id}`)
            .then(res => {
                this.setState({
                    allproduct: res.data
                })
            })
    }

    getBills(id) {
        Axios.get(`store/bill/getBills?storeId=${id}`)
            .then(res => {
                this.setState({
                    bills: res.data
                })
            })
    }

    componentDidMount() {
        AsyncStorage.getItem("id").then(res => {
            this.getProduct(res)
            this.getBills(res)
            const chooseProduct = this.state.chooseProduct
            chooseProduct.storeId = res 
            this.setState({
                chooseProduct
            })
        })

        console.log(this.state.allproduct.length)
    }

    deleteProduct() {
        Axios.get(`store/product/delete?id=${this.state.chooseProduct.id}`)
            .then(res => {
                if (res.data.success) { Alert.alert("Xóa thành công") }
                else {
                    Alert.alert("Xóa không được rồi nhe")
                }
                const withoutProduct = this.state.allproduct.filter(x => x.id != this.state.chooseProduct.id)
                this.setState({
                    allproduct: withoutProduct
                })
            })


    }

    updateProduct() {
        console.log("update")
    }

    onChange(e, name){
        console.log(e)
        if (this.state.chooseProduct) {
            var chooseProduct = this.state.chooseProduct
            chooseProduct[name] = e.nativeEvent.text
            this.setState({ chooseProduct })
        }
    }

    render() {
        return (
            <StoreContext.Provider value={{
                bills: this.state.bills,
                chooseBill: this.state.chooseBill,
                allproduct: this.state.allproduct,
                chooseProduct: this.state.chooseProduct,
                chooseToBill: this.chooseToBill,
                getProduct: this.getProduct,
                chooseToProduct: this.chooseToProduct,
                deleteProduct: this.deleteProduct,
                updateProduct: this.updateProduct,
                onChange: this.onChange

            }}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}