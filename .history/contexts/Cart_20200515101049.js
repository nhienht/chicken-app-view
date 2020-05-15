import React from 'react'

export const CartContext = React.createContext();
export class CartProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            chooseProduct: null,
            Count: 0,
            Total: '0',
            ly: 0,
            lx: 0
            
        };
        this.addToCart = this.addToCart.bind(this);
        this.chooseToProduct = this.chooseToProduct.bind(this);
        this.changeUnit = this.changeUnit.bind(this);
        this.removeItem = this.removeItem.bind(this);
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
                Count: this.state.Count + 1,
                Total: JSON.stringify(JSON.parse(this.state.Total) + JSON.parse(item.price))
            })
        }
        else {
            this.setState((prevState) => {
                return {
                    cartItems: prevState.cartItems.concat({ ...item, units: 1 }),
                    Count: this.state.Count + 1,
                    Total: JSON.stringify(JSON.parse(this.state.Total) + JSON.parse(item.price))
                };
            });
        }
    }

    chooseToProduct(product) {
        this.setState({
            chooseProduct: product
        })
    }

    changeUnit(value, item) {
        const existItem = this.state.cartItems.filter(x => x.id == item.id)
        const withoutItem = this.state.cartItems.filter(x => x.id != item.id)
        const updateItem = {
            ...existItem[0], units: value
        }

        let Count = this.state.Count
        let Total = this.state.Total

        if (value < existItem[0].units) {
            Count -= 1,
            Total =JSON.stringify(JSON.parse(this.state.Total) - JSON.parse(item.price))
        } else {
            Count += 1,
            Total =JSON.stringify(JSON.parse(this.state.Total) + JSON.parse(item.price)) 
        }

        this.setState({
            cartItems: [...withoutItem, updateItem],
            Count
        })
    }

    removeItem(item){
        const withoutItem = this.state.cartItems.filter(x => x.id != item.id)
        const count = this.state.cartItems.filter(x => x.id == item.id)[0].units 
        this.setState({
            cartItems: withoutItem,
            Count : this.state.Count - count,
            Total : JSON.stringify(JSON.parse(this.state.Total) - JSON.parse(item.price*count))
        })
    }

    order(){
        await navigator.geolocation.getCurrentPosition(position => this.setState({
            ly : position.coords.latitude,
            lx: position.coords.longitude
        }))
        console.log(ly , lx)
    }


    render() {
        return (
            <CartContext.Provider value={{
                cartItems: this.state.cartItems,
                chooseProduct: this.state.chooseProduct,
                Count: this.state.Count,
                Total: this.state.Total,
                addToCart: this.addToCart,
                chooseToProduct: this.chooseToProduct,
                changeUnit: this.changeUnit,
                removeItem : this.removeItem
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}