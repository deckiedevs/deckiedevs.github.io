import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { images, projects, showcase } from '../../lib/projects'

function Portfolio() {
   
    // adds images to projects array
    projects.forEach((project, i) => {
        i < 9 ?
            project.image = images[`0${i + 1}.png`].default :
            project.image = images[`${i + 1}.png`].default
            console.log(projects)
    });

    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark px-5 py-5">
                <h2 className="text-center mb-2">my<span className="text-primary">Projects</span></h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry>
                        {projects.map((project, i) => (
                            <img src={project.image} className="px-1 py-1 w100" key={project.id}/>
                        ))} 
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </section>
    );
};

export default Portfolio;