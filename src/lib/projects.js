// takes the all keys from require.context and returns an array
// loops through each item of an array and populates 'images' object
// sets key name to name of image file, but replaces './' prefix
// sets value to item object
function importAll(req) {
    let images = {};
    req.keys().forEach(item => { 
        images[item.replace('./', '')] = req(item) 
    });

    return images;
};

// passes in assets/images/projects folder to importAll() function
const images = importAll(require.context('../assets/images/projects/thumbnails', false, /\.png$/));

// array of projects to display
export const projects = [
    {
        id: 1,
        name: 'Password Generator',
        text: 'Password Generator, my first assignment with JavaScript.',
        technologies: 'JavaScript',
        deployed: true,
        link: 'https://deckiedevs.github.io/password-generator',
        github: 'https://github.com/deckiedevs/password-generator',
        description: 'The Password Generator was my first JavaScript assignment.  Upon clicking "Generate Password," the user is given a series of prompts to design the password composition.  A pool of possible password characters is created based off of user response, and the password is generated with Math.random().'
    }, 
    {
        id: 2,
        name: 'JavaScript Code Quiz',
        text: 'JavaScript Code Quiz, an interactive quiz that implements DOM manipulation.',
        technologies: 'JavaScript, HTML, CSS',
        deployed: true,
        link: 'https://deckiedevs.github.io/code-quiz',
        github: 'https://github.com/deckiedevs/code-quiz',
        description: 'This quick and simple JavaScript assignment dynamically creates DOM elements to render questions and answers.  Scores are saved using local storage and can be viewed on the ranked scoreboard.'
    }, 
    {
        id: 3,
        name: 'Work Day Scheduler',
        text: 'Work Day Scheduler, an productivity application that utilizes JQuery and Bootstrap.',
        technologies: 'JQuery, Moment.js, Bootstrap, HTML, CSS',
        deployed: true,
        link: 'https://deckiedevs.github.io/scheduler',
        github: 'https://github.com/deckiedevs/scheduler',
        description: 'Built with JQuery and Bootstrap, this Work Day Scheduler allows users to plan their 9 to 5 day.  The scheduler is updated in real time using Moment.js with the current time block being highlighted in red and future time blocks displayed in green.'
    },
    {
        id: 4,
        name: 'Weather Dashboard', 
        text: 'Weather Dashboard, a weather application using the OpenWeather API.',
        technologies: 'Open Weather API, Moment.js, JavaScript, Bootstrap, HTML',
        deployed: true,
        link: 'https://deckiedevs.github.io/weather-dashboard',
        github: 'https://github.com/deckiedevs/weather-dashboard',
        description: 'This weather application uses the OpenWeather API to display the daily and 5-day forecast of the user searched U.S. city.  Up to five of the most recently searched cities are saved.'
    }, 
    {
        id: 5,
        name: 'README Generator',
        text: 'README Generator, a Node.js application to generate a professional README with Inquirer.',
        technologies: 'Node.js, Inquirer.js, JavaScript',
        deployed: false,
        github: 'https://github.com/deckiedevs/readme-generator',
        description: 'The README Generator is a Node.js application built with Inquirer.js.  The README Generator a professional README markdown file based on user input for desired sections.'
    }, 
    {
        id: 6,
        name: 'Team Profile Generator',
        text: 'Team Profile Generator, an application for creating a team roster using Node.js and Inquirer.',
        technologies: 'Node.js, Inquirer.js, Jest, JavaScript',
        deployed: false,
        github: 'https://github.com/deckiedevs/team-profile-generator',
        description: 'The Team Profile Generator was an exercise in object-oriented programming and test-driven developement.  The application itself runs in Node.js and uses Inquirer.js to create a simple webpage featuring a development team\'s roster.  Tests for the application were written using Jest.'
    }, 
    {
        id: 7,
        name: 'Note Taker',
        text: 'Note Taker, an Express.js application for taking notes.',
        technologies: 'Express.js, Node.js, UUID, JavaScript',
        deployed: true,
        link: 'https://deckiedevs-note-taker.herokuapp.com',
        github: 'https://github.com/deckiedevs/note-taker',
        description: 'Note Taker was my first Express.js assignment.  It uses POST and DELETE routes to create, edit, and delete notes from the db.json file.'
    }, 
    {
        id: 8,
        name: 'Employee Tracker',
        text: 'Employee Tracker, an application that allows business owners to manage employees.',
        technologies: 'MySQL, Node.js, Inquirer.js, JavaScript',
        deployed: false,
        github: 'https://github.com/deckiedevs/employee-tracker',
        description: 'Employee Tracker uses MySQL to track employees and their roles, departments, and salaries within a company.  The application was built in Node.js and uses Inquirer.js to allow the user to interact with the database.'
    }, 
    {
        id: 9,
        name: 'e-Commerce Back End',
        text: 'e-Commerce Back End, the back-end of an e-commerce site.',
        technologies: 'MySQL, Sequelize, Node.js, Express.js, JavaScript',
        deployed: false,
        github: 'https://github.com/deckiedevs/e-commerce-back-end',
        description: 'The e-Commerce Back End application was an exercise in REST APIs and CRUD operations.  The application does not have a front-end for public use, but API GET, POST, PUT, and DELETE routes are fully functional for maintaining a commerce database of products, product tags, and product categories.'
    },
    {
        id: 10,
        name: 'The Tech Blog',
        text: 'The Tech Blog, a REST API blog.',
        technologies: 'MySQL, Sequelize, Express.js, Express Sessions, Node.js, Bcrypt, Handlebars',
        deployed: true,
        link: 'https://deckiedevs-tech-blog.herokuapp.com/',
        github: 'https://github.com/deckiedevs/tech-blog',
        description: 'The Tech Blog is a REST API blog created with MySQL and Sequelize.  Users can create accounts to post to the blog or comment on existing posts.  A user\'s post and comment history can be viewed from their dashboard.'
    },
    {
        id: 11,
        name: 'Social Network API',
        text: 'Social Network API, a REST API built with MongoDB and Mongoose.',
        technologies: 'MongoDB, Mongoose, Express.js, Node.js',
        deployed: false,
        github: 'https://github.com/deckiedevs/social-network-api',
        description: 'This Social Network API was a REST API exercise built with MongoDB and Mongoose.  It does not have a front-end for public use, but API GET, POST, PUT, and DELETE routes can be tested in clients such as Insomnia Core or Postman.'
    },
    {
        id: 12,
        name: 'Budget Tracker',
        text: 'Budget Tracker, a simple progressive web application to track finances.',
        technologies: 'IndexedDB, Service Workers, JavaScript',
        deployed: true,
        link: 'https://dd-budget-tracker.herokuapp.com/index.html',
        github: 'https://github.com/deckiedevs/budget-tracker',
        description: 'The Budget Tracker is a progressive web application that uses IndexedDB and service workers to be fully functional offline.'
    },
    {
        id: 13,
        name: 'Book Search',
        text: 'Book Search, a Google Books API powered search engine.',
        technologies: 'GraphQL, MongoDB, Mongoose, Google Books API, JavaScript.',
        deployed: true,
        link: 'https://dd-book-search.herokuapp.com/',
        github: 'https://github.com/deckiedevs/book-search',
        description: 'Book Search is a search engine powered by the Google Books API.  Users may search for books in the search bar.  The searched books will display information regarding the book, including title, author(s), an image, and a short description.  Users who are logged in may save their books to view later.'
    },
    {
        id: 14,
        name: 'Shop-Shop with Redux',
        text: 'Shop-Shop, an e-commerce site built with React-Redux and Stripe API.',
        deployed: true,
        link: 'https://dd-shop-redux.herokuapp.com/',
        github: 'https://github.com/deckiedevs/shop-shop-redux',
        description: 'Shop Shop is a MERN stack e-commerce website that uses React-Redux and Stripe API.  To test the deployed application, you may log in using the email "test@test.com" and the password "password".'
    }
];

