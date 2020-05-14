import React from 'react'
export const FarmContext = React.createContext();
export class FarmProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            farmItem: null
        }
        this.chooseToChicken = this.chooseToChicken.bind(this);
        this.onChange = this.onChange.bind(this)
    }


    chooseToChicken(chicken) {
        this.setState({
            farmItem: chicken
        })
    }
    onChange(e){
       if(this.state.farmItem){
           var chicken = this.state.farmItem
           
          
         
           this.setState({
            chicken= e.target.value
           })
       }
    }

    render() {
        return (
            <FarmContext.Provider value={{
                farmItem: this.state.farmItem,
                chooseToChicken: this.chooseToChicken,
                onChange: this.onChange
            }}>
                {this.props.children}
            </FarmContext.Provider>
        )
    }
}
