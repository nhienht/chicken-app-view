import React from 'react'
import Axios from 'axios';
import { AsyncStorage } from 'react-native';

export const StoreContext = React.createContext();
export class StoreProvider extends React.Component{
    constructor(prop) {
        super(prop);
        this.state = {
            bills: [],
            chooseBill: null,
            allproduct:[]
        }
        this.chooseToBill = this.chooseToBill.bind(this);
        this.getProduct = this.getProduct.bind(this)   
    }

    chooseToBill(bill){
        this.setState({
            chooseBill: bill,
        })
    }

    getProduct(id){
        Axios.get(`user/product/getProducts?store=${id}`)
            .then(res => {
                this.setState({
                    allproduct: res.data
                })
            })
    }

    getBills(id){
        Axios.get(`store/bill/getBills?storeId=${id}`)
            .then(res => {
                this.setState({
                    bills: res.data
                })
            })
    }

    componentDidMount(){
        AsyncStorage.getItem("id").then(res => {
            this.getProduct(res)
            this.getBills(res)
        })
    }
    
    render(){
        return(
            <StoreContext.Provider value={{
                bills: this.state.bills,
                chooseBill: this.state.chooseBill,
                allproduct: this.state.allproduct,
                chooseToBill: this.chooseToBill,
                getProduct: this.getProduct
            }}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}