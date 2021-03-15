import React from 'react';

function Nav() {
    
    function navSelected() {
        console.log('clicked')
    }

    return (
        <header className="flex-row justify-space-between px-2 bg-dark">
            <h2 className="my-2">
                <a href="/">
                    deckieDevs
                </a>
            </h2>
            <nav>
                <ul className="flex-row h100 align-center">
                    <li className="my-2 mx-2">
                        <span onClick={navSelected}>
                            About Me
                        </span>
                    </li>
                    <li className="my-2 mx-2">
                        <span onClick={navSelected}>
                            Portfolio
                        </span>
                    </li>
                    <li className="my-2 mx-2">
                        <span onClick={navSelected}>
                            Resume
                        </span>
                    </li>
                    <li className="my-2 mx-2">
                        <span onClick={navSelected}>
                            Contact
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;