import React, { useState } from 'react';
import './NavMenu.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const NavMenu = () => {

    const [nightMode, setNightMode] = useState(false);

    return (
        <div className='nav-menu'>
            <nav className='navbar navbar-expand-lg bg-light'>
                <div className="container">
                    <a href="/" className="navbar-brand">NURA ALAM</a>
                    <ul className='navbar-nav ms-auto'>
                        <li><a className='nav-link' href="/">Home</a></li>
                        <li><a className='nav-link' href="#about">About</a></li>
                        <li><a className='nav-link' href="#services">Services</a></li>
                        <li><a className='nav-link' href="#portfolio">Portfolio</a></li>
                        <li><a className='nav-link' href="#contact">Contatct</a></li>
                        <li onClick={() => setNightMode(!nightMode)}>
                            { nightMode ? <FaSun className='mode-icon' /> : <FaMoon className='mode-icon' />}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavMenu;