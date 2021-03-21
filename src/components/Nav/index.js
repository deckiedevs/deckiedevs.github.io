import React from 'react';
import '../../assets/css/nav.css';

function Nav(props) {
    
    // destructure props
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;
    
    return (
        <header className="flex-row justify-space-between px-2">
            <h2 className="flex-row my-2 align-center">
                <a href="/">
                    deckie<span className="text-primary">Devs</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row h100 align-center">
                    {pages.map(page => (
                        <li className={`my-2 mx-2 ${page.name === currentPage.name && 'navActive'}`} key={page.name}>
                            <span onClick={() => {
                                setCurrentPage(page)
                            }}
                        >
                            {page.name}
                        </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;