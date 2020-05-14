import React from 'react'

export const CartContext = React.createContext();
export class CartProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            chooseProduct: null
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
        // eslint-disable-next-line arrow-body-style
        const existItem = this.state.CartItems.filter(x => x._id === item._id);
        if (existItem.length > 0) {
            const withoutItem = this.state.CartItems.filter(x => x._id !== item._id);
            const updateItem = {
                ...existItem[0], units: existItem[0].units + 1
            }

            this.setState({
                CartItems: [...withoutItem, updateItem],
                Count: this.state.Count + 1
            })
        }
        else {
            this.setState((prevState) => {
                return {
                    CartItems: prevState.CartItems.concat({ ...item, units: 1 }),
                    Count: this.state.Count + 1
                };
            });
        }

        this.related(item)
    }

    related(item) {
        //find type of item to related
        let type = item.type;
        Axios.get('/api/products/all')
            .then((res) => {
                const data = res.data.products.filter((x) => {
                    return x.type === type
                });

                const randomIndex = Math.round(Math.random() * (data.length - 4));
                this.setState({
                    Related: data.slice(randomIndex, randomIndex + 4),
                })
            });
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