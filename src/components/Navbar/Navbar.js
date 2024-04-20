import React, { useState } from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const [CloseNav, setCloseNav] = useState(true);
    const handleCloseNav = () =>{
            setCloseNav(false);
    }
    return (
        <div className='navbar-main' style={{ display: CloseNav ? 'block' : 'none' }}>
            <div className='navbar'>
                <div className='logo-navbar'>
                    <CloseIcon  onClick={handleCloseNav} />
                    <Link to="">
                        <img src={require('../../assets/images/[Cell] Logo.png')} alt='logo' />
                    </Link>
                </div>
                <div className='navbar-search'>
                    <SearchIcon />
                    <input placeholder='Search products...' />
                </div>
                <div className='navbar-item'>
                    <ul>
                        <li>
                            <Link to="/">
                                <span className='nav-home'>HOME</span>
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
                <div className='nav-change'>
                    <span>$</span>
                    <form action='#'>
                        <select>
                            <option value="true" className='text-change'>USD</option>
                            <option value="true" className='text-change'>EURO</option>
                        </select>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
