import React from 'react'

export const CartContext = React.createContext();
export class CartProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            chooseProduct: null,
            Count: 0
        };
        this.addToCart = this.addToCart.bind(this);
        this.chooseToProduct = this.chooseToProduct.bind(this);
    }

    // addToCart(product){
    //     console.log("Add" , product)
    //     this.setState({
    //         cartItems: this.state.cartItems.concat(product)
    //     });
    // }

    addToCart(item) {
        const existItem = this.state.cartItems.filter(x => x.id === item.id);
        if (existItem.length > 0) {
            const withoutItem = this.state.cartItems.filter(x => x.id !== item.id);
            const updateItem = {
                ...existItem[0], units: existItem[0].units + 1
            }

            this.setState({
                cartItems: [...withoutItem, updateItem],
                Count: this.state.Count + 1
            })
        }
        else {
            this.setState((prevState) => {
                return {
                    cartItems: prevState.cartItems.concat({ ...item, units: 1 }),
                    Count: this.state.Count + 1
                };
            });
        }

        console.log(this.state.cartItems)
    }

    chooseToProduct(product) {
        this.setState({
            chooseProduct: product
        })
    }



    render() {
        return (
            <CartContext.Provider value={{
                cartItems: this.state.cartItems,
                chooseProduct: this.state.chooseProduct,
                addToCart: this.addToCart,
                chooseToProduct: this.chooseToProduct,

            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}