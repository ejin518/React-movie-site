import React from 'react'
import {
    Link
  } from "react-router-dom";
import './Header.css';
import { useState } from "react";
import Dropdown from './Dropdown';

const Header = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const onClickHandler = () => {
        setClick((current) => (!current));
    }
    const onCloseMenu = () => {
        setClick((current) => (!current));
    }

    const onMouseEnter = () => {
        setDropdown(true)
    };
    const onMouseLeave = () => {
        setDropdown(false)
    };
  return (
    <>
        <nav className='header'>
            <div className='inner'>
                <Link to='/' className='logoLink'>MOVIE</Link>
                <div className='menuIcon' onClick={onClickHandler}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'navi active' : 'navi'}>
                    <li>
                        <Link to='/' onClick={onCloseMenu}>Home</Link>
                    </li>
                    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/movies' onClick={onCloseMenu}>Movies</Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li>
                        <Link to='/about' onClick={onCloseMenu}>About</Link>
                    </li>
                    <li>
                        <Link to='/contact' onClick={onCloseMenu}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header