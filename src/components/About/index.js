import React from 'react';
import Grid from '@material-ui/core/Grid';
import deckie from '../../assets/images/deckie.jpg';
import '../../assets/css/about.css';

function About () {
    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark px-5 py-5 flex-row">
                <h2 className="text-center w100 mb-2">about<span className="text-primary">Me</span></h2>
                <div className="w25">
                    <img className="w100 circle px-1 py-1" id="profile-pic" src={deckie} alt="Mila Decker of deckieDevs" />
                </div>
                <div className="w75 pl-2">
                    <p>
                    Hello! My name is <span className="bold text-primary">Mila Decker</span>. I am an Orlando-based full-stack student currently enrolled in the University of
                    Central Florida Coding Boot Camp. I enjoy clean designs and torturing myself over why my code isn't rendering as expected. When I'm not focused on my
                    coursework, I am also employed full-time as a Forensic Firearms Specialist.
                    <br /><br />
                    This site, <span className="bold text-primary">deckieDevs</span>, is currently the home of my UCF assignments, but I hope to fill it with my personal projects very soon!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;