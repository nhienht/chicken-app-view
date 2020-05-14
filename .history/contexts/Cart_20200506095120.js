import React from 'react'

export const CartContext  = React.createContext();
export class CartProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cartItems: []
        };
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(product){
        this.setState({
            cartItems: this.state.cartItems.concat(product)
        });
    }

    render(){
        return (
            <ProductContext.Provider value={{
                cartItems : this.state.cartItems,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}