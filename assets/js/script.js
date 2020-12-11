let myProjects = [
    {
        'link': 'https://deckiedevs.github.io/horiseon/',
        'img': './assets/images/project-1.png', 
        'text': 'Horiseon, a practice in debugging and refactoring.',
        'name': 'Horiseon',
        'technologies': 'HTML/CSS'
    }, {
        'link': 'https://deckiedevs.github.io/password-generator',
        'img': './assets/images/project-2.png',
        'text': 'Password Generator, my first assignment with JavaScript.',
        'name': 'Password Generator',
        'technologies': 'JavaScript'
    }, {
        'link': 'https://deckiedevs.github.io/code-quiz',
        'img': './assets/images/project-3.png',
        'text': 'JavaScript Code Quiz, an interactive quiz that implements DOM manipulation.',
        'name': 'JavaScript Code Quiz',
        'technologies': 'JavaScript/HTML/CSS'
    }, {
        'link': 'https://deckiedevs.github.io/scheduler',
        'img': './assets/images/project-4.png',
        'text': 'Work Day Scheduler, an productivity application that utilizes JQuery and Bootstrap.',
        'name': 'Work Day Scheduler',
        'technologies': 'JQuery/Bootstrap/HTML'
    }, {
        'link': 'https://deckiedevs.github.io/weather-dashboard',
        'img': './assets/images/project-5.png',
        'text': 'Weather Dashboard, a weather application using the OpenWeather API.',
        'name': 'Weather Dashboard',
        'technologies': 'JavaScript/Bootstrap/HTML'
    }, {
        'link': 'https://deckiedevs.github.io/whats-for-dinner',
        'img': './assets/images/project-6.png',
        'text': "What's For Dinner?, my first group project.",
        'name': "What's For Dinner?",
        'technologies': 'JavaScript/Materialize/HTML'
    }
]

for (let i = 0; i < myProjects.length; i++) {
    var portfolioContainer = document.querySelector('.portfolio-grid-container');

    var portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');
    portfolioContainer.appendChild(portfolioItem);

    var link = document.createElement('a');
    link.setAttribute('href', myProjects[i].link);
    link.setAttribute('target', '_blank');
    portfolioItem.appendChild(link);

    var screenshot = document.createElement('img');
    screenshot.setAttribute('src', myProjects[i].img);
    screenshot.setAttribute('alt', myProjects[i].text);
    screenshot.classList.add('portfolio-thumbnail');
    link.appendChild(screenshot);

    var description = document.createElement('div');
    description.classList.add('project-name');
    description.innerHTML = `<h3>${myProjects[i].name}</h3> <br /> ${myProjects[i].technologies}`;
    portfolioItem.appendChild(description);

    var mobileDescription = document.createElement('div');
    mobileDescription.classList.add('project-name-mobile');
    mobileDescription.innerHTML = `<h3>${myProjects[i].name}</h3> <br /> ${myProjects[i].technologies}`;
    portfolioItem.appendChild(mobileDescription);

    portfolioContainer.prepend(portfolioItem);
}

// sets most recent project as a showcase project
document.querySelector('.portfolio-item').setAttribute('id', 'showcase-project');