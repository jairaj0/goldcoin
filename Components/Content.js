import React , {Component } from 'react';
import { MenuContext } from './Menu'
import Opt from './Opt';
import { HiHome } from 'react-icons/hi';
import { BsArrowLeftRight } from 'react-icons/bs';
import { HiOutlineSun , HiOutlineMoon , HiClipboardList } from 'react-icons/hi';
import { IoTicketOutline , IoPricetagsOutline } from 'react-icons/io5';
import { FaShapes , FaMapSigns } from 'react-icons/fa';
import { AiOutlineShop , AiOutlineSafety } from 'react-icons/ai';
import { SiReadthedocs } from 'react-icons/si';
import { GoInfo } from 'react-icons/go';
import '../css/Content.css';
import LeftPrice from './LeftPrice';

class Content extends Component{
    render(){
        return (
            <MenuContext.Consumer>{(context) => {
                    const left_width = context.isMenu;
                 return(
                <div style={{width: `${left_width ? '90px' : '238px'}` , height: `${left_width ? 'calc(100vh - 140px)' : 'calc(100vh - 180px)'}` }} className="left_opt">
                <Opt icon={<HiHome className="icon" />} title='Home' />
                <Opt icon={<BsArrowLeftRight className="icon" />} title='Trade' />
                <Opt icon={<HiOutlineSun className="icon" />} title='Farm' />
                <Opt icon={<HiOutlineMoon className="icon" />} title='Moon Factory' />
                <Opt icon={<IoTicketOutline className="icon" />} title='Lottery' />
                <Opt icon={<FaShapes className="icon" />} title='NFT Marketplace (Coming Soon)' />
                <Opt icon={<AiOutlineShop className="icon" />} title='Partnership' />
                <Opt icon={<FaMapSigns className="icon" />} title='RoadMap' />
                <Opt icon={<SiReadthedocs className="icon" />} title='Docs' />
                <Opt icon={<AiOutlineSafety className="icon" />} title='Audit by TechRate' />
                <Opt icon={<AiOutlineSafety className="icon" />} title='Audit by AnChain' />
                <Opt icon={<IoPricetagsOutline className="icon" />} title='Price Chart' />
                <Opt icon={<GoInfo className="icon" />} title='Info' />
                <Opt icon={<HiClipboardList className="icon" />} title='Listings' />
                <LeftPrice />
            </div>
            )
            }}</MenuContext.Consumer>
        )
    }
}

export default Content
