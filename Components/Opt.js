import React , {Component } from 'react';
import { MenuContext } from './Menu'
import "../css/Opt.css";

class Opt extends Component {
  render() {
    return (
        <MenuContext.Consumer>{(context) => {
            const display = context.isMenu;
         return(
      <div className="flex opt">
        {this.props.icon}
        <p
          style={{ display: `${display ? "none" : "block"}` }}
          className="left_title"
        >
          {this.props.title}
        </p>
      </div>
      )
            }}</MenuContext.Consumer>
    );
  }
}

export default Opt;

