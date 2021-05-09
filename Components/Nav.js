import React , {Component } from 'react';
import { MenuContext } from './Menu'
import '../css/Nav.css';

class Nav extends Component {
    static contextType = MenuContext;
    render(){
        const {toggleMenu} = this.context;
        return (
            <MenuContext.Consumer>{(context) => {
                const border_color = context.isMenu;
             return(

                    <nav className="flex-between">
                        <div className="flex">
                        <button onClick={toggleMenu} style={{border: `2px solid ${border_color ? '#D95F42' : 'transparent'}`}} id="menu" className="menu flex column">
                            <div style={{width: `${border_color ? '16px' : '20px'}` , marginRight: `${border_color ? '2px' : '0'}`}} className="menu_line"></div>
                            <div style={{width: `${border_color ? '7px' : '20px'}` , marginRight: `${border_color ? '12px' : '0'}`}} className="menu_line"></div>
                            <div style={{width: `${border_color ? '16px' : '20px'}` , marginRight: `${border_color ? '2px' : '0'}`}} className="menu_line"></div>
                            <div style={{display: `${border_color ? 'block' : 'none'}`}} className="tri"></div>
                        </button>
                        <div className="logo"></div>
                        </div>            
                        <div className="btn">Connect</div>
                    </nav>
                    )
            }}</MenuContext.Consumer>
                )
    }
}


export default Nav
