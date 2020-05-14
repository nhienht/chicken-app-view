import React from 'react'
export const FarmContext = React.createContext();
export class FarmProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            farmItem: null
        }
        this.chooseToChicken = this.chooseToChicken.bind(this);
    }


    chooseToChicken(chicken) {
        this.setState({
            farmItem: chicken
        })
    }
    onChange(e){
       if(this.state.farmItem){
           var chicken = this.state.farmItem
           chicken[e.target.name] = e.target.value
           this.setState({
               chicken
           })
       }
    }

    render() {
        return (
            <FarmContext.Provider value={{
                farmItem: this.state.farmItem,
                chooseToChicken: this.chooseToChicken
            }}>
                {this.props.children}
            </FarmContext.Provider>
        )
    }
}
