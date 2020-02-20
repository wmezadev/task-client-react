import React from 'react';

const TopBar = () => {
    return (
        <header className="app-header">
            <p className="user-name">Hello <span>William Meza</span></p>

            <nav className="main-nav">
                <a href="#!">Log out</a>
            </nav>
        </header>
    );
}

export default TopBar;