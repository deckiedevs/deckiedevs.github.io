import React from 'react';
import Grid from '@material-ui/core/Grid';

function Portfolio() {
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
                        <h2 className="mb-2">my<span className="text-primary">Resume</span></h2>
                    </Grid>

                    <Grid container item xs={12} md={8}>
                        <p>
                        Coming soon!
                        </p>
                    </Grid>
            </Grid>
        </section>
    );
}

export default Portfolio;