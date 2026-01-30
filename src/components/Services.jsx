import React from 'react';
import { IoCodeSlashOutline, IoDesktopOutline, IoColorPaletteOutline, IoHardwareChipOutline } from 'react-icons/io5';

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="services-content">
                    <div className="services-heading">
                        <h2>My Services</h2>
                    </div>
                </div>
                <div className="service-item-container">
                    <div className="service-item">
                        <IoDesktopOutline className="react-icon" />
                        <h5>Frontend Development</h5>
                        <p>
                            I craft responsive and interactive user interfaces using React.js, Next.js, and Tailwind CSS, ensuring a seamless user experience.
                        </p>
                    </div>
                    <div className="service-item">
                        <IoCodeSlashOutline className="react-icon" />
                        <h5>Full Stack Development</h5>
                        <p>
                            I build robust end-to-end web applications with secure backends (Node.js, Express) and dynamic frontends, managing the complete SDLC.
                        </p>
                    </div>
                    <div className="service-item">
                        <IoColorPaletteOutline className="react-icon" />
                        <h5>UI/UX Design</h5>
                        <p>
                            I design intuitive and visually appealing interfaces using tools like Figma, focusing on user-centric design principles and accessibility.
                        </p>
                    </div>
                    <div className="service-item">
                        <IoHardwareChipOutline className="react-icon" />
                        <h5>AI & Machine Learning</h5>
                        <p>
                            I develop and deploy machine learning models, perform data analysis, and implement intelligent solutions using Python and AI frameworks.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
