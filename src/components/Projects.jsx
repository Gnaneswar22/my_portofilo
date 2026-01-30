import React from 'react';
import { IoLogoGithub, IoOpenOutline } from 'react-icons/io5';

const projects = [
    {
        title: 'Harvest Hub',
        tech: 'React.js   Node.js   Express.js   MongoDB',
        github: 'https://github.com/Gnaneswar22/harvest-hub',
        description: 'A scalable full-stack web application enabling direct farmer-to-consumer transactions with secure authentication and product catalog management.'
    },
    {
        title: 'AI Career Assistant',
        tech: 'TypeScript   AI Integration',
        github: 'https://github.com/Gnaneswar22/ai-career-assistant',
        description: 'An AI-powered tool to assist with career planning and guidance.'
    },
    {
        title: 'Srikakulam Police Website',
        tech: 'HTML   CSS   JavaScript   PHP   SQL',
        github: 'https://github.com/Gnaneswar22/policeweb',
        description: 'Public-facing website with an administrative backend for real-time content management and secure database interactions.'
    },
    {
        title: 'Inventory & Stock Prediction',
        tech: 'Python   Data Analysis',
        github: 'https://github.com/Gnaneswar22/Inventory-Management-with-sales-analysis-and-stock-prediction',
        description: 'System for tracking inventory with sales analysis and stock level prediction features.'
    },
    {
        title: 'Tea Leaf Disease Prediction',
        tech: 'HTML   AI/ML',
        github: 'https://github.com/Gnaneswar22/tea_leaf_diseases_predictions',
        description: 'Web application for detecting and predicting diseases in tea leaves using machine learning.'
    },
    {
        title: 'DSA Python',
        tech: 'Python   Data Structures   Algorithms',
        github: 'https://github.com/Gnaneswar22/DSA-PYTHON',
        description: 'A comprehensive collection of Data Structures and Algorithms implemented in Python.'
    },
    {
        title: 'React Todo App',
        tech: 'React.js   JavaScript',
        github: 'https://github.com/Gnaneswar22/reactJS-todo',
        description: 'A clean and functional Todo application built with React.js.'
    },
    {
        title: 'E-Commerce Website',
        tech: 'HTML   CSS   JavaScript   PHP   SQL',
        github: 'https://github.com/Gnaneswar22/E-Commerce-Website',
        description: 'Dynamic e-commerce platform with backend-driven product listings, inventory handling, and order workflows.'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="project">
            <h5>— check out some </h5>
            <h2>Stuff I’ve worked on 💻</h2>
            <div className="project-item-container">
                {projects.map((project, index) => (
                    <div className="project-box" key={index}>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-box__absolute-link"
                            aria-label={project.title}
                        >
                        </a>
                        <div className="project-box__link">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoGithub className="react-icon" />
                            </a>
                        </div>
                        <div className="project-box__content">
                            <h3>{project.title}</h3>
                            <h5>{project.tech}</h5>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Projects;
