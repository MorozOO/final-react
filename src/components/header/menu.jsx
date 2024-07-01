import React, { useContext } from 'react';
import "./menu.css"
import {  NavLink } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import classNames from 'classnames';
import { ThemeContext } from '../../contexts/ThemeContext';

const Menu = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <header className={classNames({dark: theme==='dark'})}>
            <nav>                
                <NavLink to="/puzlle16">Puzzle 4x4</NavLink>
                <NavLink to="/puzlle9">Puzzle 3x3</NavLink>
            </nav>
            <div className='mode' onClick={toggleTheme}>{theme === "light"? <DarkModeIcon /> : <LightModeIcon />} </div>
        </header>
    );
}

export default Menu;
