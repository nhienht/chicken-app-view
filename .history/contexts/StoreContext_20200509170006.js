import React from 'react'

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
            chooseBill: null
        }
        
    }
    chooseToBill(bill){
        this.setState({
            chooseBill: bill
        })
    }
    render(){
        return(
            <StoreContext.Provider alue={{
                bills: this.state.bills,
                chooseBill: this.state.chooseBill,
                chooseToBill: this.chooseToBill
            }}
            >
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}