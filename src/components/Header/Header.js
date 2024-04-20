import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
//import icon
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from '../Navbar/Navbar';
import appLogo from "../../assets/images/[Cell] Logo.png";
import cartLogo from "../../assets/images/Cart.svg";
import searchLogo from "../../assets/images/[Icon] user-line.svg";
const Header = () => {
    const [shownavbar, setshownacbar] = useState(false);
    const handleShowNavbar = () => {
        setshownacbar(!shownavbar);
    }
    return (
        <div className='header-main'>
            <div className='header-content'>
                <div className='header-box'>
                    <div className='first-header'>
                        <div className='header-logo'  >
                            <MenuIcon className='icon-menu' onClick={handleShowNavbar} />
                            <Link to="">
                                <img src={appLogo} alt='logo' />
                            </Link>
                        </div>
                        <div className='header-nav'>
                            <ul>
                                <li>
                                    <Link to="/">
                                        <span>HOME</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Producs">
                                        <span>PRODUCTS</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/About Us">
                                        <span>ABOUT US</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='header-button'>
                        <div className='change-money'>
                            <span>$</span>
                            <form action='#'>
                                <select>
                                    <option value="true" className='text-change'>USD</option>
                                    <option value="true" className='text-change'>EURO</option>
                                </select>
                            </form>
                        </div>
                        <div className='search-icon'>
                            <SearchIcon />
                        </div>
                        <div className='cart-icon'>
                            <img src={cartLogo} style={{
                                width: "40px !important",
                            }} alt='logo' />
                        </div>
                        <div className='user-icon'>
                            <img src={searchLogo} alt='logo' width={"24px"} />
                        </div>

                    </div>
                </div>
            </div>
            {shownavbar && <Navbar />}
        </div>

    );
}

export default Header;
