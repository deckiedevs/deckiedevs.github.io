import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Modal from '../Modal';
import { images, projects, showcase } from '../../lib/projects'

function Portfolio() {
   
    // adds images to projects array
    projects.forEach((project, i) => {
        i < 9 ?
            project.image = images[`0${i + 1}.png`].default :
            project.image = images[`${i + 1}.png`].default
    });

    const [displayedProject, setDisplayedProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = project => {
        setDisplayedProject(project);
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section className="flex-row justify-center vw100">
            {isModalOpen && <Modal displayedProject={displayedProject} onClose={toggleModal} />}
            <div className="w75 bg-dark px-5 py-5">
                <h2 className="text-center mb-2">my<span className="text-primary">Projects</span></h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry>
                        {/* displays newest projects first */}
                        {projects.map(project => (
                            <img 
                                key={project.id}
                                src={project.image}
                                alt={project.text}
                                onClick={() => toggleModal(project)}
                                className="px-1 py-1 w100" />
                        ))} 
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </section>
    );
};

export default Portfolio;