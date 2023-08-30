import React from 'react';
import {
    Link
  } from "react-router-dom";
import { useState } from "react";
import { MenuItems } from './MenuItems';
import './Dropdown.css';

const Dropdown = () => {
    const [click, setClick] = useState(false);
    const onHandleClick = () => {
        setClick((current) => (!current))
    }
  return (
    <>
        <ul onClick={onHandleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default Dropdown