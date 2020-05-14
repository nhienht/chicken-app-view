import React from 'react'
export const FarmContext = React.createContext();
export class FarmProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            farmItem: null
        }
        this.chooseToChicken = this.chooseToChicken.bind(this)
    }


    chooseToChicken(chicken) {
        this.setState({
            farmItem: chicken
        })
    }
    render() {
        return (
            <CartContext.Provider value={{
                farmItem: this.state.farmItem,
                chooseToChicken: this.chooseToChicken
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}
