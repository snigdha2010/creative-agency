import React from 'react';
import NavBar from '../NavBar/NavBar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';

const Header = () => {
    return (
        <div className='header-bacground'>
            <NavBar/>
            <HeaderMain/>
        </div>
    );
};

export default Header;