import React from 'react';

const Intro = ({ onExplore }) => {
    return (
        <div className="intro">
            <div className="intro-text">
                <h2 className="hide">
                    <span className="text">Creating innovations</span>
                </h2>
                <h2 className="hide">
                    <span className="text">For Everyday</span>
                </h2>
                <h2 className="hide">
                    <span className="text">people.</span>
                </h2>
            </div>
            <button className="intro-btn" onClick={onExplore}>EXPLORE</button>
        </div>
    );
};

export default Intro;
