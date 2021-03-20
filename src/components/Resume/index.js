import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import myResume from '../../assets/pdf/decker-resume.pdf';
import '../../assets/css/resume.css';

function Resume() {
    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark px-5 py-5 flex-row justify-center">
                <div className="w25 text-center">
                    <div className="resume-block">
                        <h2>Mila <span className="text-primary">Decker</span></h2>
                        <h4>Orlando-based Web Developer</h4>
                        <form method="get" action={myResume} target="_blank">
                            <button type="submit" className="btn">
                                <FontAwesomeIcon icon={faFileDownload} className="mr-1" />
                                Download Resume
                            </button>
                        </form>
                    </div>
                    <div className="resume-block">
                        <h5>Skills</h5>
                        Node.js, Express.js, React, MongoDB, Mongoose, MySQL, Sequelize, JavaScript, JQuery, HTML, CSS, Bootstrap, Materialize, AJAX, REST API, Git
                    </div>
                    <div className="resume-block">
                        <h5>Education</h5>
                        <ul className="resume-list">
                            <li>Full-stack Coding Boot Camp Certificate</li>
                            <li>B.S. in Forensic Science</li>
                            <li>A.A. & A.S. in General Studies</li>
                        </ul>
                    </div>
                </div>
                <div className="w75">
                    <h3>Experience</h3>
                    <div className="resume-block">
                        <h4 className="text-primary">Forensic Firearms Specialist</h4>
                        <h5>Orange County Sheriff's Office</h5>
                        <h5 className="resume-date">November 2017 to Present</h5>
                        <ul className="experience-list">
                            <li>Eliminated a backlog of over 1,000 firearms through efficient time and caseload management.</li>
                            <li>Prepare technical reports and perform technical reviews of peer reports.</li>                        
                            <li>Maintain open lines of communication with investigators and prosecutors to deliver the best available forensic evidence for trial.</li>
                        </ul>
                    </div>
                    <div className="resume-block">
                        <h4 className="text-primary">Crime Scene Investigator II</h4>
                        <h5>Orange County Sheriff's Office</h5>
                        <h5 className="resume-date">August 2013 to November 2017</h5>
                        <ul className="experience-list">
                            <li>Utilized critical thinking and analytical skills to process crime scenes.</li>
                            <li>Applied logic, reasoning, and problem solving skills to conduct investigations.</li>
                            <li>Explained complex scientific and mathematical concepts through over 600 training hours as a certified Field Training Officer.</li>
                            <li>Prepared demonstrative tools for courtroom testimony.</li>
                        </ul>
                    </div>
                    <div className="resume-block">
                        <h4 className="text-primary">Crime Laboratory Technician II</h4>
                        <h5>Orange County Sheriff's Office</h5>
                        <h5 className="resume-date">June 2011 to August 2013</h5>
                        <ul className="experience-list">
                            <li>Responded to, evaluated, and processed thousands of crime scenes.</li>
                            <li>Prepared reports and diagrams for courtroom testimony.</li>
                        </ul>
                    </div>
                    <div className="resume-block">
                        <h4 className="text-primary">Academic Resource Center Tutor</h4>
                        <h5>University of Baltimore</h5>
                        <h5 className="resume-date">September 2008 to May 2010</h5>
                        <ul className="experience-list">
                            <li>Tutored peers in algebra, statistics, and criminal justice.</li>
                            <li>Organized and led group study sessions.</li>
                            <li>Pioneered an online tutoring program that gave students the option to learn remotely.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;