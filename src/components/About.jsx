import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/img/portfolio_img.jpeg';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="profile-img">
                    <img src={profileImg} alt="Israel Oyetunji Mitolu" />
                </div>
                <div className="about-content">
                    <div className="about-heading">
                        <h2>About Me</h2>
                    </div>
                    <p>
                        Hello there, I'm Gnaneswar Damarasingu - a final-year B.Tech student in Artificial Intelligence & Machine Learning with a knack for building robust full-stack applications.
                        <br /><br />
                        I have hands-on experience across the complete Software Development Life Cycle (SDLC), including design, development, testing, and deployment.
                        My technical stack includes React.js, Node.js, Express.js, and Tailwind CSS, along with languages like Python, JavaScript, and C#.
                        <br /><br />
                        I am passionate about solving complex problems and collaborating in Agile teams to deliver high-quality software solutions.
                        Whether it's developing a pharmacy management system or exploring AI/ML models, I bring a dedication to continuous learning and excellence.
                    </p>

                    <div className="about-cta">
                        <a href="#contact" className="skills-cta">Hire me</a>
                        <span>—</span>
                        <Link to="/about" className="exp-cta">More about me</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
