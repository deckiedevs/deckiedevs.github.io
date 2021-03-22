import React, { useState, useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

    const [pages] = useState([
        { name : 'About' },
        { name: 'Portfolio' },
        { name: 'Resume' },
        { name: 'Contact' }
    ]);
    const [currentPage, setCurrentPage] = useState(pages[0]);

    useEffect(() => {
        document.title = `deckieDevs :: ${currentPage.name}`
    });

    return (
        <div>
            <Nav 
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <main>
                {currentPage.name === 'About' && <About />}
                {currentPage.name === 'Portfolio' && <Portfolio />}
                {currentPage.name === 'Resume' && <Resume />}
                {currentPage.name === 'Contact' && <Contact />}
            </main>
            <Footer />
        </div>
    );
};

export default App;
