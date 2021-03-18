// takes the all keys from require.context and returns an array
// loops through each item of an array and populates 'images' object
// sets key name to name of image file, but replaces './' prefix
// sets value to item object
function importAll(req) {
    let images = {};
    req.keys().forEach(item => { 
        images[item.replace('./', '')] = req(item) 
    });

    return images
};

// passes in assets/images/projects folder to importAll() function
export const images = importAll(require.context('../assets/images/projects', false, /\.png$/));

// array of projects to display
export const projects = [
    {
        id: 1,
        link: 'https://deckiedevs.github.io/horiseon/',
        text: 'Horiseon, a practice in debugging and refactoring.',
        name: 'Horiseon',
        technologies: 'HTML/CSS'
    }, {
        id: 2,
        link: 'https://deckiedevs.github.io/password-generator',
        text: 'Password Generator, my first assignment with JavaScript.',
        name: 'Password Generator',
        technologies: 'JavaScript'
    }, {
        id: 3,
        link: 'https://deckiedevs.github.io/code-quiz',
        text: 'JavaScript Code Quiz, an interactive quiz that implements DOM manipulation.',
        name: 'JavaScript Code Quiz',
        technologies: 'JavaScript/HTML/CSS'
    }, {
        id: 4,
        link: 'https://deckiedevs.github.io/scheduler',
        text: 'Work Day Scheduler, an productivity application that utilizes JQuery and Bootstrap.',
        name: 'Work Day Scheduler',
        technologies: 'JQuery/Bootstrap/HTML'
    }, {
        id: 5,
        link: 'https://deckiedevs.github.io/weather-dashboard',
        text: 'Weather Dashboard, a weather application using the OpenWeather API.',
        name: 'Weather Dashboard',
        technologies: 'JavaScript/Bootstrap/HTML'
    }, {
        id: 6,
        link: 'https://github.com/deckiedevs/readme-generator',
        text: 'README Generator, a Node.js application to generate a professional README with Inquirer.',
        name: 'README Generator',
        technologies: 'Node.js/Inquirer/JavaScript'
    }, {
        id: 7,
        link: 'https://github.com/deckiedevs/team-profile-generator',
        text: 'Team Profile Generator, an application for creating a team roster using Node.js and Inquirer.',
        name: 'Team Profile Generator',
        technologies: 'Node.js/Jest/Inquirer'
    }, {
        id: 8,
        link: 'https://deckiedevs-note-taker.herokuapp.com',
        text: 'Note Taker, an Express.js application for taking notes',
        name: 'Note Taker',
        technologies: 'Node.js/Express.js/JavaScript'
    }, 
];

export const showcase = [
    {
        id: 1,
        link: 'https://deckiedevs.github.io/whats-for-dinner',
        text: 'What\'s For Dinner?, my first group project.',
        name: 'What\'s For Dinner?',
        technologies: 'JavaScript/Materialize/HTML'
    },
    {
        id: 2,
        link: 'https://dd-special.herokuapp.com/',
        text: 'Something Special, a second-hand event decor marketplace created with MySQL and Handlebars',
        name: 'Something Special',
        technologies: 'Node.js/Express.js/MySQL/Handlebars'
    }
];