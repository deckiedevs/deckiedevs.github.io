import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import deckie from '../../assets/images/deckie.jpg';
import '../../assets/css/about.css';

function About () {
    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark section-container flex-row justify-center">
                <h2 className="text-center w100 mb-2">about<span className="text-primary">Me</span></h2>
                <div className="text-center" id="my-picture">
                    <img className="circle" id="profile-pic" src={deckie} alt="Mila Decker of deckieDevs" />
                    <a href="https://github.com/deckiedevs" target="_blank">
                        <FontAwesomeIcon icon={faGithubAlt} className="mx-2 icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/mila-decker/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="mx-2 icon" />
                    </a>
                </div>
                <div className="w75" id="about-me">
                    <p>
                        Hello! My name is <span className="bold text-primary">Mila Decker</span>. I am a forensic investigator turned MERN stack developer.
                    </p>
                    <p>
                        In October 2020, I embarked on a 24-week journey to become a full stack developer.  It was not planned.  I was (and still am) employed full time as a Forensic Firearms Specialist.  Prior to that, I was a Crime Scene Investigator.  My degree was in Forensic Science.  Outside of a very brief fling with LiveJournal customization back in my formative years, I had no prior experience with coding.  I had not given coding any thought in those years that passed.  It was not a dream deferred. 
                    </p>
                    <p>
                        To reiterate: I spontaneously decided to devote six months of my life to a coding boot camp despite having an established career, having no prior experience, and having no idea if I would even enjoy this kind of work.  Oh, and I was six months pregnant at the time.
                    </p>
                    <p>
                        That's right.  I was six months pregnant, a fact that I hid from my cohort out of fear that I would eventually use it as an excuse to not put in 100% of my effort.  I willingly signed up knowing that I would give birth to my first child half-way through, a fact that I hid from my instructor until the day I was in labor.  I volunteered myself to learn some pretty complex and foreign concepts while learning to be a new mom, a fact that I had considered hiding from you, potential employers and anyone else reading this right now, in trepidation that it would impact your impression of my commitment.
                    </p>
                    <p>
                        So why did I decide to put myself through this?  And why am I telling you all of this now?
                    </p>
                    <p>
                        I can't really say what compelled me to take up coding.  Maybe I wanted a challenge.  (Understatement of the year.)  Maybe I had an inkling that, given my science and math background, I would enjoy it.  Whatever it was, I have no regrets.  I took to coding like a fish to water.  And I'm telling you all of this now because it's easy to say that I am a fast learner and a dedicated worker, but how many people can say they juggled a working full time job, learning a barrage of coding concepts, and joining the sleep-deprived club that is motherhood without dropping a single ball?  How many can claim they've helped their classmates with assignments while helping their newborn settle down for bed?
                    </p>
                    <p>
                        Hello, my name is Mila Decker.  Investigator.  Developer.  Mom.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;