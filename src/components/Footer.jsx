import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <hr />
            <div className="footer-head">
                <h5>Say Hello</h5>
                <div className="link-container">
                    <div className="footer-links">
                        <p>
                            <a
                                data-text="gnaneswardamarasingu@gmail.com"
                                href="mailto:gnaneswardamarasingu@gmail.com"
                            >gnaneswardamarasingu@gmail.com</a>
                        </p>
                    </div>
                    <div className="footer-links">
                        <p><a href="https://github.com/gnaneswar-damarasingu" target="_blank" rel="noopener noreferrer">GH</a></p>
                        <p><a href="https://linkedin.com/in/gnaneswar-damarasingu" target="_blank" rel="noopener noreferrer">LN</a></p>
                    </div>
                </div>
            </div>
            <div className="footer-copy"> &copy; Gnaneswar Damarasingu 2025</div>
        </footer>
    );
};

export default Footer;
