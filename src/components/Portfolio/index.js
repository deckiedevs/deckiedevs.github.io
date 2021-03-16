import React from 'react';

function Portfolio() {

    const projects = [
        {
            link: 'https://deckiedevs.github.io/horiseon/',
            img: './assets/images/project-1.png', 
            text: 'Horiseon, a practice in debugging and refactoring.',
            name: 'Horiseon',
            technologies: 'HTML/CSS'
        }, {
            link: 'https://deckiedevs.github.io/password-generator',
            img: './assets/images/project-2.png',
            text: 'Password Generator, my first assignment with JavaScript.',
            name: 'Password Generator',
            technologies: 'JavaScript'
        }, {
            link: 'https://deckiedevs.github.io/code-quiz',
            img: './assets/images/project-3.png',
            text: 'JavaScript Code Quiz, an interactive quiz that implements DOM manipulation.',
            name: 'JavaScript Code Quiz',
            technologies: 'JavaScript/HTML/CSS'
        }, {
            link: 'https://deckiedevs.github.io/scheduler',
            img: './assets/images/project-4.png',
            text: 'Work Day Scheduler, an productivity application that utilizes JQuery and Bootstrap.',
            name: 'Work Day Scheduler',
            technologies: 'JQuery/Bootstrap/HTML'
        }, {
            link: 'https://deckiedevs.github.io/weather-dashboard',
            img: './assets/images/project-5.png',
            text: 'Weather Dashboard, a weather application using the OpenWeather API.',
            name: 'Weather Dashboard',
            technologies: 'JavaScript/Bootstrap/HTML'
        }, {
            link: 'https://deckiedevs.github.io/whats-for-dinner',
            img: './assets/images/project-6.png',
            text: 'What\'s For Dinner?, my first group project.',
            name: 'What\'s For Dinner?',
            technologies: 'JavaScript/Materialize/HTML'
        }, {
            link: 'https://github.com/deckiedevs/readme-generator',
            img: './assets/images/project-7.png',
            text: 'README Generator, a Node.js application to generate a professional README with Inquirer.',
            name: 'README Generator',
            technologies: 'Node.js/Inquirer/JavaScript'
        }, {
            link: 'https://github.com/deckiedevs/team-profile-generator',
            img: './assets/images/project-8.png',
            text: 'Team Profile Generator, an application for creating a team roster using Node.js and Inquirer.',
            name: 'Team Profile Generator',
            technologies: 'Node.js/Jest/Inquirer'
        }, {
            link: 'https://deckiedevs-note-taker.herokuapp.com',
            img: './assets/images/project-9.png',
            text: 'Note Taker, an Express.js application for taking notes',
            name: 'Note Taker',
            technologies: 'Node.js/Express.js/JavaScript'
        }, {
            link: 'https://dd-special.herokuapp.com/',
            img: './assets/images/project-10.png',
            text: 'Something Special, a second-hand event decor marketplace created with MySQL and Handlebars',
            name: 'Something Special',
            technologies: 'Node.js/Express.js/MySQL/Handlebars'
        }
    ]

    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark px-5 py-5">
                <h2 className="text-center mb-2">my<span className="text-primary">Projects</span></h2>
                <p>Coming soon!</p>
            </div>
        </section>
    );
}

export default Portfolio;