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