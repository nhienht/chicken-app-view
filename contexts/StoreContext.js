import React from 'react'
import Axios from 'axios';

export const StoreContext = React.createContext();
export class StoreProvider extends React.Component{
    constructor(prop) {
        super(prop);
        this.state = {
            bills:[
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
            ],
            chooseBill: null,
            products: [],
            allproduct:[]

        }
        this.chooseToBill = this.chooseToBill.bind(this);
        this.getProduct = this.getProduct.bind(this)
        
    }
    chooseToBill(bill){
        this.setState({
            products: []
        })
        for (i of bill.products){
            
            Axios.get(`user/product/getProducts?id=${i.id}`)
            .then(res => {
                res.data[0].quantity = i.quantity
                this.setState({
                products: [...this.state.products, res.data[0]]
            })} )
        }
        this.setState({
            chooseBill: bill,
        })
    }
    getProduct(){
        Axios.get(`user/product/getProducts`)
        .then(res => {
            this.setState({
                allproduct: res.data
            })
        })
    }
    componentDidMount(){
        this.getProduct()
    }
    render(){
        return(
            <StoreContext.Provider value={{
                bills: this.state.bills,
                chooseBill: this.state.chooseBill,
                products: this.state.products,
                allproduct: this.state.allproduct,
                chooseToBill: this.chooseToBill,
                getProduct: this.getProduct
            }}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}