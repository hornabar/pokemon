import React from 'react';
import imgLogo from 'images/logo-pokemon.png';
import './header.css';

const Header = (props) => (
    <header className='header'>
        <div className='header__container'>
            <img className='header__logo' src={imgLogo} alt={'Pokemon App'} />
        </div>
    </header>
);

export default Header;
