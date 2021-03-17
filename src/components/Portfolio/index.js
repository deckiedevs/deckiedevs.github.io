import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function Portfolio() {

    // takes the all keys from require.context and returns an array
    // loops through each item of an array and populates 'images' object
    // sets key name to name of image file, but replaces './' prefix
    // sets value to item object
    function importAll(r) {
        let images = {};
        r.keys().forEach(item => { images[item.replace('./', '')] = r(item) });
        return images
    };

    // passes in assets/images/projects folder to importAll() function
    const images = importAll(require.context('../../assets/images/projects', false, /\.png$/));

    const projects = [
        {
            link: 'https://deckiedevs.github.io/horiseon/',
            text: 'Horiseon, a practice in debugging and refactoring.',
            name: 'Horiseon',
            technologies: 'HTML/CSS'
        }, {
            link: 'https://deckiedevs.github.io/password-generator',
            text: 'Password Generator, my first assignment with JavaScript.',
            name: 'Password Generator',
            technologies: 'JavaScript'
        }, {
            link: 'https://deckiedevs.github.io/code-quiz',
            text: 'JavaScript Code Quiz, an interactive quiz that implements DOM manipulation.',
            name: 'JavaScript Code Quiz',
            technologies: 'JavaScript/HTML/CSS'
        }, {
            link: 'https://deckiedevs.github.io/scheduler',
            text: 'Work Day Scheduler, an productivity application that utilizes JQuery and Bootstrap.',
            name: 'Work Day Scheduler',
            technologies: 'JQuery/Bootstrap/HTML'
        }, {
            link: 'https://deckiedevs.github.io/weather-dashboard',
            text: 'Weather Dashboard, a weather application using the OpenWeather API.',
            name: 'Weather Dashboard',
            technologies: 'JavaScript/Bootstrap/HTML'
        }, {
            link: 'https://deckiedevs.github.io/whats-for-dinner',
            text: 'What\'s For Dinner?, my first group project.',
            name: 'What\'s For Dinner?',
            technologies: 'JavaScript/Materialize/HTML'
        }, {
            link: 'https://github.com/deckiedevs/readme-generator',
            text: 'README Generator, a Node.js application to generate a professional README with Inquirer.',
            name: 'README Generator',
            technologies: 'Node.js/Inquirer/JavaScript'
        }, {
            link: 'https://github.com/deckiedevs/team-profile-generator',
            text: 'Team Profile Generator, an application for creating a team roster using Node.js and Inquirer.',
            name: 'Team Profile Generator',
            technologies: 'Node.js/Jest/Inquirer'
        }, {
            link: 'https://deckiedevs-note-taker.herokuapp.com',
            text: 'Note Taker, an Express.js application for taking notes',
            name: 'Note Taker',
            technologies: 'Node.js/Express.js/JavaScript'
        }, {
            link: 'https://dd-special.herokuapp.com/',
            text: 'Something Special, a second-hand event decor marketplace created with MySQL and Handlebars',
            name: 'Something Special',
            technologies: 'Node.js/Express.js/MySQL/Handlebars'
        }
    ]

    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark px-5 py-5">
                <h2 className="text-center mb-2">my<span className="text-primary">Projects</span></h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry>
                        <img src={images[`01.png`].default} className="px-1 py-1 w100" />
                        <img src={images[`02.png`].default} className="px-1 py-1 w100" />
                        <img src={images[`03.png`].default} className="px-1 py-1 w100" />
                        <img src={images[`04.png`].default} className="px-1 py-1 w100" />
                        <img src={images[`05.png`].default} className="px-1 py-1 w100" />
                        <img src={images[`06.png`].default} className="px-1 py-1 w100" />
                        <img src={images[`07.png`].default} className="px-1 py-1 w100" />
                        <img src={images[`08.png`].default} className="px-1 py-1 w100" />
                        <img src={images[`09.png`].default} className="px-1 py-1 w100" />
                        <img src={images[`10.png`].default} className="px-1 py-1 w100" />
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </section>
    );
}

export default Portfolio;