// adds images to projects array
projects.forEach((project, i) => {
    i < 9 ?
        project.image = images[`0${i + 1}.png`].default :
        project.image = images[`${i + 1}.png`].default
});

// displays newest projects first
projects.reverse();

// same logic for showcase items below this point

const showcaseImages = importAll(require.context('../assets/images/showcase/thumbnails', false, /\.png$/));

export const showcase = [
    {
        id: 1,
        name: 'What\'s For Dinner?',
        text: 'What\'s For Dinner?, my first group project.',
        technologies: 'JavaScript, Spoonacular API, Math.js, HTML, Materialize',
        deployed: true,
        link: 'https://deckiedevs.github.io/whats-for-dinner',
        github: 'https://github.com/deckiedevs/whats-for-dinner',
        description: 'What\'s For Dinner is a recipe finder application that allows users to plan dinner based on user selected input for type of cuisine, dietary restrictions, and desired ingredients.  Users can save their favorite recipes and return to them later!'
    },
    {
        id: 2,
        name: 'Something Special',
        text: 'Something Special, a second-hand event decor marketplace created with MySQL and Handlebars',
        technologies: 'Node.js, Express.js, MySQL, Sequelize, Firebase, Handlebars',
        deployed: true,
        link: 'https://dd-special.herokuapp.com/',
        github: 'https://github.com/deckiedevs/something-special',
        description: 'Something Special is a full-stack REST API website that allows users to post and comment on listings for second-hand event decor items.  It was built in just two weeks and features a live preview for editing posts and a post search feature.  The application requires the user to log in to view listings.  Please feel free to use the credentials \'test@test.com\' and \'password\' to log in and view the page.'
    },
    {
        id: 3,
        name: 'Prentus',
        text: 'Prentus, a website to discover tech talent.',
        technologies: 'BootStrap, Versoly',
        deployed: true,
        link: 'https://prentus.co/',
        github: false,
        description: 'Prentus was my first project to be used live outside of the UCF BootCamp.  I was tasked with rendering the second section of the home page entitled "Where We Find Undiscovered Talent".  The page was built using Versoly, a landing page builder, and BootStrap.  The design was provided by Prentus founder Rod Danan.'
    }
];

showcase.forEach((project, i) => project.image = showcaseImages[`0${i + 1}.png`].default)