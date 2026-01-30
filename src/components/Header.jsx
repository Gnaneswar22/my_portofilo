import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/portfolio_img.jpeg';

const Header = () => {
    const [theme, setTheme] = useState('dark');

    const handleThemeChange = (e) => {
        const isChecked = e.target.checked;
        const newTheme = isChecked ? 'light' : 'dark';
        setTheme(newTheme);

        document.documentElement.classList.add("transition");
        document.documentElement.setAttribute("data-theme", newTheme);
        window.setTimeout(() => {
            document.documentElement.classList.remove("transition");
        }, 1200);
    };

    return (
        <header>
            {/* Shapes */}
            <div className="effect-wrap">
                <div className="effect effect-1"></div>
                <div className="effect effect-2">
                    <div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div>
                </div>
                <div className="effect effect-3"></div>
                <div className="effect effect-4">
                    <div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div>
                </div>
            </div>

            <Link to="/" className="logo" aria-label="Home">
                <img src={logo} alt="Logo" />
            </Link>

            <div className="inner">
                <span>i</span>
                <h1>Hello 👋</h1>
                <p>
                    I am Gnaneswar, a Full Stack Developer and AI/ML enthusiast.
                    If you need a scalable application or a collaborative team player, send me a
                    <a href="#contact">message</a>
                </p>
            </div>

            <div className="toggle-container">
                <input
                    type="checkbox"
                    id="switch"
                    name="theme"
                    onChange={handleThemeChange}
                />
                <label className="toggle" htmlFor="switch">Toggle</label>
            </div>

            <div className="landing-text">
                <h1>Gnaneswar Damarasingu</h1>
                <p>
                    Final-year B.Tech student in AI & ML with strong foundations in software engineering.
                    <i>Building scalable full-stack applications with a continuous learning mindset.</i>
                </p>
            </div>
        </header>
    );
};

export default Header;
