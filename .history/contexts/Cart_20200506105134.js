import React from 'react'

export const CartContext  = React.createContext();
export class CartProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cartItems: [],
            chooseProduct:null
        };
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(product){
        console.log("Add" , product)
        this.setState({
            cartItems: this.state.cartItems.concat(product)
        });
    }
    chooseToProdcut(product){
        this.setState({
            chooseProduct: product
        })
    }

    

    render(){
        return (
            <CartContext.Provider value={{
                cartItems : this.state.cartItems,
                chooseProduct: this.state.chooseProduct,
                addToCart: this.addToCart,
                chooseToProduct: this.chooseToProdcut,

            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}