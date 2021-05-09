import React, { createContext, Component } from 'react';

export const MenuContext = createContext();

class MenuProvider extends Component {
    state = { 
        isMenu: false
     }
     toggleMenu = () => {
         this.setState({isMenu: !this.state.isMenu})
     }
    render() { 
        return ( 
            <MenuContext.Provider value={{...this.state , toggleMenu : this.toggleMenu}} >
            {this.props.children}
            </MenuContext.Provider>
         );
    }
}
 
export default MenuProvider;
