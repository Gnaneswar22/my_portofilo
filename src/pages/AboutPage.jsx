import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cursor from '../components/Cursor';
import logo from '../assets/img/favicon.svg';
import profileImg from '../assets/img/portfolio_img.jpeg';
// You might want to update this image too

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('experience');

    return (
        <>
            <Cursor />
            <Link to="/" className="logo">
                <img src={logo} alt="Logo" />
            </Link>

            <section className="more-about">
                <div className="container">
                    <div className="section-title">
                        <h2>Gnaneswar <span>Damarasingu </span>.</h2>
                    </div>
                    <div className="more-about-content">
                        <div className="more-about-img">
                            <img src={profileImg} alt="Gnaneswar Damarasingu" />
                        </div>
                        <div className="more-about-text">
                            <p>
                                Final-year B.Tech student in Artificial Intelligence & Machine Learning with strong foundations in software engineering,
                                object-oriented programming, and data structures.
                            </p>
                            <br />
                            <p>
                                I have hands-on experience across the complete Software Development Life Cycle (SDLC) including design, development,
                                testing, debugging, deployment, and maintenance. I have a proven ability to build scalable full-stack applications,
                                collaborate in Agile teams, and quickly adapt to new technologies. I possess strong problem-solving skills with a
                                continuous learning mindset.
                            </p>

                            <h3>Skills</h3>
                            <div className="skills">
                                <div className="skill-item">Python</div>
                                <div className="skill-item">JavaScript</div>
                                <div className="skill-item">C#</div>
                                <div className="skill-item">React.js</div>
                                <div className="skill-item">Node.js</div>
                                <div className="skill-item">Express.js</div>
                                <div className="skill-item">MongoDB</div>
                                <div className="skill-item">SQL</div>
                                <div className="skill-item">Tailwind CSS</div>
                                <div className="skill-item">Redux</div>
                                <div className="skill-item">Git/GitHub</div>
                                <div className="skill-item">Figma</div>
                            </div>

                            <div className="tabs">
                                <button
                                    type="button"
                                    className={`tab-item ${activeTab === 'experience' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('experience')}
                                >Experience</button>
                                <button
                                    type="button"
                                    className={`tab-item ${activeTab === 'education' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('education')}
                                >Education</button>
                                <button
                                    type="button"
                                    className={`tab-item ${activeTab === 'achievements' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('achievements')}
                                >Achievements</button>
                            </div>

                            {/* Experience */}
                            <div className={`tab-content ${activeTab === 'experience' ? 'active' : ''}`} id="experience">
                                <div className="timeline">
                                    <div className="timeline-item">
                                        <span className="date">Sep 2025 - Dec 2025</span>
                                        <h4>Full Stack Developer Intern - <span>Mom Pharmacy</span></h4>
                                        <ul>
                                            <li>Contributed to end-to-end development of a pharmacy management and e-commerce platform following SDLC best practices.</li>
                                            <li>Designed and developed responsive user interfaces using React.js and Tailwind CSS.</li>
                                            <li>Integrated RESTful APIs and optimized backend services for performance and reliability.</li>
                                            <li>Implemented secure role-based access control (RBAC) for authorization management.</li>
                                        </ul>
                                    </div>
                                    <div className="timeline-item">
                                        <span className="date">Jun 2025 - Aug 2025</span>
                                        <h4>AI/ML Intern - <span>BharatVersity - BITS Pilani Campus</span></h4>
                                        <ul>
                                            <li>Performed exploratory data analysis (EDA) and feature engineering for user behavior segmentation.</li>
                                            <li>Applied clustering techniques to improve model accuracy and profiling.</li>
                                            <li>Assisted in deploying machine learning models and integrating them into applications via APIs.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div className={`tab-content ${activeTab === 'education' ? 'active' : ''}`} id="education">
                                <div className="timeline">
                                    <div className="timeline-item">
                                        <span className="date">2022 - 2026</span>
                                        <h4>B.Tech in Artificial Intelligence & Machine Learning- <span>Sri Sivani College of Engineering</span></h4>
                                        <p>CGPA: 7.5</p>
                                    </div>
                                    <div className="timeline-item">
                                        <span className="date">2020 - 2022</span>
                                        <h4>Intermediate - <span>Ravindra Bharathi Junior College</span></h4>
                                        <p>CGPA: 7.0</p>
                                    </div>
                                    <div className="timeline-item">
                                        <span className="date">2019 - 2020</span>
                                        <h4>High School - <span>Kerala English Medium School</span></h4>
                                        <p>CGPA: 9.8</p>
                                    </div>
                                </div>
                            </div>

                            {/* Achievements */}
                            <div className={`tab-content ${activeTab === 'achievements' ? 'active' : ''}`} id="achievements">
                                <div className="timeline">
                                    <div className="timeline-item">
                                        <span className="date">Aug 2025</span>
                                        <h4>1st Prize – GenAI Hackathon - <span>Zetro Bytes</span></h4>
                                    </div>
                                    <div className="timeline-item">
                                        <span className="date">Feb 2025</span>
                                        <h4>1st Prize – 24-Hour Web Development Hackathon - <span>Brain-O-Vision</span></h4>
                                    </div>
                                    <div className="timeline-item">
                                        <span className="date">May 2025</span>
                                        <h4>Research Presentation – “AI Meets XR for Education” - <span>AMLDA International Conference</span></h4>
                                    </div>
                                </div>
                            </div>

                            <div className="about-cta">
                                <a href="/" className="exp-cta">Contact me</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default AboutPage;
