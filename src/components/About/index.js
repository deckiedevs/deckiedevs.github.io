import React from 'react';
import Grid from '@material-ui/core/Grid';
import deckie from '../../assets/images/deckie.jpg';

function About () {
    return (
        <section className="flex-row justify-center">
            <Grid 
                container
                direction="row"
                justify="center"
                xs={10}
                md={9}
                className="bg-dark my-5 px-5 py-5">
                    <Grid 
                        container 
                        item
                        justify="center"
                        xs={12}>
                        <h2 className="mb-2">about<span className="text-primary">Me</span></h2>
                    </Grid>
                    <Grid container item xd={12} md={4}>
                        <img className="w100 circle px-1 py-1" id="profile-pic" src={deckie} />
                    </Grid>
                    <Grid container item xs={12} md={8}>
                        <p>
                        Hello! My name is <span className="bold text-primary">Mila Decker</span>. I am an Orlando-based full-stack student currently enrolled in the University of
                        Central Florida Coding Boot Camp. I enjoy clean designs and torturing myself over why my code isn't rendering as expected. When I'm not focused on my
                        coursework, I am also employed full-time as a Forensic Firearms Specialist.
                        <br /><br />
                        This site, <span className="bold text-primary">deckieDevs</span>, is currently the home of my UCF assignments, but I hope to fill it with my personal projects very soon!
                        </p>
                    </Grid>
            </Grid>
        </section>
    );
}

export default About;