import React, { Component } from 'react';
import { FaTelegram , FaTwitter } from 'react-icons/fa';
import { HiOutlineMoon , HiOutlineSun } from 'react-icons/hi';
import { AiOutlineGlobal , AiFillSetting } from 'react-icons/ai';
import { MenuContext } from './Menu';
import '../css/LeftPrice.css';

class LeftPrice extends Component {
    render() { 
        return ( 
            <MenuContext.Consumer>{(context) => {
                const display = context.isMenu;
             return(
            <div style={{width: `${display ? '90px' : '238px'}` , height: `${display ? '70px' : '110px'}`}} className="leftPrice">
                            
            <div style={{display: `${display ? 'flex' : 'none'}`}} className="setting_icon flex-center">
                    <div className="setting_btn flex-center">
                       <AiFillSetting />
                    </div>
                </div>


            <div style={{display: `${display ? 'none' : 'flex'}`}} className="leftPrice_first">
                <span className="left_price flex"><div className="price_logo"></div><div className="price">$0.6</div></span>
                <span className="social_links">
                    <a href="/"><FaTelegram /></a>
                    <a href="/"><FaTwitter /></a>
                </span>
            </div>
            <div style={{display: `${display ? 'none' : 'flex'}`}} className="setting">
                <div className="left_price_btn flex"><span><HiOutlineSun style={{marginTop: '5px'}} /></span><span style={{marginTop: '5px'}} className="slash">/</span><span><HiOutlineMoon style={{marginTop: '5px'}} /></span></div>
                <div className="left_price_btn flex "><span><AiOutlineGlobal style={{marginTop: '5px'}} /></span><span className="language">EN</span></div>
            </div>
            </div> )
            }}</MenuContext.Consumer>
        );
    }
}
 
export default LeftPrice;