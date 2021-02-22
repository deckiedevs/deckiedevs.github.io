const myProjects = [
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
        link: 'https://dashboard.heroku.com/apps/dd-special',
        img: './assets/images/project-10.png',
        text: 'Something Special, a second-hand event decor marketplace created with MySQL and Handlebars',
        name: 'Something Special',
        technologies: 'Node.js/Express.js/MySQL/Handlebars',
        showcase: true
    }
]

// creates portfolio thumbnails
myProjects.forEach(project => {

    const portfolioContainer = document.querySelector('.portfolio-grid-container');

    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');

    if (project.showcase) {
        portfolioItem.setAttribute('id', 'showcase-project');
    };

    portfolioContainer.appendChild(portfolioItem);

    const link = document.createElement('a');
    link.setAttribute('href', project.link);
    link.setAttribute('target', '_blank');
    portfolioItem.appendChild(link);

    const screenshot = document.createElement('img');
    screenshot.setAttribute('src', project.img);
    screenshot.setAttribute('alt', project.text);
    screenshot.classList.add('portfolio-thumbnail');
    link.appendChild(screenshot);

    const description = document.createElement('div');
    description.classList.add('project-name');
    description.innerHTML = `<h3>${project.name}</h3> <br /> ${project.technologies}`;
    portfolioItem.appendChild(description);

    const mobileDescription = document.createElement('div');
    mobileDescription.classList.add('project-name-mobile');
    mobileDescription.innerHTML = `<h3>${project.name}</h3> <br /> ${project.technologies}`;
    portfolioItem.appendChild(mobileDescription);

    portfolioContainer.prepend(portfolioItem);
});