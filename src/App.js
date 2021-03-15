import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
    return (
        <div>
            <Nav />
            <main>
                <About />
                <Portfolio />
                <Resume />
                <Contact />
            </main>
        </div>
    );
}

export default App;
