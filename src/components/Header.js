import React from 'react';
import '../styles/Header.scss';

const Header = props => {
    return (
        <header className="App__header">
            <h1>Clara Dios</h1>
            <h2>front-end developer</h2>
            <a className="App_header_arrow" href="#about-me"><span className="arrow-icon">^</span></a>           
        </header>
    );
}

export default Header;