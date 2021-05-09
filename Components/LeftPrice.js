import React, { Component } from 'react';
import { FaTelegram , FaTwitter } from 'react-icons/fa';
import { HiOutlineMoon , HiOutlineSun } from 'react-icons/hi';
import { AiOutlineGlobal } from 'react-icons/ai';
import '../css/LeftPrice.css'

class LeftPrice extends Component {
    render() { 
        return ( 
            <div className="leftPrice">
            <div className="leftPrice_first flex-between">
                <span className="left_price"><span className="price_logo"></span>$0.171</span>
                <span className="social_links">
                    <a href="/"><FaTelegram /></a>
                    <a href="/"><FaTwitter /></a>
                </span>
            </div>
            <div className="setting flex-between">
                <div className="left_price_btn flex"><span><HiOutlineSun /></span><span className="slash">/</span><span><HiOutlineMoon /></span></div>
                <div className="left_price_btn flex "><span><AiOutlineGlobal /></span><span className="language">EN</span></div>
            </div>
            </div>
        );
    }
}
 
export default LeftPrice;